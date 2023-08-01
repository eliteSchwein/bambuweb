import {connect, MqttClient} from "mqtt";
import {storage} from "@/main";

export class BambuClient{
    mqtt: MqttClient | null = null

    async connect() {
        const request = await fetch("/config.json")
        const config = await request.json()

        storage.mqtt_state = "connecting"

        this.mqtt = connect(`mqtts://${config.connection.host}:${config.connection.port}`, {
            username: config.connection.user,
            password: config.connection.token,
            reconnectPeriod: 0,
            rejectUnauthorized: false,
        })

        this.mqtt.addListener('close', ()=>{
            storage.mqtt_state = "disconnected"
        })
    }

    reconnect() {
        storage.mqtt_state = "connecting"
        this.mqtt?.reconnect()
    }

    getMqttClient() {
        return this.mqtt
    }
}

export interface BambuClient {
    connect(): void
}
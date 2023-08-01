import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi'
    },
    components,
    directives,
})

import App from './App.vue'
// import router from './router'
import {BambuClient} from "@/plugins/BambuClient";

const app = createApp(App)

// app.use(router)
app.use(vuetify)
app.provide('bambuClient', new BambuClient())

void assignConfig()

async function assignConfig() {
    const request = await fetch("/config.json")
    const config = await request.json()

    app.provide('config', config)

    app.mount('#app')
}

export const storage = {
    "mqtt_state" : "disconnected"
}
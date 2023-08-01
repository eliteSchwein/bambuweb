import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader';
import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import inject from '@rollup/plugin-inject'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['Buffer', 'Buffer'], process: 'process' })],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader()
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

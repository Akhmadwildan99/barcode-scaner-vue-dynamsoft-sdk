import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert/localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/localhost-cert.pem')),
    },
    host: true, // Listen on all network interfaces
    port: 5174
  },
})

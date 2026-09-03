import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': r('./src/app'),
      '@core': r('./src/core'),
      '@modules': r('./src/modules'),
      '@shared': r('./src/shared'),
      '@store': r('./src/store'),
      '@styles': r('./src/styles'),
    },
  },
  server: {
    port: 5173,
  },
})

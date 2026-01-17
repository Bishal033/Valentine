import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    React(),
     tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || '/Valentine',
})

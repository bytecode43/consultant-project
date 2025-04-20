// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'        // ← NEW

export default defineConfig({
  plugins: [react(), tailwind()],               // ← NEW
})

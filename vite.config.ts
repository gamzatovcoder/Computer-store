import type { AliasOptions } from 'vite';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

// const root = path.resolve(__dirname, "/src")
const __filePath = fileURLToPath(import.meta.url)
const __dirName = dirname(__filePath)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      "@": path.resolve(__dirName, "./src"),
    } as AliasOptions,
  },
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig(() => {
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'
  return {
    base: isGitHubPages ? '/mini-store/' : '/',
    plugins: [
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
        '@app': path.resolve(import.meta.dirname, './src/app'),
        '@assets': path.resolve(import.meta.dirname, './src/assets'),
        '@entities': path.resolve(import.meta.dirname, './src/entities'),
        '@featured': path.resolve(import.meta.dirname, './src/featured'),
        '@pages': path.resolve(import.meta.dirname, './src/pages'),
        '@shared': path.resolve(import.meta.dirname, './src/shared'),
        '@widgets': path.resolve(import.meta.dirname, './src/widgets'),
      }
    },
    server: {
      port: 3000,
      open: true,
    }
  }
})

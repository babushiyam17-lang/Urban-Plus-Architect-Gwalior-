import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Urban-Plus-Architect-Gwalior-/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          animation: ['gsap'],
        },
      },
    },
  },
})

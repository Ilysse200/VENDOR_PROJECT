import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Fix relative paths for production
  build: {
    outDir: 'dist',  // Ensure output goes to the correct folder
  },
  server: {
    historyApiFallback: true, // Ensures routing works in dev
  },
});

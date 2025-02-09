import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets like CSS are correctly referenced
  build: {
    outDir: 'dist',
  },
  server: {
    host: true, // Allows access via network IP (169.254.x.x)
    port: 3000, 
  },
});

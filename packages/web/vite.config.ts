import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './components'),
    },
  },
  plugins: [react()],
});

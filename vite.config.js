import react from '@vitejs/plugin-react';
import ViteEnvCompatible from 'vite-plugin-env-compatible';

export default {
  plugins: [
    react(),
    ViteEnvCompatible(),
  ],
};
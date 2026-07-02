import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nebulastudio.app',
  appName: 'Nebula Studio',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Camera: {
      permissions: ['photos', 'camera'],
    },
  },
  server: {
    url: process.env.VITE_API_URL || 'http://localhost:8000',
  },
};

export default config;

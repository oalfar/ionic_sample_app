import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  server: {
    url: 'http://<localIpAddress>:8100',
    "allowNavigation": ["*.gameball.app"]
  }
};
 
export default config;

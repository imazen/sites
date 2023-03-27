import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "de", "sv", "zh-Hans","zh", "it", "ja"],
    load: ['server'],
    
    resourcesBasePath: './public/locales',

    i18nextServer: {
        // debug: true,
        // saveMissing: true,
        // saveMissingTo: 'all',
        
        //lng: 'en',
        //fallbackLng: 'en',
        // fallbackLng: false ,
        backend: {
          // saveMissing: true,
          // updateMissing: true,
          // saveMissingTo: 'fallback',
          // path where resources get loaded from
          loadPath: './public/locales/{{lng}}/{{ns}}.json',

          // path to post missing resources
          // addPath: './public/locales/{{lng}}/{{ns}}.missing.json',
        }
      },
      i18nextServerPlugins:  {"Backend": "i18next-fs-backend"} 
  };

export default config;
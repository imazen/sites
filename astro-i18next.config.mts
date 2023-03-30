import type { AstroI18nextConfig } from "astro-i18next";
import { SITE, i18n_CONFIG } from "./src/consts";

const config: AstroI18nextConfig = {
    defaultLocale: SITE.defaultLanguage,
    locales: i18n_CONFIG.locales,
    load: ['server'],
    
    resourcesBasePath: i18n_CONFIG.localePath,

    defaultNamespace: i18n_CONFIG.defaultNamespace,
		namespaces : [i18n_CONFIG.defaultNamespace],
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
          loadPath: `${i18n_CONFIG.localePath}/{{lng}}/{{ns}}.json`,
					defaultNamespace: i18n_CONFIG.defaultNamespace,
					namespaces : [i18n_CONFIG.defaultNamespace],
          // path to post missing resources
          // addPath: '${i18n_CONFIG.localePath}/{{lng}}/{{ns}}.missing.json',
        }
      },
      i18nextServerPlugins:  {"Backend": "i18next-fs-backend"} 
  };

export default config;

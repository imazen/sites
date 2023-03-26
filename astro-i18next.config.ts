import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "de", "sv", "zh-Hans", "it", "ja"],
    load: ['server'],
    i18nextServer: {
        debug: true,
        //saveMissing: true,
        lng: 'en',
        fallbackLng: 'en',
        backend:
        {
            projectId: 'a6a863b5-b5d2-4a9c-ab70-585301e48334',
            //apiKey: import.meta.VITE_LOCIZE_API_KEY,
            version: 'latest',
            referenceLng: 'en',
            //saveMissing: true,
            debug: true,
            reloadInterval: false
        }
      },
  };

export default config;
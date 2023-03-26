/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "de", "sv", "zh-Hans", "it", "ja"],
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
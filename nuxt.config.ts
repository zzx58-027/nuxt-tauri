// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@unocss/nuxt"],
  runtimeConfig: {
    BE_DATABASE_URL_DEV: "",
    BE_DATABASE_URL_PROD: "",
    BE_MINIO_ACCESS_KEY_DEV: "",
    BE_MINIO_SECRET_KEY_DEV: "",
    BE_MINIO_ACCESS_KEY_PROD: "",
    BE_MINIO_SECRET_KEY_PROD: "",
  },
  ssr: false,
  // Enables the development server to be discoverable by other devices when running on iOS physical devices
  devServer: { host: process.env.TAURI_DEV_HOST || "localhost" },
  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_", "BE_"],
    server: {
      strictPort: true,
    },
  },
});

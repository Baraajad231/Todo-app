import { defineConfig } from "vite";

export default defineConfig({
  base: "/Todo-app/",
  build: {
    // هذا السطر يضمن أن Vite سيبحث عن ملفاتك ويربطها ببعض
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});

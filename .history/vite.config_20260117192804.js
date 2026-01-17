import { defineConfig } from "vite";

export default defineConfig({
  base: "/Todo-app/",
  // هذا السطر يخبر Vite أن المجلد الرئيسي هو جذر المشروع
  root: "./",
  build: {
    outDir: "dist",
    // لضمان عدم ضياع ملفات الـ JS والـ CSS
    assetsDir: "assets",
  },
});

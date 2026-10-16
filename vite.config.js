import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// npm run dev      -> تطوير عادي
// npm run build    -> ملف واحد dist/index.html بيتفتح بدبل كليك
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["@sssssubin/common-front"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "CommonFront",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    cssCodeSplit: false, // 모든 CSS 하나로 묶기
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

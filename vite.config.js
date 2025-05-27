import { fileURLToPath } from "node:url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  build: {
    target: "node18",
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "CommonFront",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // vue는 외부에서 주입 (중복 번들 방지)
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@/Store", replacement: resolve(__dirname, "src/store") },
      {
        find: "@/Composables",
        replacement: resolve(__dirname, "src/composables"),
      },
      {
        find: "@/Components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@/Section",
        replacement: resolve(__dirname, "src/section"),
      },
      {
        find: "@/Pages",
        replacement: resolve(__dirname, "src/pages"),
      },
      {
        find: "@/Enum",
        replacement: resolve(__dirname, "src/assets/enum"),
      },
      {
        find: "@/Interface",
        replacement: resolve(__dirname, "src/assets/interface"),
      },
      {
        find: "@/Utils",
        replacement: resolve(__dirname, "src/assets/utils"),
      },
    ],
  },
  // alias: {
  //   "@": path.resolve(__dirname, "./src"),
  // },
  plugins: [vue()],
});

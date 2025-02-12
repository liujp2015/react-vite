import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path, { join } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[name]",
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://api.imooc-front.lgdsunday.club",
        changeOrigin: true,
      },
    },
  },
});

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // 用来指定 Tailwind 需要扫描的文件
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.25rem", "0.35rem"],
        sm: ["0.35rem", "0.45rem"],
        base: ["0.42rem", "0.52rem"],
        lg: ["0.55rem", "0.65rem"],
        xl: ["0.65rem", "0.75rem"],
      },
    }, // 用于扩展默认主题
  },
  plugins: [], // 可以添加插件
};

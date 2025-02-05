import { useEffect } from "react";
import Navigation from "./components/navigation";

function App() {
  useEffect(() => {
    const MAX_FONT_SIZE = 40;
    const html = document.querySelector("html");
    // 根据窗口宽度计算 fontSize
    const setFontSize = () => {
      let fontSize = window.innerWidth / 10;
      fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
      if (html) {
        html.style.fontSize = fontSize + "px";
      }
    };

    // 监听页面加载完成后的字体大小设置
    setFontSize();

    // 监听窗口大小变化
    window.addEventListener("resize", setFontSize);

    // 清理副作用
    return () => {
      window.removeEventListener("resize", setFontSize);
    };
  }, []); // 空依赖数组，意味着只会在组件挂载时运行一次
  return (
    <>
      <Navigation></Navigation>
    </>
  );
}

export default App;

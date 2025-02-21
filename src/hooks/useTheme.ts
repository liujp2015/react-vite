import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setTheme } from "../store/themeReducer";

// 自定义 Hook 用于处理主题
const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.themeReducer.theme
  );

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light"); // 默认为light

  // 1. 如果用户选择了 "跟随系统"，才会监听系统主题变化
  useEffect(() => {
    if (currentTheme === "system") {
      const detectSystemTheme = () => {
        const isDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setSystemTheme(isDarkMode ? "dark" : "light");
      };

      // 初始化时检测系统主题
      detectSystemTheme();

      // 监听系统主题变化
      const listener = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };

      // 创建监听器
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", listener);

      // 清理事件监听器
      return () => {
        mediaQuery.removeEventListener("change", listener);
      };
    }
  }, [currentTheme]); // 仅当用户选择“系统主题”时才运行这个副作用

  // 2. 根据 Redux 中的主题状态或系统主题设置当前应用的主题
  useEffect(() => {
    if (currentTheme === "system") {
      // 如果是跟随系统主题，则根据 systemTheme 更新 Redux 状态
      dispatch(setTheme(systemTheme)); // 更新主题
    }
  }, [systemTheme, currentTheme, dispatch]);

  // 3. 更新 body class 来切换主题
  useEffect(() => {
    // 如果是跟随系统主题，则使用系统的主题
    const themeToApply = currentTheme === "system" ? systemTheme : currentTheme;
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeToApply);
  }, [currentTheme, systemTheme]); // 当 theme 变化时更新 class

  return { currentTheme, systemTheme };
};

export default useTheme;

import React, { useMemo, ReactNode } from "react";
import SvgIcon from "../svgIcon";

interface ButtonProps {
  icon?: string;
  iconColor?: string;
  iconClass?: string;
  type?: "primary" | "main" | "info"; // 定义按钮类型
  size?: "default" | "small"; // 定义按钮大小
  isActiveAnim?: boolean; // 是否有动画效果
  loading?: boolean; // 是否处于加载状态
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // 点击事件回调
  children?: ReactNode; // 插槽：按钮中的文字
  className: string;
}

// // 定义按钮类型的类名
// const typeEnum: Record<string, string> = {
//   primary:
//     "text-white bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700",
//   main: "text-white bg-main dark:bg-zinc-900 hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700",
//   info: "text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700",
// };

//type 可选项目：表示按钮风格
const typeEnum: Record<string, string> = {
  primary: " text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800",
  main: "text-white bg-main hover:bg-hover-main active:bg-main",
  info: "text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200",
};

// // 定义按钮大小的类名
// const sizeEnum: Record<string, { button: string; icon: string }> = {
//   default: {
//     button: "w-8 h-4 text-base",
//     icon: "",
//   },
//   "icon-default": {
//     button: "w-4 h-4",
//     icon: "w-1.5 h-1.5",
//   },
//   small: {
//     button: "w-7 h-3 text-base",
//     icon: "",
//   },
//   "icon-small": {
//     button: "w-3 h-3",
//     icon: "w-1.5 h-1.5",
//   },
// };

// 定义按钮大小的类名
const sizeEnum: Record<string, { button: string; icon: string }> = {
  default: {
    button: "w-8 h-4 text-base",
    icon: "",
  },
  small: {
    button: "w-7 h-3 text-base",
    icon: "",
  },
  "icon-default": {
    button: "w-4 h-4",
    icon: "w-1.5 h-1.5",
  },
  "icon-small": {
    button: "w-3 h-3",
    icon: "w-1.5 h-1.5",
  },
};

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  iconColor,
  iconClass,
  type = "main",
  size = "default",
  isActiveAnim = true,
  loading = false,
  onClick,
  children,
}) => {
  // 计算按钮的 sizeKey
  const sizeKey = useMemo(() => {
    return icon ? "icon-" + size : size;
  }, [size, icon]);

  // 处理点击事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading) return;
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`text-sm text-center rounded duration-150 flex justify-center items-center ${
        typeEnum[type]
      } ${sizeEnum[sizeKey]?.button} ${
        isActiveAnim ? "active:scale-105" : ""
      } ${className}`}
      onClick={handleClick}
    >
      {/* Loading spinner */}
      {loading && (
        <SvgIcon
          name="loading"
          className=" w-2 h-2 animate-spin mr-1"
        ></SvgIcon>
      )}

      {/* Icon */}
      {icon && !loading && (
        <SvgIcon
          name={icon}
          className={`m-auto ${sizeEnum[sizeKey].icon}`}
          color={iconColor}
        ></SvgIcon>
      )}

      {/* Text slot */}
      {!icon && !loading && <span>{children}</span>}
    </button>
  );
};

export default Button;

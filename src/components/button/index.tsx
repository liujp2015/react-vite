import React, { useMemo, ReactNode } from "react";

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
}

// 定义按钮类型的类名
const typeEnum: Record<string, string> = {
  primary:
    "text-white bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700",
  main: "text-white bg-main dark:bg-zinc-900 hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700",
  info: "text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700",
};

// 定义按钮大小的类名
const sizeEnum: Record<string, { button: string; icon: string }> = {
  default: {
    button: "w-8 h-4 text-base",
    icon: "",
  },
  "icon-default": {
    button: "w-4 h-4",
    icon: "w-1.5 h-1.5",
  },
  small: {
    button: "w-7 h-3 text-base",
    icon: "",
  },
  "icon-small": {
    button: "w-3 h-3",
    icon: "w-1.5 h-1.5",
  },
};

const Button: React.FC<ButtonProps> = ({
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
      } ${sizeEnum[sizeKey]?.button} ${isActiveAnim ? "active:scale-105" : ""}`}
      onClick={handleClick}
    >
      {/* Loading spinner */}
      {loading && (
        <svg
          className="w-2 h-2 animate-spin mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
          />
        </svg>
      )}

      {/* Icon */}
      {icon && !loading && (
        <svg
          className={`m-auto ${sizeEnum[sizeKey]?.icon} ${iconClass}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={iconColor}
        >
          {/* 假设 icon 作为图标名字传递 */}
          <use xlinkHref={`#${icon}`} />
        </svg>
      )}

      {/* Text slot */}
      {!icon && !loading && <span>{children}</span>}
    </button>
  );
};

export default Button;

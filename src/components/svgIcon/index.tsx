import React from "react";

interface SvgIconProps {
  name: string; // 图标名称（不包含 "icon-" 前缀）
  color?: string; // 图标颜色
  fillClass?: string; // TailwindCSS 类
  size?: string | number;
  className;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  color,
  fillClass,
  size = 16,
  className,
}) => {
  const symbolId = `#icon-${name}`; // 动态生成符号 ID

  return (
    <svg aria-hidden="true" width={size} height={size}>
      <use className={className} href={symbolId} fill={color} />
    </svg>
  );
};

export default SvgIcon;

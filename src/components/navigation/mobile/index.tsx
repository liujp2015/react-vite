import { useEffect, useRef } from "react";
import { Category } from "../../../api/category";

interface ChildComponentProps {
  categories: Category[] | undefined;
}

const MobileNavigation: React.FC<ChildComponentProps> = ({ categories }) => {
  const liRef = useRef<HTMLLIElement>(null);

  // 使用 useEffect 确保 DOM 元素已经挂载后再进行样式设置
  useEffect(() => {
    if (liRef.current) {
      liRef.current.style.width = "60px";
      liRef.current.style.transform = "translateX(0px)";
    }
  }, []); // 空依赖数组表示只在组件首次挂载时执行

  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-10"></div>
      <ul className=" relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
        <li
          className=" absolute bg-zinc-900 h-[22px] rounded-lg duration-200"
          ref={liRef}
        ></li>
        <li className=" shrink-0 px-1.5 py-0.5 z-10 duration-200">
          {(categories || []).map((item, index) => (
            <div key={index}>{item.name}</div> // 假设 Category 包含 name 属性
          ))}
        </li>
      </ul>
    </>
  );
};

export default MobileNavigation;

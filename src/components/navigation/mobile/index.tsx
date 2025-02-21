import { useEffect, useRef, useState } from "react";
import { Category } from "../../../api/category";
import useScroll from "../../../hooks/useScroll";
import Popup from "../../popup";
import Menu from "../../menu";
import { Button } from "@headlessui/react";
import SvgIcon from "../../svgIcon";

interface ChildComponentProps {
  categories: Category[] | undefined;
}

const MobileNavigation: React.FC<ChildComponentProps> = ({ categories }) => {
  const liRef = useRef<HTMLLIElement>(null);
  const ulTarget = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const { x: ulScrollLeft } = useScroll(ulTarget);
  const [sliderStyle, setSliderStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // 使用 useEffect 确保 DOM 元素已经挂载后再进行样式设置
  useEffect(() => {
    if (liRef.current) {
      liRef.current.style.width = "52px";
      liRef.current.style.transform = "translateX(0px)";
    }
  }, []); // 空依赖数组表示只在组件首次挂载时执行

  useEffect(() => {
    // 获取当前选中的分类项的 left 和 width
    const currentItemRef = itemRefs.current[currentCategoryIndex];
    if (!currentItemRef) return;
    const { left, width } = currentItemRef.getBoundingClientRect();

    // 更新 slider 样式
    if (liRef.current) {
      liRef.current.style.width = `${width}px`;
      liRef.current.style.transform = `translateX(${
        ulScrollLeft + left - 10
      }px)`;
      setSliderStyle({
        transform: `translateX(${ulScrollLeft + left - 10}px)`,
        width: `${width}px`,
      });
    }
  }, [currentCategoryIndex, ulScrollLeft]);

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-10 dark:bg-zinc-900"></div>
      <ul
        className=" relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden "
        ref={ulTarget}
      >
        <li
          className="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white 
         dark:bg-zinc-900 dark:shadow-l-zinc"
        >
          <SvgIcon
            name="hamburger"
            className="w-2 h-2 fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main "
          ></SvgIcon>
        </li>
        <li
          className=" absolute bg-zinc-900 h-[22px] rounded-lg duration-200 dark:bg-zinc-800"
          ref={liRef}
          style={sliderStyle}
        ></li>
        {(categories || []).map((item, index) => (
          <li
            key={item.id}
            className=" shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => {
              setCurrentCategoryIndex(index);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        打开popup
      </Button>
      <Popup isOpen={isOpen} onClose={() => setIsPopupOpen(false)}>
        <Menu categories={categories}></Menu>
      </Popup>
    </>
  );
};

export default MobileNavigation;

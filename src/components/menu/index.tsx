import React from "react";
import { Category } from "../../api/category";

interface ChildComponentProps {
  categories: Category[] | undefined;
}

const Menu: React.FC<ChildComponentProps> = ({ categories }) => {
  return (
    <div className=" py-2 h-[80vh] flex flex-col">
      <h2 className="text-xl text-zinc-900 font-bold px-1 mb-2 dark:text-zinc-200">
        所有分类
      </h2>
      <ul className="overflow-y-scroll">
        {categories?.map((item) => (
          <li
            className="text-lg text-zinc-900 px-1 py-1.5 duration-100 active:text-zinc-100 
            dark:text-zinc-300 dark:active:text-zinc-900"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

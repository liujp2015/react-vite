import React from "react";
import SvgIcon from "../../svgIcon";
import { Category } from "../../../api/category";
type PropType = {
  categories: Category[] | undefined;
};
const index: React.FC<PropType> = ({ categories }) => {
  return (
    <div className=" bg-white sticky top-0 left-0 w-full z-10 h-10">
      <ul className="w-[800px] relative flex flex-wrap justify-center  px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-hidden overflow-x-auto mx-auto">
        <div className=" absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200">
          <SvgIcon name="unfold" fillClass="w-1 h-1 fill-zinc-900"></SvgIcon>
        </div>
        {categories?.map((item) => (
          <li
            key={item.id}
            className=" shrink-0 px-1.5 py-0 z-10 duration-200 text-zinc-900 text-base font-bold h-4 leading-4 
cursor-pointer hover:bg-zinc-200 rounded mr-1 mb-1"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;

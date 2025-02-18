import React from "react";
import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { CSSTransition } from "react-transition-group";
interface HeaderSearchProps {
  children: React.ReactNode;
}
const HeaderSearch: React.FC<HeaderSearchProps> = ({ children }) => {
  return (
    // <div className=" relative rounded-xl border-white duration-200 hover:bg-red-100/50">
    //   <div>
    //     <CiSearch className="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2 text-[#707070]" />
    //     <input></input>
    //     <TiDelete className="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500" />
    //   </div>
    // </div>
    <div className=" group relative rounded-xl border-white duration-200 hover:bg-red-100/50 w-full mr-1">
      <div className="flex justify-center items-center">
        {/* <CiSearch className="w-1.5 h-1.5 absolute left-2 text-[#707070] translate-y-[-50%] top-[50%]" /> */}
        {/* <CiSearch className="w-1.5 h-1.5 absolute left-2 text-[#eb1010]" /> */}
        <CiSearch className="w-2 h-2 absolute left-2" />
        <>
          <input
            className="block w-full h-[44px] pl-4 text-sm text-zinc-900 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl 
          tracking-wide font-semibold border border-zinc-100 duration-500 focus:border-red-300
          group-hover:bg-white"
            placeholder="搜索"
            type="text"
          />
        </>
        <TiDelete className="h-2 w-2 duration-500 absolute right-9" />

        <div className=" opacity-0 h-1.5 w-[1px] absolute right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100" />
      </div>

      <CSSTransition
        in={true}
        timeout={300} // 动画的持续时间
        classNames="search-slide-in"
        unmountOnExit
      >
        <div
          className=" max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 
        top-[56px] p-2 rounded border border-zinc-200 duration-200 group-hover:shadow-2xl"
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default HeaderSearch;

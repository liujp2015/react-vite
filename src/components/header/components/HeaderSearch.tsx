import React from "react";
import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

const HeaderSearch = () => {
  return (
    // <div className=" relative rounded-xl border-white duration-200 hover:bg-red-100/50">
    //   <div>
    //     <CiSearch className="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2 text-[#707070]" />
    //     <input></input>
    //     <TiDelete className="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500" />
    //   </div>
    // </div>
    <div className=" relative rounded-xl border-white duration-200 hover:bg-red-100/50">
      <div className="flex justify-center items-center">
        {/* <CiSearch className="w-1.5 h-1.5 absolute left-2 text-[#707070]" /> */}
        {/* <CiSearch className="w-1.5 h-1.5 absolute left-2 text-[#eb1010]" /> */}
        <CiSearch className="w-2 h-2 left-2" />
        <input></input>
        <TiDelete className="h-2 w-2 right-9 duration-500" />
      </div>
    </div>
  );
};

export default HeaderSearch;

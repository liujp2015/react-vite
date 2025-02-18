import React from "react";
import HeaderSearch from "./components/HeaderSearch";
import HeaderTheme from "./components/HeaderTheme";
import { useNavigate } from "react-router-dom";
import HeaderMy from "./components/HeaderMy";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[72px] w-full bg-white border-b border-zinc-200 px-2 py-1">
      <div className=" flex items-center">
        <img
          className=" h-4 cursor-pointer mr-2"
          src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          onClick={() => {
            console.log("跳转");
            navigate("/");
          }}
        />
        <HeaderSearch>
          <div></div>
        </HeaderSearch>
        <HeaderTheme></HeaderTheme>
        <HeaderMy></HeaderMy>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Popover from "../../popover";
import SvgIcon from "../../svgIcon";
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from "../../../constants";

interface themeShowItem {
  id: string;
  name: string;
  type: string;
  icon: string;
}
const HeaderTheme = () => {
  const themeArray: themeShowItem[] = [
    { id: "0", name: "极简白", type: THEME_LIGHT, icon: "theme-light" },
    { id: "1", name: "极夜黑", type: THEME_DARK, icon: "theme-dark" },
    { id: "2", name: "跟随系统", type: THEME_SYSTEM, icon: "theme-system" },
  ];

  return (
    <div>
      <Popover
        placement="bottom-right"
        MainComponent={
          <SvgIcon
            name="theme-light"
            fillClass="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none  "
          ></SvgIcon>
        }
        ShowComponent={
          <div className="w-[140px] overflow-hidden ">
            {themeArray.map((item) => (
              <div
                key={item.id}
                className=" flex items-center p-1 cursor-pointer rounded"
              >
                <SvgIcon
                  name={item.icon}
                  fillClass=" w-1.5 h-1.5 mr-1 fill-zinc-900"
                ></SvgIcon>
                <span className="text-zinc-800 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        }
      ></Popover>
    </div>
  );
};

export default HeaderTheme;

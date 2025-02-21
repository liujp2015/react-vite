import React, { useMemo } from "react";
import Popover from "../../popover";
import SvgIcon from "../../svgIcon";
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../store/themeReducer";
import { RootState } from "../../../store";

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

  const dispatch = useDispatch();
  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };
  const currentTheme = useSelector(
    (state: RootState) => state.themeReducer.theme
  );
  const svgIcon = useMemo(() => {
    const findTheme = themeArray.find((theme) => theme.type === currentTheme);
    return findTheme ? findTheme.icon : "";
  });
  return (
    <div>
      <Popover
        placement="bottom-right"
        MainComponent={
          <SvgIcon
            name={svgIcon}
            className="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none 
             hover:bg-zinc-100/60 dark:hover:bg-zinc-900  fill-zinc-900 dark:fill-zinc-300"
            // color="fill-zinc-900"
          ></SvgIcon>
        }
        ShowComponent={
          <div className="w-[140px] overflow-hidden ">
            {themeArray.map((item) => (
              <div
                key={item.id}
                className=" flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 
                 dark:bg-zinc-800"
                onClick={() => {
                  handleThemeChange(item.type);
                }}
              >
                <SvgIcon
                  name={item.icon}
                  className=" w-1.5 h-1.5 mr-1 fill-zinc-900 dark:fill-zinc-300"
                ></SvgIcon>
                <span className="text-zinc-900 text-sm dark:text-zinc-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        }
      ></Popover>
    </div>
  );
};

export default HeaderTheme;

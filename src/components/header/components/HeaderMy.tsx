import React from "react";
import Popover from "../../popover";
import SvgIcon from "../../svgIcon";

interface my {
  id: number;
  title: string;
  icon: string;
  path?: string;
}
const HeaderMy = () => {
  const myArray: my[] = [
    { id: 0, title: "个人资料", icon: "profile", path: "/profile" },
    { id: 1, title: "升级vip", icon: "member", path: "/member" },
    { id: 2, title: "退出登录", icon: "logout", path: "" },
  ];

  return (
    <>
      <Popover
        placement="bottom-left"
        MainComponent={
          <div className=" relative flex items-center cursor-pointer p-0.5   rounded-sm duration-200 hover:bg-zinc-100">
            <img
              className="w-3 h-3 rounded-sm"
              src="https://ww3.sinaimg.cn/mw690/005Dg9pggy1hstip8bi5zj31pk3pcnpd.jpg"
            />
            <SvgIcon
              name="down-arrow"
              fillClass="h-1.5 w-1.5 ml-0.5"
              color="fill-zinc-900"
            />
            <SvgIcon name="vip" fillClass="h-1.5 w-1.5 absolute "></SvgIcon>
          </div>
        }
        ShowComponent={
          <div className=" w-[140px] overflow-hidden">
            {myArray.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-1 cursor-pointer rounded"
              >
                <SvgIcon
                  name={item.icon}
                  fillClass=" w-1.5 h-1.5 mr-1 fill-zinc-900"
                ></SvgIcon>
                <span className="text-zinc-800 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        }
      ></Popover>
    </>
  );
};

export default HeaderMy;

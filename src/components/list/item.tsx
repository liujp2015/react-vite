import React from "react";
import Button from "../button";
interface PropType {
  title: string;
}
const Item: React.FC<PropType> = (item) => {
  return (
    <div className=" dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1 h-[280px] w-[230px]">
      <div className=" relative w-full rounded cursor-zoom-in group">
        <img
          className="w-full rounded bg-transparent"
          src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        ></img>

        <div
          className=" hidden  opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300
         group-hover:opacity-100 xl:block"
        >
          {/* <Button
            className=" absolute top-1.5 right-1.5"
            type="primary"
            size="small"
            icon="search"
            iconColor="blue"
            loading={true}
            onClick={() => console.log("Button clicked")}
          >
            Click me
          </Button> */}

          <Button className=" absolute top-1.5 left-1.5">分享</Button>
          <Button
            className=" absolute top-1.5 right-1.5 "
            type="info"
            size="small"
            icon="heart"
            iconClass="fill-zinc-900 dark:fill-zinc-200"
          ></Button>
          <Button
            className=" absolute bottom-1.5 left-1.5 bg-zinc-100/70"
            type="info"
            size="small"
            icon="download"
            iconClass="fill-zinc-900 dark:fill-zinc-200"
          ></Button>
          <Button
            className=" absolute bottom-1.5 right-1.5 bg-zinc-100/70"
            type="info"
            size="small"
            icon="full"
            iconClass="fill-zinc-900 dark:fill-zinc-200"
          ></Button>
        </div>
      </div>

      <p className=" text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 px-1">
        {item.title}
      </p>
      <div className="flex items-center mt-1 px-1">
        <img className="h-2 w-2 rounded-full" src={item.title} alt=""></img>
        <span className=" text-sm text-zinc-500 ml-1">{item.title}</span>
      </div>
    </div>
  );
};

export default Item;

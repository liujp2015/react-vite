import React, { FC } from "react";
import Navigation from "./navigation";
import List from "./list";

const Main = () => {
  return (
    // <div className="h-[calc(100vh-72px)]">
    <div className=" h-full overflow-auto bg-white dark:bg-zinc-800 duration-500">
      <Navigation></Navigation>
      <div className="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
        <List></List>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Floating from "../components/floating";
import Button from "../components/button";

const Index = () => {
  return (
    <div className=" h-screen">
      <Header></Header>
      {/* <div className=" bg-main">2343</div> */}
      {/* <Button
        type="primary"
        size="small"
        icon="search"
        iconColor="blue"
        loading={true}
        onClick={() => console.log("Button clicked")}
      >
        Click me
      </Button> */}
      <Main />
      <Floating></Floating>
    </div>
  );
};

export default Index;

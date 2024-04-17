import React from "react";
import Header from "../components/common/Header";
import MainPosting from "../components/main/MainPosting";

const Main = () => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid red",
        width: "100%",
        height: "800px",
      }}
    >
      <Header />
      <MainPosting />
    </div>
  );
};

export default Main;

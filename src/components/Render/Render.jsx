import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const Render = () => {
  const items = ["yes ", "Probably not", "Maybe",];


  return (
    <div>
      <Dropdown items={items}  />
    </div>
  );
};

export default Render;

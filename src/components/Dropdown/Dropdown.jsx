import React, { useState } from "react";
import style from "./Dropdown.module.css";

const Dropdown = ({ items }) => {
  const [display, setDisplay] = useState(null);

  const handleDropdownChange = (e) => {
    // console.log(e.target.value);
    setDisplay(e.target.value);
  };
  return (
    <>
      <div className={style.container}>
        <p>Should you use a Dropdown?</p>

        <select onChange={(e) => handleDropdownChange(e)}>
          <option value="">choose an option</option>
          {items.map((item, index) => (
            <option id={index} key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {display && (
          <div className={style.dropdown}>
            <p>{display}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;

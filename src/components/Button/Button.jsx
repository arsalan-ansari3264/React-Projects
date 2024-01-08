import React from "react";
import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = (props) => {
  return (
    <>
      <button className={props.isOutline? styles.outline_btn: styles.primary_btn}>
        {props.icons}
        {props.text}
      </button>
    </>
  );
};

export default Button;

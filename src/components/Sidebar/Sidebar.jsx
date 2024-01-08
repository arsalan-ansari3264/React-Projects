import React from "react";
import style from "./Sidebar.module.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <div className={style.icons}>
          <MdOutlineMenuOpen />
        </div>
        <div className={style.icons}>
          <IoMdContact />
        </div>
        <div className={style.icons}>
          <IoMdContacts />
        </div>
        <div className={style.icons}>
          <LuMessagesSquare />
        </div>
        <div className={style.icons}>
          <IoIosSettings />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

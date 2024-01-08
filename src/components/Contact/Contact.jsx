import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";
import ContactCard from "../ContactCard/ContactCard";
import Modal from "../Modal/Modal";
import AddAndUpdate from "../AddAndUpdate/AddAndUpdate";
import useDisclose from "../../hooks/useDisclose";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Contact = ({contacts}) => {
  const { onClose, isOpen, onOpen } = useDisclose();


  
 
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <h3>contact</h3>
          <button onClick={onOpen}>Add contact</button>
        </div>
        <div className={style.header}>
          <div className={style.heading}></div>
          <div className={style.heading}>
            <p>Name</p>
          </div>
          <div className={style.heading}>
            <p>Email</p>
          </div>
          <div className={style.heading}>
            <p>Phone</p>
          </div>
        </div>
        <ContactCard isOpen={isOpen} onClose={onClose} onc contacts={contacts} />
        <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      </div>
    </>
  );
};

export default Contact;

import React, { useEffect, useState } from "react";
import style from "./ContactCard.module.css";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import AddAndUpdate from "../AddAndUpdate/AddAndUpdate";
import useDisclose from "../../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({contacts}) => {
  
  const { onClose, isOpen, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      onClose();
      toast.warn("Contact deleted Successfully",{position: "top-right",});
      // console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
   
      {contacts &&
        contacts.map((contact, index) => (
          <div key={contact.id} className={style.contactCard}>
            <div className={style.number}>
              <p>{index}.</p>
            </div>
            <div className={style.name}>
              <p>{contact.name}</p>
              <div className="location">
                <p>~{contact.address.city}</p>
              </div>
            </div>
            <div className={style.email}>
              <p>{contact.email}</p>
            </div>
            <div className={style.phone}>
              <p>{contact.address.zipcode}</p>
            </div>
            <div className={style.btn}>
              <button onClick={onOpen}>edit</button>
              <button onClick={() => deleteContact(contact.id)}>delete</button>
            </div>
            <AddAndUpdate
              contact={contact}
              isUpdate
              isOpen={isOpen}
              onClose={onClose}
            />
          </div>
        ))}
    </>
  );
};

export default ContactCard;

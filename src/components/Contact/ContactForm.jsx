import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoEnter } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top}>
          <Button text="via support chat" icons={<MdMessage size="1.5em" />} />
          <Button text="via call" icons={<IoIosCall size="1.5em" />} />
        </div>
        <Button
          isOutline={true}
          text="via Email form"
          icons={<IoMailUnreadOutline size="1.5em" />}
        />

        <form>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="25" rows="10"></textarea>
          </div>
          <div className={styles.end}>
            <Button text="submit" icons={<IoEnter size="1.5em" />} />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;

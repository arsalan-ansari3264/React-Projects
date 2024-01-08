import React from "react";
import styles from "./Navigation.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className="logo">
          {/* <img src="/public/images/Frame 2 1.png" alt="" /> */}
          <h1>ARSALAN</h1>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react'
import style from "./Navbar.module.css"
import { CiSearch } from "react-icons/ci";


const Navbar = ({filterContacts}) => {
  return (
    <>
      <nav>
        <div className={style.search}>
        <CiSearch  className={style.icon}/>
        <input onChange={filterContacts}  type="text" name="" id="" placeholder='Search, Contact..'/>

        </div>
      </nav>
    </>
  )
}

export default Navbar
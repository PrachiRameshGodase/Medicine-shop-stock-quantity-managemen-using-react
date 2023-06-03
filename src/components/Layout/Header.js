import React from 'react'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
import medicineImage from "../../assets/medicine.jpg"



const Header=() =>{

    
  return (
    <div>
      <header className={classes.header}>
        <h1>Medical Dashboard</h1>
        <HeaderCartButton/>
        <h3>.</h3>
    </header>
    <div className={classes["main-image"]}>
        <img src={medicineImage} alt="differnt medicines are stored" />
    </div>
    </div>
  )
}

export default Header

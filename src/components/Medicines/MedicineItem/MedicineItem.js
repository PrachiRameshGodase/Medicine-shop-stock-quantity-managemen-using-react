import React from 'react'
import classes from "./MedicineItem.module.css"
import MedicineItemForm from "./MedicineItemForm"

const MedicineItem=(props) =>{
    // const price =`$${props.price.toFixed(2)}`;
    const price = `$${parseFloat(props.price).toFixed(2)}`;
  return (

    <li className={classes.medincine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        {/* <div className={classes.detailsContainer}>
          <div className={classes.price}>{price}</div>
          <div className={classes.quantity}>Quantity: {props.quantity}</div>
        </div> */}
      </div>
      
      <div>
        <MedicineItemForm id={props.id}/>
        <div className={classes.detailsContainer}>
          {/* <div className={classes.price}>{price}</div> */}
          <div className={classes.quantity}>Quantity: {props.quantity}</div>
        </div>
      </div>
    </li>
  )
}

export default MedicineItem

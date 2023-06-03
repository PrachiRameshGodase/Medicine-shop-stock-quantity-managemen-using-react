import React, {useContext} from 'react'
import classes from "./MedicineItem.module.css"
import MedicineItemForm from "./MedicineItemForm"
import CartContext from '../../../store/cart-context';

const MedicineItem=(props) =>{
    // const price =`$${props.price.toFixed(2)}`;
    const cartCtx=useContext(CartContext)
    const price = `$${parseFloat(props.price).toFixed(2)}`;

    const addToCartHandler=amount=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
  }
  return (

    <li className={classes.medincine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      
      <div>
        <MedicineItemForm id={props.id} onAddToCart={addToCartHandler}/>
        <div className={classes.detailsContainer}>
          <div className={classes.quantity}>Quantity: {props.quantity}</div>
        </div>
      </div>
    </li>
  )
}

export default MedicineItem

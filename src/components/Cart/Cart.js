import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'

function Cart(props) {
    const cartItems=<ul className={classes['cart-items']}>{[{
        id: "c1", name: "Biriyani", amount: 2, price: 250 
    }].map((item)=>(
        <li>{item.name}</li>
    ))}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>

      </div>
    </Modal>
  )
}

export default Cart
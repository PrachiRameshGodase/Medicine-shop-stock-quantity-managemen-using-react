// import classes from './CartItem.module.css';

// const CartItem = (props) => {
// //   const price = `${props.price}₹`;
// const price = `$${props.price.toFixed(2)}`;

//   return (
//     <li className={classes['cart-item']}>
//       <div>
//         <h2>{props.name}</h2>
//         <div className={classes.summary}>
//           <span className={classes.price}>{price}</span>
//           <span className={classes.amount}>x {props.amount}</span>
//         </div>
//       </div>
//       <div className={classes.actions}>
//         <button onClick={props.onRemove}>−</button>
//         <button onClick={props.onAdd}>+</button>
//       </div>
//     </li>
//   );
// };

// export default CartItem;
import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, name, amount, price, onRemove, onAdd } = props;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemove(id)}>-</button>
        <button onClick={() => onAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

import React, {useContext} from 'react'
import classes from "./MedicineItem.module.css"
import MedicineItemForm from "./MedicineItemForm"
import CartContext from '../../../store/cart-context';

const MedicineItem=(props) =>{
    // const price =`$${props.price.toFixed(2)}`;
    const cartCtx=useContext(CartContext)
    const price = `$${parseFloat(props.price).toFixed(2)}`;
  //   const addToCartHandler = (amount) => {
  //   if (props.quantity > 0) {
  //     const updatedQuantity = props.quantity - amount;

  //     cartCtx.addItem({
  //       id: props.id,
  //       name: props.name,
  //       amount: amount,
  //       price: props.price,
  //     });
  //     props.onUpdateMedicineQuantity(props.id, updatedQuantity)
  //     const updatedMedicines = props.items.map((medicine) => {
  //       if (medicine.id === props.id) {
  //         return {
  //           ...medicine,
  //           quantity: updatedQuantity,
  //         };
  //       }
  //       return medicine;
  //     });

  //     props.onUpdateMedicines(updatedMedicines);
  //   }
  // };

  const addToCartHandler = (amount) => {
    if (props.quantity > 0 && amount > 0) {
      const updatedQuantity = props.quantity - amount;
    
      const item = {
        id: props.id,
        name: props.name,
        amount: amount,
        price: parseFloat(props.price),
      };
    
      console.log(item); // Check the item object in the console
    
      cartCtx.addItem(item);
    
      
  
    
      props.onUpdateMedicineQuantity(props.id, updatedQuantity);
    
      const updatedMedicines = props.items.map((medicine) => {
        if (medicine.id === props.id) {
          return {
            ...medicine,
            quantity: updatedQuantity,
          };
        }
        return medicine;
      });
    
      props.onUpdateMedicines(updatedMedicines);
    }
  };

  
  
  

  
  
   return (

    <li className={classes.medincine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      
      <div>
        <MedicineItemForm id={props.id} onAddToCart={addToCartHandler} quantity={props.quantity}/>
        
        <div className={classes.detailsContainer}>
          <div className={classes.quantity}>Quantity: {props.quantity}</div>
        </div>
      </div>
    </li>
  )
}

export default MedicineItem

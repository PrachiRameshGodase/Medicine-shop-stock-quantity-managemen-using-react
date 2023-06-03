import React,{useState} from 'react';
import classes from "./MedicineForm.module.css"



const MedicineForm=(props) =>{
    const [enteredMedicineName,setEnteredMedicineName]=useState("");
    const [enteredDescription,setEnteredDescription]=useState("");
    const [enteredPrice,setEnteredPrice]=useState("");
    const [enteredQuantity,setEnteredQuantity]=useState("");

    const nameChangeHandler=(event)=>{
        setEnteredMedicineName(event.target.value)
    }

    const descriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    const quantityChangeHandler =(event)=>{
        setEnteredQuantity(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const enentereData={
            name:enteredMedicineName,
            description:enteredDescription,
            price:enteredPrice,
            quantity:enteredQuantity
        }
        props.onAddMedicne(enentereData.name,enentereData.description,enentereData.price,enentereData.quantity);
        setEnteredMedicineName("");
        setEnteredDescription("");
        setEnteredPrice("");
        setEnteredQuantity("")
    }
  return (
    <div className={classes.container}>
        <form onSubmit={submitHandler}>
        <div className={classes.items}>
        <div className={classes.item}>
        <label htmlFor='medicineName'>Medicine Name:</label>
        <input type='text' value={enteredMedicineName} onChange={nameChangeHandler}/>
        </div>

        <div className={classes.item}>
        <label htmlFor='description'>Description:</label>
        <input type='text' value={enteredDescription} onChange={descriptionChangeHandler}/>
      </div>

      <div className={classes.item}>
        <label htmlFor='price'>Price:</label>
        <input type='number' value={enteredPrice} onChange={priceChangeHandler}/>
      </div>

      <div className={classes.item}>
        <label htmlFor='quantity'>Quantity:</label>
        <input type='number' value={enteredQuantity} onChange={quantityChangeHandler}/>
      </div>
      <div className={classes.item}>
        <button type='submit'>Add Medicine</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default MedicineForm

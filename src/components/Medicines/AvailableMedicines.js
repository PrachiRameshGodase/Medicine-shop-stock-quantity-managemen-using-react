import React from 'react'
import Card from "../UI/Card"
import MedicineItem from './MedicineItem/MedicineItem';
import classes from "./AvailableMedicines.module.css"
 

const AvailableMedicines=(props)=>{
    // const medicneList={props.items.map((medicine)=>(
    //     <MedicineItem key={medicine.id} 
    //     id={medicine.id}
    //     name={medicine.name} 
    //     description={medicine.description}
    //     price={medicine.price}/>
    // ))};
  return (
    <section className={classes.medicines}>
      <Card>
        {props.items.map((medicine)=>(
            <MedicineItem key={medicine.id} 
            id={medicine.id}
            name={medicine.name} 
            description={medicine.description}
            price={medicine.price}
            quantity={medicine.quantity} />
        ))}
     
      </Card>
    </section>
  )
}

export default AvailableMedicines

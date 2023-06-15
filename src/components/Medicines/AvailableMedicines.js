
import React,{useState} from 'react';
import Card from '../UI/Card';
import MedicineItem from './MedicineItem/MedicineItem';
import classes from './AvailableMedicines.module.css';

const AvailableMedicines = (props) => {
  const [medicines, setMedicines] = useState(props.items);

  const updateMedicineQuantity = (medicineId, updatedQuantity) => {
    const updatedMedicines = medicines.map((medicine) => {
      if (medicine.id === medicineId) {
        return {
          ...medicine,
          quantity: updatedQuantity,
        };
      }
      return medicine;
    });

    setMedicines(updatedMedicines);
  };

  const updateMedicinesHandler = (updatedMedicines) => {
    props.onUpdateMedicines(updatedMedicines);
  };


  return (
    <section className={classes.medicines}>
      <Card>
        {props.items.map((medicine) => (
          <MedicineItem
            key={medicine.id}
            id={medicine.id}
            name={medicine.name}
            description={medicine.description}
            price={parseFloat(medicine.price)}
            quantity={medicine.quantity}
            items={props.items} // Pass the items prop here
            onUpdateMedicines={updateMedicinesHandler}
            onUpdateMedicineQuantity={updateMedicineQuantity}
  
          />
        ))}
      </Card>
    </section>
  );
};

export default AvailableMedicines;

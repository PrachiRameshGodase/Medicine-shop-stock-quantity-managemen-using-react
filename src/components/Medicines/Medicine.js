
import React, { useState } from 'react';
import AvailableMedicines from './AvailableMedicines';
import MedicineForm from './MedicineForm';


const Medicine = () => {
  const [medicineData, setMedicineData] = useState([]);

  const addMedicineHandler = (medicineName, description, price, quantity) => {
    const newMedicine = {
      id: Math.random().toString(),
      name: medicineName,
      description: description,
      price: price,
      quantity: quantity,
    };

    const updatedMedicineData = [...medicineData, newMedicine];
    setMedicineData(updatedMedicineData);
  };

  const updateMedicineHandler = (updatedMedicines) => {
    setMedicineData(updatedMedicines);
  };

  return (
    <div>
     
     <MedicineForm onAddMedicine={addMedicineHandler} />

      <AvailableMedicines
        items={medicineData}
        onUpdateMedicines={updateMedicineHandler}

      />
      
    </div>
  );
};

export default Medicine;



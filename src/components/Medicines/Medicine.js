import React,{useState} from 'react'
import AvailableMedicines from './AvailableMedicines'
import MedicineForm from './MedicineForm';

const Medicine=() =>{
const [medicineData,setMedicineData]=useState([]);

const addMedicineHandler=(medicineName,description,price,quantity)=>{
setMedicineData((prevMedicine)=>{
    return [...prevMedicine,{id:Math.random().toString(),name:medicineName,description:description,price:price,quantity:quantity}]
})
  }
  return (
    <div>
    <MedicineForm onAddMedicne={addMedicineHandler} />
    <AvailableMedicines items={medicineData} />
    </div>
  )
}

export default Medicine

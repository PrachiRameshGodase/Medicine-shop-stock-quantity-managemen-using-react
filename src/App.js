// import React,{useState} from 'react';
import "./App.css"
// import MedicineForm from "./components/Medicines/MedicineForm";
// import Medicinelist from './components/Medicines/Medicinelist';
import Header from './components/Layout/Header';
import Medicine from "./components/Medicines/Medicine";
import Cart from "./components/Cart/Cart"

const App=() =>{
  // const [medicineData,setMedicineData]=useState([]);

  // const addMedicineHandler=(medicineName,description,price,quantity)=>{
  //   setMedicineData((prevMedicine)=>{
  //     return [...prevMedicine,{id:Math.random().toString(),name:medicineName,description:description,price:price,quantity:quantity}]
  //   })
  // }
  return (
    <div>
      <Cart/>
      <Header/>
      <main>
      <Medicine/>
      </main>
    </div>
  );
}

export default App;

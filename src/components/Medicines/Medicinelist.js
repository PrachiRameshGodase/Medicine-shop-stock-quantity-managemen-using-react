import React from 'react'

function Medicinelist(props) {
  return (
    <div>
      <ul>
        {props.items.map((medicine)=>(
            <li key={medicine.id}>
                {medicine.name}
                {medicine.price}
                {medicine.description}
                {medicine.quantity}
            </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Medicinelist

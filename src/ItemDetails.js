import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const {id} = useParams();
  const item ={id:id,name:`Item ${id}`}
  return (
    <div>
      <h1>ItemDetails</h1>
      <p>ID : {item.id}</p>
      <p>NAME : {item.name}</p>
    </div>
  )
}

export default ItemDetails
//When the ItemDetails component is rendered,
//React Router passes the value of the :id parameter as a prop to the component.
//This is done using the useParams hook,
//which extracts the value of the :id parameter from the URL.
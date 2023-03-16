import React from 'react';
import { useState,useEffect } from 'react';

function MyComponent() {
  const[name,setName] = useState(()=>{
    const storedValue = localStorage.getItem('name');
    return storedValue!== null ? JSON.parse(storedValue): 'Goku';
  })

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name));
  },[name]);

  function handlenameChange(event)
  {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor='name'>Name : </label>
      <input type='text' id='name' placeholder='Enter' value={name} onChange={handlenameChange} ></input>
      <p>Hello {name}</p>
    </div>
  )
}

export default MyComponent
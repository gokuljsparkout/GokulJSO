import React from 'react'
import { useState } from 'react'
import ChildC from './ChildC';
const ParentC = () => {

  const [inputValue,setInputValue]=useState('');

  function handleInputValue(event)
  {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <ChildC value={inputValue} onChange={handleInputValue}/>
    </div>
  )
}

export default ParentC

//Controlled Components
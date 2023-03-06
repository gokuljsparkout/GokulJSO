import React from "react";
import {useState } from 'react';
import Keypad from "./Keypad";

function App() {
  const[input,setInput]=useState('');

  const handleClick =(value)=>{
    setInput(input+value);
  }

  const handleEqual = () =>
  {
    const result = eval(input);
    setInput(result.toString());
  }
  const handleClear = () =>
  {
    setInput('');
  }

  return (
    <div>
      <div>
        <input type='text' value={input} readOnly></input>
        <Keypad 
        handleClear={handleClear}
        handleClick={handleClick}
        handleEqual={handleEqual}>
        </Keypad>
      </div>
    </div>
   
  );
}
export default App;
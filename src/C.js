import React,{useRef, useState} from 'react'

const C = () => {
  const inputRef =useRef(null);
  const[input,setInput]=useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log('Input Value : ', inputRef.current.value);
    setInput(inputRef.current.value);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Uncontrolled Input : 
        <input type='text' ref={inputRef}/>
      </label>
      <br/>
      <button type='submit'>Submit</button>
    </form>
    <p>{input}</p>
    </div>
  )
}

export default C
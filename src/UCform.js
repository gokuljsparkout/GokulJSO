import React, { useRef } from 'react';

const UCform = () => {
  const inputRef = useRef(); // useRef is used to access the value of input field

  const handleSubmit = event => {
    event.preventDefault(); //prevents the page from refreshing when the form is submitted.
    console.log(inputRef.current.value); 
  };

  return (
    <div>
      <h1>Uncontrolled input</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>

    </div>
    
  );
};
export default UCform
import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data/data';

//Carousel with using state

function Gallery2() {

  //let index=0;
  const [index,setIndex]=useState(0); //initializes the state with value '0'

  function handleClick()
  {
    //index=index+1;
    setIndex(index +1); //Updater Function
      }


  let sculpture = sculptureList[index];
  return (
    <div>
      <h1>Carousel 2</h1>
      <h2>With State</h2>
      <button onClick={handleClick}>Next</button>
      <h2>
      <i>{sculpture.name} </i> 
      by {sculpture.artist}
    </h2>
    <h3>  
      ({index + 1} of {sculptureList.length})
    </h3>
    <img 
      src={sculpture.url} 
      alt={sculpture.alt}
    />
    <p>
      {sculpture.description}
    </p>
    </div>
  )
}

export default Gallery2
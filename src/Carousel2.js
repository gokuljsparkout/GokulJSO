import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data/data';

//Carousel with using state

function Gallery2() {

  
  const [index,setIndex]=useState(0);
  const [showMore,setShowMore]=useState(false)

  function handleClick()
  {
   
    setIndex(index +1); 
 }

 function handleMoreClick()
 {
  setShowMore(!showMore);
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
    <br/>
    <br/>
    <button onClick={handleMoreClick}>
      {showMore ? "Hide Details" :"Show Details"}
    </button>
    <p>
      {showMore ? sculpture.description:null}
    </p>
    </div>
  )
}

export default Gallery2
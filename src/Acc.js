import React from 'react'
import { useState } from 'react'
import Pan from './Pan';

const Acc = () => {
 
  const[index,setIndex]=useState(-1);
  return (
    <>
    <h2>Components with State Lifted</h2>
    <Pan title='JB' isActive={index===0} onShow={()=>setIndex(0)}>it's JB</Pan>
    <Pan title='Drake' isActive={index===1} onShow={()=>setIndex(1)}>Drake here</Pan>
    </>
  )
}

export default Acc
import React from 'react'
import { useState } from "react"

function Panel({title,children}) {
  const[isActive,setIsactive]=useState(false);
  return (
    
    <section>
      <h3>{title}</h3>
      {
        isActive ? (<p>{children}</p>) : (<button onClick={()=>setIsactive(true)}>
         Show 
        </button>)
      }
      </section>
  )
}

export default Panel
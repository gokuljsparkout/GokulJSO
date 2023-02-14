import React, { useEffect, useState } from 'react'

const TitleCounter = () => {
  const [count,setCount]=useState(0);

  useEffect(()=>{
    document.title=`You clicked ${count} times`
  },[count])

  function handleClick()
  {
    setCount(count+1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
  
    </div>
  )
}

export default TitleCounter
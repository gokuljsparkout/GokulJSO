import React from 'react'
import ChildC from './ChildC';
import { useCallback,useState } from 'react';

const ParentC = () => {
  const[count,setCount]=useState(0);

  const incrementCount = useCallback(()=> { //The useCallback hook is used to memoize the function and specify that it depends on the count state variable.
    setCount(count + 1 );
  }, [count]);
    

  return (
    <div>
      <ChildC incrementCount={incrementCount}/>
      <p>{count}</p>
    </div>
  )
}

export default ParentC
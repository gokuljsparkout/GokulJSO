import React, { useReducer } from 'react'
//useReducer
const Counter = () => {
  const reducer =(state,action)=>
  {
    switch(action.type)
    {
      case 'increment' :
        return state +1;
        case 'decrement':
        return state -1;
        default:
          throw new Error();
    }
  }

  const[count,dispatch]=useReducer(reducer,0); //Manage state in a complex

  function handleIncrement()
  {
    dispatch({type:'increment'})
  }

  function handleDecrement()
  {
    dispatch({type:'decrement'})
 }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}


export default Counter
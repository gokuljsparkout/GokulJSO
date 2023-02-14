import React,{useState} from 'react';

function MyComponent()
{
  const [state,setState] = useState({
    counter :0,
    message : 'Hello',
    isEnabled:true
  })

  const handleClick =  ()=>
  {
    setState(prevState =>({
      ...prevState,
      counter :prevState.counter+1,
      message : 'Goodbye',
      isEnabled : false
    }))
  }

  return(
    <div>
      <p>Counter : {state.counter}</p>
      <p>Message : {state.message}</p>
      <button onClick={handleClick} disabled={!state.isEnabled}>Click me</button>
    </div>
  )
}

export default MyComponent;
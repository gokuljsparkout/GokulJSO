import React, {useEffect,useState} from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [someProp, setSomeProp] = useState('');
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(someProp !== ''){
      setCount(count=>count+1)
    }
  },[someProp])

  function handleChange(event)
  {
    setSomeProp(event.target.value)
  }

  return (
    <div>
      <h1>useEffect</h1>
      <label>
        Parent Component:
        <input type="text" value={someProp} onChange={handleChange} />
      </label>
      <ChildComponent someProp={someProp} count={count} />
    </div>
  )
}


export default ParentComponent;

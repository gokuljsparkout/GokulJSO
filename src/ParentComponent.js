import React, {useMemo,useState} from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [someProp, setSomeProp] = useState('');

  const memoizedCount = useMemo(() => { //useMemo
    let count = 0;
    return someProp => {
      if (someProp !== '') {
        count++;
      }
      return count;
    };
  }, []);

  const count = memoizedCount(someProp);

  const handleChange = event => {
    setSomeProp(event.target.value);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <label>
        Parent Component:
        <input type="text" value={someProp} onChange={handleChange} />
      </label>
      <ChildComponent someProp={someProp} count={count} />
    </div>
  )
}


export default ParentComponent;

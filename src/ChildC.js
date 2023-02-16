import React from 'react'
const ChildC = ({value,onChange}) => {
  return (
    <div>
        <input type='text' placeholder='Enter Anything' onChange={onChange}></input>
      <p>Value : {value}</p>
    </div>
  )
}

export default ChildC
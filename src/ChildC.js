import React from 'react'

const ChildC = ({incrementCount}) => {
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default ChildC
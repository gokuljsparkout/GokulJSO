import React from 'react'

const Pan = ({title,children,isActive,onShow}) => {
  return (
    <section>
      <h3>{title}</h3>
      {
        isActive ? (<p>{children}</p>) : (<button onClick={onShow}>
        Show 
       </button>)
      }
    </section>
  )
}

export default Pan
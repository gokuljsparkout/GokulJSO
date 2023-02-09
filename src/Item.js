const Item  = ({name,isPacked}) =>
  (
    isPacked?<li>{name} ✔</li>:<li>{name}</li> //Used Ternary Operator 
  )
 

  

export default Item
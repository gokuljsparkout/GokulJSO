const Item  = ({name,isPacked}) =>
  {
    if(isPacked)
    {
    return <li>{name} ✔</li>
    }
  
  else{
    return <li>{name}</li>
  }
}

export default Item
import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {

  const items =[
    {id:1, name: 'Item 1'},
    {id:2, name: 'Item 2'},
    {id:3, name: 'Item 3'},
  ]
  return (
    <div>
      <h1>ItemList</h1>
      <ul>
        {items.map((item)=>(
          <li key={items.id}>
            <Link to ={`/item/${item.id}`}>{item.name}</Link>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default ItemList
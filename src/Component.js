import React, { useState } from 'react'

const Component = () => {
  const [formData, setFormData]= useState({name : '', email : ''});
  const apiUrl = 'http://localhost:3001/api/user';

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    fetch(apiUrl,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(formData)

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.error(error));
  }

  const handleInputChange = (event)=> {
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  }
  //The square brackets [name] indicate that the property name is dynamic and should be determined at runtime.
  //In this case, name is a variable that contains the name of the input field that triggered the change event.
  //So if the user types something into the "Name" field, name will be the string "name".
  
  return (
    <div>
      <h1>POST REQUEST</h1>
    
    <form onSubmit={handleSubmit}>
      <label>
        Name : 
        <input type='text' name='name' value={formData.name} onChange={handleInputChange}/>
      </label>

      <label>
        Email : 
        <input type='email' name='email' value={formData.email} onChange={handleInputChange}/>
      </label>
      <button type='submit'>Submit</button>

    </form>
    </div>
  )
}

export default Component
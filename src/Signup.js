import React from 'react'
import useFormValidation from './useFormValidation'

const INITIAL_STATE ={
  name : '',
  email : '',
  password : '',
};

function Signup() {

  const {values, handleChange , handleSubmit,errors, isSubmitting} = useFormValidation(INITIAL_STATE,validate);

  function validate(values)
  {
    let errors ={};

    if(!values.name)
    {
      errors.name='Name is Required'
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if(!values.password)
    {
      errors.password ='Password is required';
    }
    else if(values.password.length < 6)
    {
      errors.password = "Password must be atleast 6 characters"
    }
    return errors;
  }
  return (
    <div>
      <h1>Custom Hooks - Form Validation</h1>  <form onSubmit={handleSubmit}>
      <label>Name :
    <input type="text" name="name" value={values.name} onChange={handleChange} />
    </label>
    <br/>
    <br/>
    <label> Email :
    {errors.name && <p>{errors.name}</p>}
    <input type="email" name="email" value={values.email} onChange={handleChange} />
    </label>
    <br/>
    <br/>
    <label> Password: 
    {errors.email && <p>{errors.email}</p>}
    </label>
    <input type="password" name="password" value={values.password} onChange={handleChange} />
    {errors.password && <p>{errors.password}</p>}
    <br/>
    <br/>
    <button type="submit" disabled={isSubmitting}>Signup</button>
  </form>
  </div>

  )
  
}

export default Signup;
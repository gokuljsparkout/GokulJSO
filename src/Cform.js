    import React ,{useState} from 'react'

    //Controlled input
    
    const Cform= () => {
      const [name,setName]=useState('');

      const handleChange = event =>{
        setName(event.target.value);
      }
      return (
        <div>
          <h1>Controlled Input</h1>
        <form>
          <input type='text' value={name} onChange={handleChange}/>
        </form>
        </div>
      )
    };
    
    export default Cform
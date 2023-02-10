import React from 'react'

//Adding default values

const Types=()=> {

  const handleSubmit =e=>{

    e.preventDefault(); //Prevents Reloading

    const form =e.target;
    const formData = new FormData(form); //Reads the form data
    fetch('/some-api', { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

  }
  return (
    <div>
      <form>
      <label>
        Text input : <input name='myInput' defaultValue='Some Initial Value'></input>
      </label>
      <hr/>
      <p>
        Radio Buttons :
        <label>
          <input type='radio' name="myRadio" value="option 1" defaultChecked={true}/>
          Option 1
        </label>
        <label>
          <input type='radio' name="myRadio" value="option 2"/>
          Option 2
        </label>
        <label>
          <input type='radio' name="myRadio" value="option 3"/>
          Option 3
        </label>

      </p>
      <hr/>
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr/>
      <button type='reset'>Reset Form</button>
      <button type='submit' onClick={handleSubmit}>Submit Form</button>
      </form>

    </div>
  )
}

export default Types
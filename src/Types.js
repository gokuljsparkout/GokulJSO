import React from 'react'

//Adding default values

function Types() {
  return (
    <div>
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
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>

    </div>
  )
}

export default Types
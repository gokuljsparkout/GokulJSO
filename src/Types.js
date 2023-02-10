import React from 'react'

//Types of Inputs

function Types() {
  return (
    <div>
      <label>
        Text input : <input name='myInput'></input>
      </label>
      <hr/>
      <p>
        Radio Buttons :
        <label>
          <input type='radio' name="myRadio" value="option 1"/>
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
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>

    </div>
  )
}

export default Types
import React from 'react';
import './Form.css';

const { useState } = require("react");


export default function Form(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  
  function handleNameChange(event) {
    setName( event.target.value);
  }
  function handleAgeChange(event) {
    setAge( event.target.value);
  }
  
  function handleSubmit(event) {
    alert('A name was submitted: ' + name + ' ' + age);
    event.preventDefault();
  }

  // handles making available of fieldTypes based on schema
  const formFields = props.fields.map(function (f) {
    let fieldValue = ''
    let fieldChangeHandler = ''
    
    // statehooks and changehandlers are stll hardcoded
    if (f._id === 'cc4cb134-fda0-44d8-8e92-e42ebbceb415') {       
      fieldValue = name
      fieldChangeHandler = handleNameChange
    } else if (f._id === '228b905f-4a43-4a40-b829-0c6a04ad4782') {
      fieldValue = age
      fieldChangeHandler = handleAgeChange
    }

    return (
        <label className="Form-label" id={f._id }key={f._id}>{f.label}:&nbsp;
          <input
            className="Form-input"
            type={f.type}
            name={f.name}
            value={fieldValue}
            onChange={fieldChangeHandler}
            maxLength={f.maxLength}/>
          </label>        
    )
})

  // handles the rendering of the formcontent based on layout
  const formContent = props.layout.map(function (f, index) { // loop through layoutArray
    const fieldId = f.fieldId

    const formField = formFields.find( function(formField){ 
      return formField.key === fieldId;                      // select correct fieldType from formFields, based on layout fieldId
    });
    
    return (                                                 // render correct formFields in order of layout Array
      <td key={index} className={'Form-td'}>
      {formField}
      </td>
    )
  }) 

  return (
    <form onSubmit={handleSubmit}>
      <table className='Form-table'>
        <tbody>
                                                             {/* // should be dependent of props.layout.rows */}
          <tr>   
            {formContent}
          </tr>
        </tbody>
      </table>
      <button className="Form-btn" type="submit">submit form</button>
    </form>
    );

}
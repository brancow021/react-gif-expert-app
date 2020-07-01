import React, { useState } from 'react'
import PropTypes from 'prop-types';



const AddCategory = ({ setcategories }) => {
  
  const [inputValue, setinputValue] = useState('');


  const handleInputChange = (evt) => {
    setinputValue(evt.target.value);
  }
  

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(inputValue.trim().length > 2){
      setcategories(cats => [inputValue, ...cats]);
      setinputValue('');
    }

  }

  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}


AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired
}



export default AddCategory


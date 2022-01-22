import React, { useState } from 'react';
import PropTypes from 'prop-types';

//{setCategories} se desestructura para obtener sus props
const AddCategory = ( {SetCategories} ) => {
    //Da estado al input para saber lo que se escribe
    const [inputValue, setInputValue] = useState('');

    //Extraer el valor de e
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Realiza un posteo
        e.preventDefault();
        
        //Condiciona que no hay vacío
        if( inputValue.trim().length > 2 ){
            //Se crea el nuevo arreglo porque no tenemos scope a categories
            SetCategories( cats => [ inputValue, ...cats] );
            //Eliminar valor para no permitir doble posteo
            setInputValue('');
        }

    }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
)
};

AddCategory.propTypes = {
    SetCategories: PropTypes.func.isRequired, //
}

export default AddCategory;

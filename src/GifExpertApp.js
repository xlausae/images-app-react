import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    //No usamos const con arreglo porque si vamos a agregar elementos éste no va a mutar

    const [categories, setCategories] = useState(['Gumball']);
    
    //Mostrar categories para mostrar el contenido:
    //Map para retornar una expresión del arreglo+
    //+iterandolo
      return (
  <>
        <h2>GifExpertApp</h2>
        <AddCategory SetCategories={ setCategories } />
        <hr />

        <ol>
            { 
                categories.map( category => (
                    //Se envía la categoría evaluada en {} - key= categoría o id único
                    <GifGrid key={ category } category={ category }/>
                )) 
            }
        </ol>
  </>
)
};

export default GifExpertApp;

import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  //Se encarga de realizar la petición cuando se cargue el componente por primera vez
    const { data:images, loading } = useFetchGifs( category );

  return (
      <>
    <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

    { loading && <p className='animate__animated animate__flash'>Cargando...</p> }

  <div className='card-grid'>
    
          {
          images.map( img => (
                //Se envía los datos de cada objeto evaluada en {} - key= id único
                <GifGridItem
                key={ img.id } 
                //Envía cada propiedad de img como prop independiente
                { ...img }/>
                ))
        }
  </div>
  </>
  )
};

export default GifGrid;

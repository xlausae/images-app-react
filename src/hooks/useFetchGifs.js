import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
      data: [],
      loading: true
  });

  //Se usa el Effect para que se dispare cuando cambia la categoría
  useEffect( () => {
        //Se ejecuta cuando el componente se renderiza por primera vez
        //Se realiza la petición http
        getGifs( category )
        //Traemos las imagenes
            .then( imgs => {
                //Cuando se obtiene la data se cambia el estado
                setState({
                  data: imgs,
                  loading: false
                });

            });
            //Si la categoría cambia se ejecuta de nuevo
    }, [ category ] )


  return state; //{data:[], loading: true}
};

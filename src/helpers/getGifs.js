export const getGifs = async( category ) => {
        
    //Petición para traer las imagenes
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=SaoEBfUfDUbACgXhPNpUaN1HrLcJUIxW`;
    
    const resp = await fetch( url );
    //Es igual al await de la respuesta en formato json
    //Desestructura
    const { data } = await resp.json();

    //Barremos cada una de las imagenes
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            //Signo ? para confirmar si hay imagenes entonces que lo use
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
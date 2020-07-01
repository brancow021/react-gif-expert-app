const getGifs = async( category ) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=k2boTIiM2GQe51axI4ZrWzgYG3jHdHvh`

  const RES = await fetch(URL);
  const { data } = await RES.json();

  const GIFS  = data.map(img => {
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

    return GIFS;
}


export default getGifs;
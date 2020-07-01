import React, {Fragment} from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {

  const {data: images, loading} = useFetchGifs(category);


  return (
    <Fragment>
      <h3 className="card animate__animated animate__fadeIn">{ category }</h3>
      {loading ? <p className ="card animate__animated animate__flash">Loading</p> : null}

      <div className="card-grid">
        {
          images.map((image) => (
            <GifGridItem 
              {...image}
              key={image.id}
            />
          ))
        }
      </div>
    </Fragment>
    
  )
}

export default GifGrid

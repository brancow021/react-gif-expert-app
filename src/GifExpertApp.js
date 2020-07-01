import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball' ]

  const [categories, setcategories] = useState(['Naruto Shippuden' ])


  // const handleAdd = () => {
  //   setcategories([...categories, 'Naruto']);
  // }

  return(
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={ setcategories } />
      <hr/>

      <ol>
        {
          categories.map(category => (
            <GifGrid 
              key={category}
              category={category} />
          ))
        }
      </ol>
      
    </Fragment>
  )

}



export default GifExpertApp;
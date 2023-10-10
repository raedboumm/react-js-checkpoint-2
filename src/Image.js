import React from 'react'
import Product from './Product' 

const Image = () => {
  return (
    <div>
        <img style={{width:250,height:300}} src={Product.imageurl} alt="watch" />

        </div>
  )
}

export default Image
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ title, image, price, category }) => {
  return (
    <div className='card' style={{ width: '300px' }}>
      <img className='card-img-top' src={image} alt='Card image' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>$ {price}</p>
        <p className='card-text'>{category}</p>
        <Link to='/cart' className='btn btn-primary'>Add to Cart</Link>
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

const Product = ({id, title, image, price, category, rating }) => {

  const { addToCart } = useCart();
  const product = {
    id,
    title,
    price,
    category,
    rating
  }
  
  return (

    // <div className='product-card'>
    //   <h3>Title: {title}</h3>
    //   <h3>Price: {price}</h3>
    //   <h3>Category: {category}</h3>
    //   <button onClick={() => addToCart(product)}>Add to Cart</button>

   <div className='card' style={{ width: '300px' }}>
      <img className='card-img-top' src={image} alt='Card image' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>$ {price}</p>
        <p className='card-text'>{category}</p>
        <p className='card-text'>Rating:{rating}</p>
        {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
        <Link to='/cart' className='btn btn-primary'><button onClick={() => addToCart(product)}>Add to Cart</button>
</Link>
      </div>
    </div>
  )
}

export default Product;
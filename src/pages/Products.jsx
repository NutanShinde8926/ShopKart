import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [sortOrder, setSortOrder] = useState("")
  const [sortRating, setSortRating] = useState("")
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const sortedProducts = [... products].sort((a,b) => {
    if (sortOrder === 'lowToHigh') return a.price - b.price;
    if (sortOrder === 'highTolow') return b.price - a.price;
    return 0;
  })
  // const SortedPrice = [... price].sort((a,b) => {
  //   if (sortPrice === 'lowToHigh') return a.Rating - b.Rating;
  //   if (sortPrice === 'highTolow') return b.Rating - a.Rating;
  //   return 0;
  // })



  return (
    <div>
      <h3>Products</h3>
      <label>Sort by Price:</label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Default</option>
        <option value="lowToHigh">Price: low to High</option>
        <option value="highToLow">Price: High to low</option>
      </select>

       
      <label>Sort by Ratings:</label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Default</option>
        <option value="lowToHigh">Rating: low to High</option>
        <option value="highToLow">Rating: High to low</option>
      </select>

   
     <div className='products-row'>
      {sortedProducts.map(prod => (
        <Product
          key={prod.id}
          title={prod.title}
          price={prod.price}
          category={prod.category}
          image={prod.image}
          rating={(Math.random()*10).toFixed(2)}
        />
      ))}
    </div>
     </div>
  )
}

export default Products;







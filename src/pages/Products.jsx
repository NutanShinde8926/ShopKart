import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [sortPrice, setSortPrice] = useState("")
  const [sortRating, setSortRating] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      if (sortPrice === 'lowToHigh') return a.price - b.price;
      if (sortPrice === 'highToLow') return b.price - a.price;
    }

    if (sortBy === 'rating') {
      if (sortRating === 'lowToHigh') return a.rating.rate - b.rating.rate;
      if (sortRating === 'highToLow') return b.rating.rate - a.rating.rate;
    }

    return 0;
  })

  // pagination (outside the sort function)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h3>Products</h3>

      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
        <option value="">Default</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>

      <label>Sort by Price: </label>
      <select value={sortPrice} onChange={(e) => { setSortPrice(e.target.value); setCurrentPage(1); }}>
        <option value="">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      <label>Sort by Rating: </label>
      <select value={sortRating} onChange={(e) => { setSortRating(e.target.value); setCurrentPage(1); }}>
        <option value="">Default</option>
        <option value="lowToHigh">Rating: Low to High</option>
        <option value="highToLow">Rating: High to Low</option>
      </select>

      <div className='products-row'>
        {currentProducts.map(prod => (
          <Product
            key={prod.id}
            title={prod.title}
            price={prod.price}
            category={prod.category}
            image={prod.image}
            rating={prod.rating.rate}
          />
        ))}
      </div>

      <div>
        <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default Products














// import React, { useEffect, useState } from 'react'
// import Product from '../components/Product'

// const Products = () => {
//   const [products, setProducts] = useState([])
//   const [sortBy, setSortBy] = useState("")
//   const [sortPrice, setSortPrice] = useState("")
//   const [sortRating, setSortRating] = useState("")
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(4);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//   }, [])

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortBy === 'price') {
//       if (sortPrice === 'lowToHigh') return a.price - b.price;
//       if (sortPrice === 'highToLow') return b.price - a.price;
//     }

//     if (sortBy === 'rating') {
//       if (sortRating === 'lowToHigh') return a.rating.rate - b.rating.rate;
//       if (sortRating === 'highToLow') return b.rating.rate - a.rating.rate;
//     }


//     //3rd para
//     const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const previousPage = () => {
//       if (currentPage > 1) {
//         setCurrentPage(currentPage - 1);
//       }
//     };

//     const nextPage = () => {
//       if (currentPage < totalPages) {
//         setCurrentPage(currentPage + 1)
//       }
//     };

//     return 0;
//   })

//   return (
//     <div>
//       <h3>Products</h3>

//       <label>Sort by: </label>
//       <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//         <option value="">Default</option>
//         <option value="price">Price</option>
//         <option value="rating">Rating</option>
//       </select>

//       <label>Sort by Price: </label>
//        <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
//        <option value="">Default</option>
//         <option value="lowToHigh">Price: Low to High</option>
//         <option value="highToLow">Price: High to Low</option>
//       </select>

//       <label>Sort by Rating: </label>
//       <select value={sortRating} onChange={(e) => setSortRating(e.target.value)}>
//         <option value="">Default</option>
//         <option value="lowToHigh">Rating: Low to High</option>
//         <option value="highToLow">Rating: High to Low</option>
//       </select>

//       <div className='products-row'>
//         {sortedProducts.map(prod => (
//           <Product
//             key={prod.id}
//             title={prod.title}
//             price={prod.price}
//             category={prod.category}
//             image={prod.image}
//             rating={prod.rating.rate}
//           />
//         ))}
//       </div>

//         <div className = 'pagina'>
//           <button onClick={previousPage} disabled={currentPage === 1}>previous</button>
//           <span>page {currentPage} of {totalPages}</span>
//           <button onClick={nextpage} disabled={currentpage === totalPages}>
//               NEXT
//           </button>

// //     </div>
// //   )
// }

// export default Products













// // import React, { useEffect, useState } from 'react'
// // import Product from '../components/Product'

// // const Products = () => {
// //   const [products, setProducts] = useState([])
// //   const [sortOrder, setSortOrder] = useState("")
// //   const [sortRating, setSortRating] = useState("")
  
// //   useEffect(() => {
// //     fetch('https://fakestoreapi.com/products')
// //       .then(response => response.json())
// //       .then(data => setProducts(data))
// //   }, [])

// //   const sortedProducts = [... products].sort((a,b) => {
// //     if (sortOrder === 'lowToHigh') return a.price - b.price;
// //     if (sortOrder === 'highTolow') return b.price - a.price;
// //     return 0;
// //   })
// //   // const SortedPrice = [... price].sort((a,b) => {
// //   //   if (sortPrice === 'lowToHigh') return a.Rating - b.Rating;
// //   //   if (sortPrice === 'highTolow') return b.Rating - a.Rating;
// //   //   return 0;
// //   // })



// //   return (
// //     <div>
// //       <h3>Products</h3>
// //       <label>Sort by Price:</label>
// //       <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
// //         <option value="">Default</option>
// //         <option value="lowToHigh">Price: low to High</option>
// //         <option value="highToLow">Price: High to low</option>
// //       </select>

       
// //       <label>Sort by Ratings:</label>
// //       <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
// //         <option value="">Default</option>
// //         <option value="lowToHigh">Rating: low to High</option>
// //         <option value="highToLow">Rating: High to low</option>
// //       </select>

   
// //      <div className='products-row'>
// //       {sortedProducts.map(prod => (
// //         <Product
// //           key={prod.id}
// //           title={prod.title}
// //           price={prod.price}
// //           category={prod.category}
// //           image={prod.image}
// //           rating={(Math.random()*10).toFixed(2)}
// //         />
// //       ))}
// //     </div>
// //      </div>
// //   )
// // }

// // export default Products;







import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../components/Brand'
import Brands from '../data/Brands'

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-content'>
        <h2 >About us</h2>
        <h4>Making everyday shopping simpler, faster and more enjoyable.</h4>
        <p>
          At ShopKart, we believe great products should be accessible to everyone.
          We are an online shopping destination offering a wide range of high-quality
          products at great prices, delivered right to your doorstep.
        </p>
        <p>
          From fashion and electronics to home essentials and more — we&apos;re here
          to make shopping easier, better, and more delightful for you.
        </p>

        <div className='about-actions'>
          <Link to='/products' className='shop-btn'>Shop now</Link>
        </div>

        <h5>Shop Smarter, Live Better</h5>
      </div>

      <div className='second-section'>
        <h3>Trusted brand</h3>
        <div className='brands'>
          {Brands.map((brand, index) =>
            <Brand
              key={`${brand.name}-${index}`}
              name={brand.name}
              image={brand.image}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default About



































        {/* <span className='about-badge'>About ShopKart</span> */}

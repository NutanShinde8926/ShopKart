import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3 site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>ShopKart</h5>
            <p className="mb-0 text-light text-opacity-75">
              Your one-stop destination for quality products and smart shopping.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled mb-0 text-light text-opacity-75">
              <li>Email: hello@shopkart.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Location: Katraj,Pune</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center small text-light text-opacity-75">
          © 2026 Shop Kart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
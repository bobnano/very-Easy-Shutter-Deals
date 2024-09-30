// Home.jsx
import React, { useState, useEffect } from 'react';
import products from './products';
import './App.css';
import { IoArrowBack } from "react-icons/io5";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMoreProduct, setViewMoreProduct] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Get unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleViewMore = (productId) => {
    const product = products.find((prod) => prod.id === productId);
    setViewMoreProduct(product); // Set the selected product for "View More"
  };

  const handleBackToList = () => {
    setViewMoreProduct(null); // Go back to product list
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show or hide the scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product List or View More Section (80% of the page) */}
        <div className="col-lg-8 col-md-8 col-sm-12 product-list-container">
          <div className="sticky-header">
            <h1 className="mb-4">Amazon Products</h1>
            <div className="mb-3 sticky-top">
              <label htmlFor="category" className="form-label">
                Filter by Category:
              </label>
              <select
                id="category"
                className="form-select"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {viewMoreProduct ? (
            <div className="view-more-section">
              {/* View More Section */}
              <div className='fs-3 py-1 pe-2'>
                <IoArrowBack onClick={handleBackToList}/>
              </div>
              <h2>{viewMoreProduct.title}</h2>
              <p>
                <strong>Category:</strong> {viewMoreProduct.category}
              </p>
              <div className="rounded p-2>
                <img src={viewMoreProduct.img} alt={viewMoreProduct.id} width="300px" height="300px"/>
              </div>
              <p>
                <strong>Description:</strong> {viewMoreProduct.description}
              </p>
              <button className="btn btn-secondary" onClick={handleBackToList}>
                Back to Products
              </button>
              <a
                        href={viewMoreProduct.link}
                        className="ms-2 btn btn-success"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                  </a>
            </div>
          ) : (
            <ul className="list-unstyled product-list">
              {filteredProducts.map((product) => (
                <li key={product.id} className="mb-3 p-3 border rounded">
                  <h2>{product.title}</h2>
                  <p>Category: {product.category}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewMore(product.id)}
                  >
                    Read More
                  </button>
                  
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar - 20% of the page (Additional Content) */}
        <div className="col-lg-4 col-md-4 col-sm-12 sidebar sticky-top">
          <div className="p-4">
            <h2>Today's Top Deals</h2>
            <p>There is no Data for Top Deals we will add some content in the future.</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default Home;

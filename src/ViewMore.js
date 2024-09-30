// ViewMore.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';

const ViewMore = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price Range:</strong> {product.priceRange}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ViewMore;

import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <main>
      <h1>Product: {id}</h1>
      {/* Add product details here based on the id */}
    </main>
  );
};

export default Product;

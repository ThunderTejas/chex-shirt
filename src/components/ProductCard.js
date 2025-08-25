import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="cardInfo">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="buyButton">BUY & DETAILS</button>
      </div>
    </div>
  );
};

export default ProductCard;
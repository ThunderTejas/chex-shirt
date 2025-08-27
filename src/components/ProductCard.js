import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, imageUrl, salePrice, regularPrice } = product;
  const discount = Math.round(((regularPrice - salePrice) / regularPrice) * 100);

  return (
    <div className="card">
      {discount > 0 && (
        <div className="saleTag">{discount}% OFF</div>
      )}
      <div className="imageWrapper">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cardInfo">
        <a href={`/products/${name.toLowerCase().replace(/ /g, '-')}`} className="productName">
          {name}
        </a>
        <div className="priceContainer">
          <span className="salePrice">Rs. {salePrice.toFixed(2)}</span>
          {discount > 0 && <span className="regularPrice">Rs. {regularPrice.toFixed(2)}</span>}
        </div>
        <button className="selectOptions">Select options</button>
      </div>
    </div>
  );
};

export default ProductCard;
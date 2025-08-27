import React from 'react';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const featuredProducts = [
  {
    id: 4,
    name: "Retro Minimalist Color-block Symmetrical Geometry Print Casual 100% Cotton Shirt",
    imageUrl: "https://zayraapparel.com/cdn/shop/products/Sc4c23c1f1c5f4f2d8428cd8471e0f2bdX_720x.jpg",
    salePrice: 299,
    regularPrice: 999,
  },
  {
    id: 5,
    name: "Cloud Layer Sector Vintage Print Casual 100% Cotton Shirt",
    imageUrl: "https://zayraapparel.com/cdn/shop/products/S51ccb0f4a2604c32a1c45bad0589f453I_720x.jpg",
    salePrice: 299,
    regularPrice: 999,
  },
  {
    id: 6,
    name: "Vintage Fish Sardines Art Print Casual 100% Cotton Shirt",
    imageUrl: "https://zayraapparel.com/cdn/shop/products/S5a783804f6d445babdf7621a2c9e3095h_720x.jpg",
    salePrice: 299,
    regularPrice: 999,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featuredSection">
      <div className="sectionTitle">
        <h2>Featured Collection</h2>
        <p>Our most exclusive designs</p>
      </div>
      <div className="featuredGrid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <a href="/collections/best-selling" className="viewCollection">
        View Collection
      </a>
    </section>
  );
};

export default FeaturedProducts;
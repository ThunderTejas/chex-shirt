import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const products = [
    {
        id: 1,
        name: "Cute Cat Print Casual 100% Cotton Shirt",
        imageUrl: "https://zayraapparel.com/cdn/shop/products/S0ee9e8e51b154d009d43a791ce4c3379W_720x.jpg",
        salePrice: 299,
        regularPrice: 999,
    },
    {
        id: 2,
        name: "Waves Clouds Abstract Art Print Casual 100% Cotton Shirt",
        imageUrl: "https://zayraapparel.com/cdn/shop/products/S9ed39c5df659486d8a47a91f53d438aaA_720x.jpg",
        salePrice: 299,
        regularPrice: 999,
    },
    {
        id: 3,
        name: "Abstract Digital Art Painting Vintage Print Casual 100% Cotton Shirt",
        imageUrl: "https://zayraapparel.com/cdn/shop/products/S699f9c8e45c44c349187ad59b9bc1845Q_720x.jpg",
        salePrice: 299,
        regularPrice: 999,
    }
];

const ProductGrid = () => {
    return (
        <section className="productGrid">
            <div className="gridTitle">
                <h2>Trending Products</h2>
                <p>Discover our most popular shirts</p>
            </div>
            <div className="grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <a href="/collections/all" className="viewAllButton">
                View All Products
            </a>
        </section>
    );
};

export default ProductGrid;

import React, { useState } from "react";
import "./ProductsListing.css";
import { NavLink } from "react-router-dom";
export default function ProductsListing() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 20.99, discountPrice: 15.99 },
    { id: 2, name: "Product 2", price: 30.49, discountPrice: 25.99 },
    { id: 3, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    { id: 4, name: "Product 1", price: 20.99, discountPrice: 15.99 },
    { id: 5, name: "Product 2", price: 30.49, discountPrice: 25.99 },
    { id: 6, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    { id: 7, name: "Product 1", price: 20.99, discountPrice: 15.99 },
    { id: 8, name: "Product 2", price: 30.49, discountPrice: 25.99 },
    { id: 9, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    { id: 10, name: "Product 1", price: 20.99, discountPrice: 15.99 },
    { id: 11, name: "Product 2", price: 30.49, discountPrice: 25.99 },
    { id: 12, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    { id: 9, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    { id: 10, name: "Product 1", price: 20.99, discountPrice: 15.99 },
    { id: 11, name: "Product 2", price: 30.49, discountPrice: 25.99 },
    { id: 12, name: "Product 3", price: 15.99, discountPrice: 12.99 },
    // Add more products as needed
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLike = (productId) => {
    // Send a request to the server to add the product to the wishlist
    // You can use fetch or your preferred method for making API requests
    // For demonstration purposes, we'll just update the local state here
    setLikedProducts((prevLikedProducts) => [...prevLikedProducts, productId]);
  };
  const renderPagination = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return paginationButtons;
  };


  const renderWishlist = () => {
    const wishlistItems = products.filter((product) =>
      likedProducts.includes(product.id)
    );

    return (
      <div className="wishlist">
        {/* <h2>Wishlist</h2> */}
        {wishlistItems.map((product) => (
          <div key={`wishlist-${product.id}`} className="wishlist-item">
            {product.name} - ${product.discountPrice.toFixed(2)}
          </div>
        ))}
      </div>
    );
  };

  const renderProductItem = (product) => (
    
    <div key={product.id} className="product-item">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          <span className="original-price">${product.price.toFixed(2)}</span>
          <span className="discount-price">
            ${product.discountPrice.toFixed(2)}
          </span>
        </div>
        <button onClick={() => handleLike(product.id)} className="like-button">
        Like
      </button>
    </div>
     
  );

  const renderProductRow = (start, end) => (
    <div key={`row-${start}-${end}`} className="product-row">
      {products.slice(start, end).map(renderProductItem)}
    </div>
  );

  const renderProductListing = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
      rows.push(renderProductRow(i, i + 4));
    }
    return (
      <div className="product-listing">
        {rows.slice(start / 4, end / 4)}
        {totalPages > 1 && (
          <div className="pagination">{renderPagination()}</div>
        )}
      </div>
    );
    // return rows;
  };

  return<div> <div className="product-listing">{renderProductListing()}</div>;
    {renderWishlist()}
    </div>
}

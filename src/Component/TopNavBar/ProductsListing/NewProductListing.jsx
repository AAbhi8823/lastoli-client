import React, { useState, useEffect } from "react";
import "./NewProductListing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "@mui/material/Pagination";
import { useDataFetching } from "../../Body/ListIteam/useDataFetching";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";


export default function NewProductListing({ apiUrl, ...props }) {
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products, loading } = useDataFetching(apiUrl);
  console.log("Loading:::>>>>",products)
  if (!products) {
    // Handle the loading state or display an error message
    return <p>Loading...</p>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(parseInt(newPage, 10));
  };

  const handleLikeClick = (productId) => {
    console.log(`Like button clicked for product with id: ${productId}`);
  };
  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(product => product._id === productId);
    console.log(`Add to cart for product with id: ${selectedProduct}`)
    // Check if the product is not already in the cart
    // if (!cart.some(item => item._id === productId)) {
    //   // Add the product to the cart
    //   setCart([...cart, selectedProduct]);
    //   console.log(`Added to cart: ${selectedProduct.product_name}`);
    // } else {
    //   console.log(`Product already in the cart: ${selectedProduct.product_name}`);
    // }
  };
  

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="row">
            {currentProducts.map((product) => (
              <div className="col-md-3" key={product._id}>
                <div className={`ibox ${product.active ? "active" : ""}`}>
                 
                  <div className="ibox-content product-box">
                    <div className="product-imitation"><img src={product.thumbnail_image} alt="" /></div>
                    <div className="product-desc">
                      <span className="product-price">${product.price}</span>
                      <small className="text-muted">{product.category}</small>
                      <NavLink to={`/item/${product._id}`} className="product-name">
                        <p>{product.product_name}</p>
                      </NavLink>
                      <div className="small m-t-xs">{product.description}</div>
                      <div className="m-t text-righ">
                        <button
                          className="btn btn-xs btn-outline btn-primary"
                          onClick={() => handleLikeClick(product._id)}
                        >
                         <IoIosHeartEmpty />

                        </button>
                        <a
                          href="#/"
                          className="btn btn-xs btn-outline btn-primary"
                          onClick={() => handleAddToCart(product._id)}
                        >
                          < FaCartArrowDown/>
                        </a>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            ))}
          </div>
          <div className="paginationn-container">
          <div className="paginationn">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </div>
          </div>
         
        </>
      )}
    </div>
  );
}

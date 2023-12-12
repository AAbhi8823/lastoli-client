import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { base_url } from "../../../Utils/baseUrl";
import { config } from "../../../Utils/axiosconfig";
export default function PaymentMethods() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/DeliveryAddress");
  };

  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(1);
  const Shipping = 100;
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1Yzc4Zjc1ZGFjOTQ1MjVjYjllNWZkIiwibmFtZSI6IkFiaGlzaGVrIEt1bWFyIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MDEwODU3NjEsImV4cCI6MTcwMzY3Nzc2MX0.8XDMSgCYFtn-bYzorYORaPAFcEKDj7FSA0SZsrNwYqw";

  useEffect(() => {
    // Fetch data from the API
    fetch(`${base_url}/v1/cart/get-cart`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        calculateTotalAmount(data.data.items);
        console.log('Total amount::>>>>',data.data.items)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const calculateTotalAmount = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.total_price, 0);
    setTotalAmount(total);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedProducts = products.items.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
  
    setProducts((prevProducts) => ({
      ...prevProducts,
      items: updatedProducts,
    }));
  
    calculateTotalAmount(updatedProducts);
  };

  const handleRemoveItem = (itemId) => {
    const removeItemUrl = `${base_url}/v1/cart/remove-product/${itemId}`;

    fetch(removeItemUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Item removed successfully, update state
          const updatedProducts = products.items.filter(
            (item) => item._id !== itemId
          );
          setProducts({ ...products, items: updatedProducts });
          calculateTotalAmount(updatedProducts);
        } else {
          console.log("Failed to remove item");
        }
      })
      .catch((error) => console.error("Error removing item:", error));
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedProducts = products.items.map((item) => {
      if (item._id === itemId) {
        const newQuantity = Math.max(item.quantity - 1, 1); // Ensure quantity doesn't go below 1
        handleQuantityChange(itemId, newQuantity);
      }
      return item;
    });
    setProducts({ ...products, items: updatedProducts });
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedProducts = products.items.map((item) => {
      if (item._id === itemId) {
        const newQuantity = item.quantity + 1;
        handleQuantityChange(itemId, newQuantity);
      }
      return item;
    });
    setProducts({ ...products, items: updatedProducts });
  };
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {products.items ? products.items.length : 0} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                
                {products.items && products.items.length > 0 ? (
                  products.items.map(
                    (
                      { product_id, color, size, quantity, total_price },
                      index
                    ) => (
                      
                      <MDBRow key={index}>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        {console.log("Product:::>>>>>>>>>",product_id)}
                          <MDBRipple
                            rippleTag="div"
                            rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <img
                              src={product_id.thumbnail_image} 
                              className="w-100"
                              alt={product_id.product_name}
                            />
                          
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg="5" md="6" className="mb-4 mb-lg-0">
                          <p>
                            <strong>{product_id.product_name}</strong>
                          </p>
                          <p>Color: {color}</p>
                          <p>Size: {size}</p>

                          <MDBTooltip
                            wrapperProps={{ size: "sm" }}
                            wrapperClass="me-1 mb-2"
                            title="Remove item"
                            onClick={handleRemoveItem}
                          >
                            <MDBIcon fas icon="trash" />
                          </MDBTooltip>

                          <MDBTooltip
                            wrapperProps={{ size: "sm", color: "danger" }}
                            wrapperClass="me-1 mb-2"
                            title="Move to the wish list"
                          >
                            <MDBIcon fas icon="heart" />
                          </MDBTooltip>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <MDBBtn
                              className="px-3 me-2"
                              onClick={() =>
                                handleDecreaseQuantity(product_id._id)
                              }
                              disabled={quantity === 1}
                            >
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              defaultValue={quantity}
                              min={0}
                              type="number"
                              label="Quantity"
                              onChange={(e) =>
                                handleQuantityChange(
                                  product_id._id,
                                  e.target.value
                                )
                              }
                            />

                            <MDBBtn
                              className="px-3 ms-2"
                              onClick={() =>
                                handleIncreaseQuantity(product_id._id)
                              }
                            >
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>`${total_price}`</strong>
                          </p>
                        </MDBCol>
                        <hr className="my-4" />
                      </MDBRow>
                    )
                  )
                ) : (
                  <p>No items in the cart</p>
                )}
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>${totalAmount.toFixed(2)}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>{Shipping}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${(totalAmount + Shipping).toFixed(2)}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg" onClick={handleClick}>
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

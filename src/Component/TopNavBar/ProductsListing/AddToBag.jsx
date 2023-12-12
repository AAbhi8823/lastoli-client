import React, { useState, useEffect } from "react";
import "./AddToBag.css";
import ItemlisImage from "../../../Image/LoginLeftImage.png";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom"; 
export default function AddToBag() {
  const navigate = useNavigate(); 
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Silver Mystic Blue Leat PENDANT WITH LINK CHAIN",
      count: 0,
      price: 238732,
      discountPrice: 3.7e32,
    },
    // Add more items as needed
  ]);

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
  });

  const [suggestedItems, setSuggestedItems] = useState([]);

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its count
      setItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with count 1
      setItems((prevItems) => [...prevItems, { ...item, count: 1 }]);
    }
  };

  const addToCart = (item) => {
    // Replace the following URL with your actual API endpoint for adding items to the cart
    const addToCartURL = "/api/addToCart";

    // Assuming your server expects a JSON payload with the item information
    const payload = {
      itemId: item.id,
      quantity: 1, // You might want to adjust this based on your requirements
    };

    fetch(addToCartURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You might need to include additional headers, such as authentication tokens
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }
        // Assuming the server responds with a JSON object containing updated cart information
        return response.json();
      })
      .then((data) => {
        // Update the state or perform any other necessary actions based on the server response
        console.log("Added to Cart:", item);
        console.log("Server Response:", data);
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const handlePlusClick = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleMinusClick = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItemClick = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // ...

  useEffect(() => {
    // Dummy data for suggested items
    const dummySuggestedItems = [
      {
        id: 101,
        name: "Suggested Item 1",
        price: 49.99,
        image: ItemlisImage,
      },
      {
        id: 102,
        name: "Suggested Item 2",
        price: 29.99,
        image: ItemlisImage,
      },
      // Add more suggested items as needed
    ];

    // Set the suggested items with the dummy data
    setSuggestedItems(dummySuggestedItems);

    // Fetch order summary data from the server
    // Replace this with your actual API endpoint
    fetch("/api/orderSummary")
      .then((response) => response.json())
      .then((data) => setOrderSummary(data))
      .catch((error) => console.error("Error fetching order summary:", error));

    // Fetch suggested items from the server
    // Replace this with your actual API endpoint
    fetch("/api/suggestedItems")
      .then((response) => response.json())
      .then((data) => setSuggestedItems(data))
      .catch((error) =>
        console.error("Error fetching suggested items:", error)
      );
  }, []);

  // ...

  return (
    <div className="addtobag">
      <div className="addtocart-toptext">
        <p>Your Cart</p>
      </div>
      <div className="addtocart-item">
        {items.map((item) => (
          <div key={item.id} className="addtocart-item-one">
            <img height="100%" src={ItemlisImage} alt="" />
            <div
              style={{ width: "40%", marginLeft: "5%" }}
              className="item-name-and-price"
            >
              <p>{item.name}</p>
              <button onClick={() => handleMinusClick(item.id)}>-</button>{" "}
              {item.count}{" "}
              <button onClick={() => handlePlusClick(item.id)}>+</button>
            </div>
            <div className="price-discountprice">
              <p>{item.price}</p>
              <p>{item.discountPrice}</p>
              <button onClick={() => handleDeleteItemClick(item.id)}>
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div>
          <p>Subtotal: ${orderSummary.subtotal.toFixed(2)}</p>
          <p>Shipping: ${orderSummary.shipping.toFixed(2)}</p>
          <hr />
          <p>Total: ${orderSummary.total.toFixed(2)}</p>
        </div>
        <button className="checkout-button"onClick={() => navigate("/DeliveryAddress")}>Check Out</button>
      </div>
      <div className="suggested-items">
        <p>Suggested Items</p>
        <div className="seguction-item">
          {suggestedItems.map((suggestedItem) => (
            <div key={suggestedItem.id} className="suggested-item">
              <img height="100%" src={suggestedItem.image} alt="" />
              <p>{suggestedItem.name}</p>
              <p>{suggestedItem.price}</p>
              <button onClick={() => handleAddToCart(suggestedItem)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

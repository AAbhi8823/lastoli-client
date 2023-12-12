import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import ReactImageGallery from "react-image-gallery";
import "./itemDetails.css";

import MainImage from "../../../Image/Rectangle60.png";

export default function ItemDetails() {
  const [itemDetails, setItemDetails] = useState(null);
  const [count, setCount] = useState(0);
  const { itemId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://65.0.184.136/api/v1/product/get-product-by-id/${itemId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setItemDetails(data);
        console.log("data:::::>>>>>>",data)
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchData();
  }, [itemId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: itemDetails.data.product_name,
          text: "Check out this product!",
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
      // You can provide a fallback sharing solution for browsers that do not support the Web Share API.
    }
  };


  // const renderImages = () =>
  //   [...Array(5)].map((_, index) => (
  //     <React.Fragment key={index}>
  //       <img
  //         height="22%"
  //         width="100%"
  //         style={{ left: "10px" }}
  //         src={MainImage}
  //         alt=""
  //       />
  //       <hr />
  //     </React.Fragment>
  //   ));

  const handleCountChange = (newCount) => {
    if (newCount >= 0) {
      setCount(newCount);
    }
  };

  const handleLike = () => {
    // Toggle the liked state
    setIsLiked(!isLiked);

    // TODO: Make API request to add/remove item from wishlist based on isLiked state
    if (isLiked) {
      console.log("Remove from wishlist API call");
    } else {
      console.log("Add to wishlist API call");
    }
  };

  const handleAddToCart = () => {
    console.log("Add to cart API call");
    setCartItems([...cartItems, itemDetails]);
  };

  if (!itemDetails) {
    return <p>Loading item details...</p>;
  }

  // const productDetailItem = {
  //   images: [
  //     {
  //       original:
  //         "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       thumbnail:
  //         "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     },
  //     {
  //       original:
  //         "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       thumbnail:
  //         "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     },
  //     {
  //       original:
  //         "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       thumbnail:
  //         "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     },
  //     {
  //       original:
  //         "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //       thumbnail:
  //         "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     {
  //       original:
  //         "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       thumbnail:
  //         "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     },
  //   ],
  //   title: "BIG ITALIAN SOFA",
  //   reviews: "reviews by 150 user",
  //   Productby: "Lastoil",
  //   availability: true,
  //   brand: "apex",
  //   category: "Sofa",
  //   sku: "BE45VGTRK",
  //   price: 450,
  //   previousPrice: 599,
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
  //   size: ["XS", "S", "M", "L", "XL"],
  //   color: ["gray", "violet", "red"],
  // };
  const { product_name, price,product_images,thumbnail_image } = itemDetails.data;

  const galleryImages = product_images.map((image,key) => ({
    original: itemDetails.data.product_images[key],  // replace 'image_url' with the actual property in your data
    thumbnail: itemDetails.data.product_images[key],  // replace 'thumbnail_url' with the actual property in your data
  }));

  return (
    <div className="itemDetails">

      <div className="main-Image">
        <div className="container mx-auto px-4">
          <ReactImageGallery
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            items={galleryImages}
          />
        </div>
      </div>
      <div className="item-proprtey">
        <div className="name-and-shear">
          <p>{product_name}</p>
          <FaShareAlt onClick={handleShare} />
        </div>
        <div className="product-starrating">
          <div>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <p>(20) Votes 109 customer reviews</p>
        </div>
        <hr />
        <div className="Product-name">${price} <small>*includes tax</small> </div>
        <div className="adding-button">
          <button onClick={() => handleCountChange(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => handleCountChange(count + 1)}>+</button>
        </div>
        <div className="size">
          {["xs", "s", "m", "l", "xl"].map((size) => (
            <button key={size}>{size}</button>
          ))}
        </div>
        <div className="add-tocartbutton">
          <button onClick={handleAddToCart}>
            <p>Add to Cart</p>
          </button>
        </div>
        <div className="wishlist-iocn">
          <button onClick={handleLike}>
            {isLiked ? <FcLike style={{ color: "blue" }} /> : <FcLike />}
          </button>
        </div>
        <div>
          <p>Free shipping on domestic orders above Rs. 2,000</p>
          <p>Country of Origin: India</p>
          <p>Manufactured & Packed By: Lastoil</p>
        </div>
        <p>Registered Address: </p>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderimage1 from "../../../Image/sliderimage1.png";
import Sliderimage2 from "../../../Image/sliderimage2.png";
import Sliderimage3 from "../../../Image/sliderimage3.png";
import { NavLink } from "react-router-dom";
import { base_url } from "../../../Utils/baseUrl";

export default function ImageSlider() {
  const imagePaths = [Sliderimage1, Sliderimage2, Sliderimage3];
  const PagePaths = ["IteamPage1", "IteamPage2", "IteamPage3"];
  const [imageData, setImageData] = useState({ banner_images: [] });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for image data
        const response = await fetch(
          `${base_url}/v1/website/get-website/6569c3c367f540de85c6e431`
        );
        const data = await response.json();
        // for(let i=1;i<=data.data.lenght;i++){
        //   setImageData(data.data[i]);
        // }
       setImageData(data.data[0]);
        console.log("full data>>>>:::", data.data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {imageData.banner_images &&
          imageData.banner_images.map((imageUrl, index) => (
            <div key={index}>
              <NavLink to={PagePaths[index]}>
                <img src={imageUrl} alt={`Image ${index + 1}`} />
              </NavLink>
            </div>
          ))}
      </Slider>
      <div className="dashbord-description"></div>
    </div>
  );
}

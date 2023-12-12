import React,{useState,useEffect} from 'react'
import './GoTotop.css'
import { FaArrowCircleUp } from "react-icons/fa";

// import { FaArrowCircleUp } from "@react-icons/all-files/ai/FaArrowCircleUp";
export default function GoTotop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
    className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
    onClick={scrollToTop}
  >
    <div className='upp'> <FaArrowCircleUp/></div>
 
  </div>
  )
}

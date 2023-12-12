import React from 'react'
import './GoWhatsApp.css'
import { BsWhatsapp } from "react-icons/bs";

export default function GoWhatsApp() {
    const openWhatsApp = () => {
        // Check if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
        // Set the WhatsApp web URL
        const whatsappWebUrl = 'https://web.whatsapp.com/';
    
        // If on a mobile device, open the WhatsApp app
        if (isMobile) {
          window.open('whatsapp://send?text=Hello', '_blank');
        } else {
          // If on a desktop, open the WhatsApp web URL
          window.open(whatsappWebUrl, '_blank');
        }
    }
  return (
    <div className='GotoWhatsApp' onClick={openWhatsApp}>
        <div className='upp'> <BsWhatsapp/></div>
        </div>
  )
}

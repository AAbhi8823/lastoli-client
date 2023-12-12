import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './wishlist.css'
import NewProductListing from './NewProductListing';
import { base_url } from '../../../Utils/baseUrl';
export default function Wishlist() {
  const apiEndpoint=`${base_url}/v1/wishlist/get-wishlist`
    const [wishlistItems, setWishlistItems] = useState([]);
  return (
    <div>
      <h1>Wishlist</h1>
      <NewProductListing apiUrl={apiEndpoint} />
      {/* <ul>
        {wishlistItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  )
}

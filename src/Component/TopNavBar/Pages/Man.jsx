import React,{useState,useEffect} from "react";
import BackGroungimage from './BackgroundImage/BackGroungimage'
import Filter from '../Filter/Filter'
import './Man.css'
import NewProductListingComponent from "../ProductsListing/NewProductListing";
export default function Man() {
  return (
    <div> <BackGroungimage/>
     <div className="body-contener">
        <div className="filter-item-count">
          <p>filter</p>
          <Filter />
        </div>
        <div className="item-listing">
        <NewProductListingComponent apiUrl='http://65.0.184.136/api/v1/product/get-all-products'/>
          </div>
      </div></div>
  )
}

import React,{useState,useEffect} from "react";
import BackGroungimage from "./BackgroundImage/BackGroungimage";
import './Silver.css'
import Filter from "../Filter/Filter";
import NewProductListingComponent from "../ProductsListing/NewProductListing";
export default function Silver() {
  return (
    <div>
      <BackGroungimage />
      <div className="body-contener">
        <div className="filter-item-count">
          <h4>filter</h4>
          <Filter />
        </div>
        <div className="item-listing">
        <NewProductListingComponent apiUrl='http://65.0.184.136/api/v1/product/get-all-products'/>
        </div>
      </div>
    </div>
  );
}

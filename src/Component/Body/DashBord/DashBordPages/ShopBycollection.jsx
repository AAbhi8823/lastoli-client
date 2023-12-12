import React from 'react'
import BackGroungimage from '../../../TopNavBar/Pages/BackgroundImage/BackGroungimage'
import Filter from '../../../TopNavBar/Filter/Filter'
import NewProductListing from '../../../TopNavBar/ProductsListing/NewProductListing'
export default function ShopBycollection() {
  return (
    <div>
      <BackGroungimage/>
      <div className="body-contener">
        <div className="filter-item-count">
          <h4>filter</h4>
          <Filter />
        </div>
        <div className="item-listing"> <NewProductListing/></div>
      </div>
    </div>
  )
}

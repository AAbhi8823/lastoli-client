import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashbord from '../Body/DashBord/Dashbord';
import NavBar from '../TopNavBar/NavBarItem/NavBar';
import Footer from '../Footer/Footer';
import ContactUs from '../TopNavBar/Pages/ContactUs';
import Address from '../Footer/Contect/Address';
import SocialMedia from '../Footer/Contect/SocialMedia';
import NewArrivals from '../Footer/Lastail/NewArrivals';
import OrderTracking from '../Footer/Lastail/OrderTracking';
import SavingSchemes from '../Footer/Lastail/SavingSchemes';
import Disclaimer from '../Footer/Information/Disclaimer';
import FAQ from '../Footer/Information/FAQ';
import PrivacyPolicy from '../Footer/Information/PrivacyPolicy';
import ReturnPolicy from '../Footer/Information/ReturnPolicy';
import ShippingPolicy from '../Footer/Information/ShippingPolicy';
import TermsOfUse from '../Footer/Information/TermsOfUse';
import BestSeller from '../TopNavBar/Pages/BestSeller';
import Woman from '../TopNavBar/Pages/Woman';
import Man from '../TopNavBar/Pages/Man';
import Silver from '../TopNavBar/Pages/Silver';
import Collection from '../TopNavBar/Pages/Collection';
import More from '../TopNavBar/Pages/More';
import SignIn from '../TopNavBar/LoginAndLogo/Login/SignIn';
import Wishlist from '../TopNavBar/ProductsListing/wishlist';
import Nomatch from '../Nomatch/Nomatch';
import AddToBag from '../TopNavBar/ProductsListing/AddToBag';
import DeliveryAddress from '../TopNavBar/ProductsListing/DeliveryAddress';
import ItemDetails from '../Body/ListIteam/ItemDetails';
import IteamPage1 from '../Body/ListIteam/ImagePages/IteamPage1';
import IteamPage2 from '../Body/ListIteam/ImagePages/IteamPage2';
import IteamPage3 from '../Body/ListIteam/ImagePages/IteamPage3';
import CustomerFavourite from '../Body/DashBord/DashBordPages/CustomerFavourite';
import ShopBycategory from '../Body/DashBord/DashBordPages/ShopBycategory';
import ShopBycollection from '../Body/DashBord/DashBordPages/ShopBycollection';
import ShopByOccasion from '../Body/DashBord/DashBordPages/ShopByOccasion';
import PromotionBanner from '../Body/DashBord/DashBordPages/PromotionBanner';
import OrderDetails from '../TopNavBar/SubMenu/OrderTracking'
import PaymentMethods from '../TopNavBar/ProductsListing/PaymentMethods'
import NewProductListing from '../TopNavBar/ProductsListing/NewProductListing';
import NewItemDetails from '../Body/ListIteam/NewItemDetails';
const routes = [
  { path: '/', element: <Dashbord /> },
  { path: '/SignIn', element: <SignIn /> },
  { path: '/Dashbord', element: <Dashbord /> },
  { path: '/ContactUs', element: <ContactUs /> },
  { path: '/Woman', element: <Woman /> },
  { path: '/Man', element: <Man /> },
  { path: '/Silver', element: <Silver /> },
  { path: '*', element: <Nomatch /> },
  { path: '/Dashbord/IteamPage1', element: <IteamPage1 /> },
  { path: '/Dashbord/IteamPage2', element: <IteamPage2 /> },
  { path: '/Dashbord/IteamPage3', element: <IteamPage3 /> },
  { path: '/ShopBycategory', element: <ShopBycategory /> },
  { path: '/ShopBycollection', element: <ShopBycollection /> },
  { path: '/ShopByOccasion', element: <ShopByOccasion /> },
  { path: '/CustomerFavourite', element: <CustomerFavourite /> },
  { path: '/PromotionBanner', element: <PromotionBanner /> },
  { path: '/Collection', element: <Collection /> },
  { path: '/More', element: <More /> },
  { path: '/wishlist', element: <Wishlist /> },
  { path: '/BestSeller', element: <BestSeller /> },
  { path: '/Address', element: <Address /> },
  { path: '/DeliveryAddress', element: <DeliveryAddress /> },
  { path: '/NewArrivals', element: <NewArrivals /> },
  { path: '/NewProductListing', element: <NewProductListing /> },
  { path: '/Pages/:title}', element: <NewArrivals /> },
  { path: '/OrderTracking', element: <OrderTracking /> },
  { path: '/SavingSchemes', element: <SavingSchemes /> },
  { path: '/FAQ', element: <FAQ /> },
  { path: '/item/:itemId', element: <ItemDetails /> },
  { path: '/PrivacyPolicy', element: <PrivacyPolicy /> },
  { path: '/ReturnPolicy', element: <ReturnPolicy /> },
  { path: '/ShippingPolicy', element: <ShippingPolicy /> },
  { path: '/TermsOfUse', element: <TermsOfUse /> },
  { path: '/Disclaimer', element: <Disclaimer /> },
  { path: '/AddToBag', element: <AddToBag /> },
  { path: '/OrderDetails', element: <OrderDetails /> },
  { path: '/PaymentMethods', element: <PaymentMethods /> },
  
];

export default function AppRouter() {
  return (
    <div>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

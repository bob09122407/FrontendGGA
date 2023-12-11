import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './component/Home/Home';
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/footer';
import UserOptions from './component/layout/Header/UserOptions';
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgetPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Stripepayment';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import ContactPage from './component/Contact/contact';
import { loadStripe } from '@stripe/stripe-js';
// import About from './component/About/about';
import axios from 'axios';
import { loadUser } from './actions/userAction';
import {Elements} from "@stripe/react-stripe-js";
import store from "./store";
import { BASE_URL } from './apiConfig';

function ProtectedRoute({ isAdmin, component: Component, ...rest }) {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null; // or any loading indicator if desired
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin === true && user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
}

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey]= useState("");

  async function getStripeApiKey(){
    // const {data} =await axios.get("/api/v1/stripeapikey");
    const {data} =await axios.get(`${BASE_URL}/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  }
  // const options = {
  //   mode: 'payment',
  //   currency: 'usd',
  //   amount: 1099,
  // };

  // useEffect(() => {
  //   // Load the Razorpay script dynamically
  //   const loadRazorpayScript = async () => {
  //     const script = document.createElement('script');
  //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //     script.async = true;
  //     script.onload = () => {
  //       // Razorpay script is loaded, you can initialize it here if needed
  //     };
  //     document.body.appendChild(script);
  //   };

  //   loadRazorpayScript();
  // }, []);

  useEffect(()=>{
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route exact path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route exact path="/me/update" element={<ProtectedRoute component={UpdateProfile} />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/update" element={<ProtectedRoute component={UpdatePassword} />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/cart" element={<Cart />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/shipping" element={<ProtectedRoute component={Shipping} />} />
        <Route exact path="/order/confirm" element={<ProtectedRoute component={ConfirmOrder} />} />
        <Route exact path="/success" element={<ProtectedRoute component={OrderSuccess} />} />
        <Route exact path="/orders" element={<ProtectedRoute component={MyOrders} />} />
        <Route exact path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
        {/* <Route exact path="/process/payment" element={<ProtectedRoute component={Payment} />} /> */}
        <Route
          exact
          path="/process/payment"
          element={
            
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute component={Payment} />
            </Elements>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

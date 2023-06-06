import './App.css';
import { useEffect,useState } from 'react';
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/footer.js"
import React from "react";
import WebFont from "webfontloader"
// import Loader from './component/layout/Loader/Loader';
import Home from "./component/Home/Home.js"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp.js"
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js"
import UpdateProfile from "./component/User/UpdateProfile.js" 
import UpdatePassword from "./component/User/UpdatePassword.js" 
import ForgotPassword from "./component/User/ForgetPassword.js" 
import ResetPassword from "./component/User/ResetPassword.js"
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment"
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import OrderSuccess from "./component/Cart/OrderSuccess";
import ContactPage from './component/Contact/contact';
import About from "./component/About/about"
// import ProtectedRoute from './component/Route/ProtectedRoute';
function ProtectedRoute({ isAdmin, component: Component, ...rest }) {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null; // or any loading indicator if desired
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
}

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey]= useState("");

  async function getStripeApiKey(){
    const {data} =await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
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
        {/* <Route exact path */}
                {/* <Route path="/profile" element={<Profile/>} /> */}
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/update" element={<ProtectedRoute component={UpdatePassword} />} />
        <Route exact path="/password/forgot" element={<ForgotPassword/>} />
        <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
        {/* <Route exact path="/password/reset" element={<ProtectedRoute component={ResetPassword} />} /> */}
        <Route exact path="/contact" element={<ContactPage/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/shipping" element={<ProtectedRoute component={Shipping} />} />
        <Route exact path="/order/confirm" element={<ProtectedRoute component={ConfirmOrder} />} />
        <Route exact path="/success" element={<ProtectedRoute component={OrderSuccess} />} />
        <Route exact path="/orders" element={<ProtectedRoute component={MyOrders} />} />
        <Route exact path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
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




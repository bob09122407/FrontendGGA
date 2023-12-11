import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  PaymentElement,
  ExpressCheckoutElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./stripepayment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { clearCart } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./../../apiConfig";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/payment/process`,
        paymentData
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;
      const {error} = await stripe.confirmPayment({
        elements,
        client_secret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });
  
      if (error) {
        // This point is only reached if there's an immediate error when
        // confirming the payment. Show the error to your customer (for example, payment details incomplete)
        handleError(error);
      } else {
        // Your customer is redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer is redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
     
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(
        error.response?.data?.message ||
          "An error occurred while processing payment"
      );
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <form onSubmit={submitHandler}>
      <PaymentElement />
      <button type="submit" ref={payBtn} disabled={!stripe || loading}>
        Submit Payment
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
    </Fragment>
  );
};

export default Payment;

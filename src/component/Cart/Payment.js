import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import axios from "axios";
import "./payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { clearCart } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../apiConfig";
const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const checkoutHandler = async (event) => {
    event.preventDefault();

    try {
      const { data: { key } } = await axios.get(`${BASE_URL}/api/v1/getkey`);
     
      const { data: { order } } = await axios.post(`/api/v1/checkout`, {
        amount: orderInfo.totalPrice,
        currency: "INR"
      });

      const options = {
        key,
        amount: order.amount.toString(),
        currency: order.currency,
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "",
        order_id: order.id,
        prefill: {
          name: user.name,
          email: user.email,
          contact: shippingInfo.phone
        },
        notes: {
          address: shippingInfo.address
        },
        theme: {
          color: "#121212"
        },
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;

            const order = {
              orderItems: cartItems,
              shippingInfo,
              itemsPrice: orderInfo.subtotal,
              taxPrice: orderInfo.tax,
              shippingPrice: orderInfo.shippingCharges,
              totalPrice: orderInfo.totalPrice,
              paymentInfo: {
                id: paymentId,
                status: "succeeded"
              }
            };

            // Make an API request to store the order details in the database
            // await axios.post("/api/orders", order);

            dispatch(createOrder(order));
            dispatch(clearCart());

            navigate("/success");
          } catch (error) {
            alert.error("An error occurred while processing the payment. Please try again.");
          }
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      alert.error("An error occurred while processing the payment. Please try again.");
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
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={checkoutHandler}>
          <Typography>Card Info</Typography>
          {/* Render your Razorpay payment form elements here */}
          {/* Example: */}
         
          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  )};

  export default Payment

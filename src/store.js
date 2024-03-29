import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  contactReducer
} from "./reducer/contactReducer";
import {
  productDetailsReducer,
  productReducer,
  newReviewReducer,

} from "./reducer/productReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,

} from "./reducer/userReducer";

import { cartReducer } from "./reducer/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducer/orderReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newReview: newReviewReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  contactCreate:contactReducer,
});

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems")
        ?JSON.parse(localStorage.getItem("cartItems"))
        :[],
      
        shippingInfo:localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        :{},
    }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

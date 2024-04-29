import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {fetchProduct} from "./Components/Product/ProductSlice"
import store from './store'
import { fetchCart } from "./Components/Cart/CartSlice";
import { fetchCategory } from "./Components/Category/CategorySlice";

store.dispatch(fetchProduct());
store.dispatch(fetchCart());
store.dispatch(fetchCategory());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

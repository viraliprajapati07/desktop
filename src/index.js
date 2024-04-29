// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store"
import {fetchProduct} from "./Components/Product/productSlice"
import {fetchCart} from "./Components/Cart/CartSlice"
import{fetchCategory} from "./Components/Category/CategorySlice"

store.dispatch(fetchProduct());
store.dispatch(fetchCart());
store.dispatch(fetchCategory());

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById("root")
);

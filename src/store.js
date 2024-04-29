import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Components/Product/productSlice";
import cartReducer from './Components/Cart/CartSlice'
import categoryReducer from './Components/Category/CategorySlice'

const store = configureStore ({
  reducer:{
    product : productReducer,
    cart : cartReducer,
    category : categoryReducer
  }
  })
export default store;
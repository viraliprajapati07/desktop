import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiToken = 123; 
const url=process.env.REACT_APP_API_URL;
export const fetchCart = createAsyncThunk("fetchCart", async () => {
  //  const response = await fetch("https://beta-admin.tashead.com/api/v1/cart/mycart", {
    const response = await fetch(`${url}v1/cart/mycart`,{
    method: "POST",
    headers: {
      apiToken: apiToken,
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      locale: "er",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Cart");
  }
  const data = await response.json();
  return data.result;
});
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    result: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default CartSlice.reducer;


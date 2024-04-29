import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiToken = 123;
export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
const response = await fetch("https://dev.tashead.com/api/v1/product", {
    method: "GET",
    headers: {
      apiToken : apiToken,
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      locale: "ar",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Product");
  }
  const data = await response.json();
  return data.result; 
});
const ProductSlice = createSlice({
  name: "product",
    initialState: {
    product_images : [],
    result: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default ProductSlice.reducer;

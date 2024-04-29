import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiToken = 123;
const url=process.env.REACT_APP_API_URL;
export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
//const response = await fetch("https://beta-admin.tashead.com/api/v1/categories/master", {
  const response = await fetch(`${url}v1/categories/master`,{
    method: "GET",
    headers: {
      apiToken : apiToken,
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      locale: "ar",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Category");
  }
  const data = await response.json();
  return data.result; 
});
const CategorySlice = createSlice({
  name: "category",
    initialState: {
    result: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default CategorySlice.reducer;

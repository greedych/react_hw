import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://quoteslate.vercel.app/api/quotes/random";

export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get(API);
      return responce.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default quoteSlice.reducer;

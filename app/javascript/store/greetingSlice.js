import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: null,
  isLoading: false,
  error: null,
};
const url = 'http://127.0.0.1:3000/api/v1/greeting';
export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return rejectWithValue('Unable to fetch data');
  }
});
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        const data = action.payload;
        console.log(data.message);
        return {
          ...state,
          greeting: data.message,
          isLoading: false,
        };
      })
      .addCase(fetchGreeting.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default greetingSlice.reducer;
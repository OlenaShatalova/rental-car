import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBrandsList } from '../../api/carsApi';

export const getBrandsList = createAsyncThunk(
  'filters/getBrandsList',
  async (_, thunkApi) => {
    try {
      const data = await fetchBrandsList();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById } from '../../api/carsApi';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, thunkApi) => {
    try {
      const data = await fetchCars(params);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarsById = createAsyncThunk(
  'cars/getCarsById',
  async (id, thunkApi) => {
    try {
      const data = await fetchCarById(id);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

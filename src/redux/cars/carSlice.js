import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';
import { handlePending, handleRejected } from '../../utils/statusHelper';

const INITIAL_STATE = {
  cars: null,
  totalCars: 0,
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    cleanCarsList: state => {
      state.cars = null;
      state.currentPage = 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (Number(payload.page) === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }

        state.totalCars = payload.totalCars;
        state.currentPage = Number(payload.page);
        state.totalPages = payload.totalPages;
      })
      .addCase(getCars.rejected, handleRejected),
});

export const { cleanCarsList } = carsSlice.actions;
export default carsSlice.reducer;

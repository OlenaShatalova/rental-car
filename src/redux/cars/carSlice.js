import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';
import { handlePending, handleRejected } from '../../utils/statusHelper';

const INITIAL_STATE = {
  cars: null,
  totalCars: 0,
  currentPage: '1',
  totalPages: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.page === '1') {
          state.cars = payload.cars;
        } else {
          const newCars = payload.cars.filter(
            newCar =>
              !state.cars.some(existingCar => existingCar.id === newCar.id)
          );
          state.cars = [...state.cars, ...newCars];
        }

        state.totalCars = payload.totalCars;
        state.currentPage = payload.page;
        state.totalPages = payload.totalPages;
      })
      .addCase(getCars.rejected, handleRejected),
});

export default carsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarsById } from './operations';

const INITIAL_STATE = {
  cars: null,
  isLoading: false,
  error: null,
  totalCars: 0,
  currentPage: 1,
  totalPages: 0,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;

        if (state.cars === null) {
          state.cars = action.payload.cars;
        } else {
          const newCars = action.payload.cars.filter(
            newCar =>
              !state.cars.some(existingCar => existingCar.id === newCar.id)
          );
          state.cars = [...state.cars, ...newCars];
        }
        state.totalCars = action.payload.totalCars;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default carsSlice.reducer;

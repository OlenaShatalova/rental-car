export const selectCars = state => state.cars.cars;

export const selectTotalPages = state => state.cars.totalPages;

export const selectCurrentPage = state => state.cars.currentPage;

export const selectIsCarsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

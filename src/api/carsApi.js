import axios from 'axios';

const carInstance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchCars = async params => {
  const { data } = await carInstance.get('/cars', { params });
  return data;
};

export const fetchCarById = async id => {
  const { data } = await carInstance.get(`/cars/${id}`);
  return data;
};

export const fetchBrandsList = async () => {
  const { data } = await carInstance.get('/brands');
  return data;
};

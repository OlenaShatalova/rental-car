import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/cars/selectors';

import { Grid } from '../Grid/Grid';
import { CarItem } from '../CarItem/CarItem';

import css from './CarsList.module.css';
import {
  selectFavorites,
  selectShowFavorites,
} from '../../redux/favorites/selectors';
import { selectFilters } from '../../redux/filters/selectors';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const showFavorites = useSelector(selectShowFavorites);
  const filters = useSelector(selectFilters);
  console.log(favorites);

  const cleanMileage = value => String(value).replace(/,/g, '');

  const filteredFavorites = favorites.filter(
    ({ brand, rentalPrice, mileage }) =>
      (!filters.brand || brand === filters.brand) &&
      (!filters.rentalPrice || rentalPrice <= filters.rentalPrice) &&
      (!filters.minMileage ||
        Number(mileage) >= Number(cleanMileage(filters.minMileage))) &&
      (!filters.maxMileage ||
        Number(mileage) <= Number(cleanMileage(filters.maxMileage)))
  );

  const filteredCars = showFavorites
    ? filteredFavorites
    : Array.isArray(cars)
    ? cars
    : [];

  /// треба змінити фільтрацію обраних
  return (
    <div className={css.list}>
      <Grid>
        {filteredCars.map(car => {
          return <CarItem key={car.id} car={car} />;
        })}
      </Grid>
    </div>
  );
};

export default CarsList;

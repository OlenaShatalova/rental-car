import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/cars/selectors';

import { Grid } from '../Grid/Grid';
import { CarItem } from '../CarItem/CarItem';

import css from './CarsList.module.css';
import {
  selectFavorites,
  selectShowFavorites,
} from '../../redux/favorites/selectors';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const showFavorites = useSelector(selectShowFavorites);

  // const filteredCars = showFavorites
  //   ? Array.isArray(cars)
  //     ? cars.filter(car => favorites.some(fav => fav.id === car.id))
  //     : []
  //   : Array.isArray(cars)
  //   ? cars
  //   : [];

  const filteredCars = showFavorites
    ? favorites
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

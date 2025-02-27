import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/cars/selectors';

import { Grid } from '../Grid/Grid';
import { CarItem } from '../CarItem/CarItem';

import css from './CarsList.module.css';

const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <div className={css.list}>
      <Grid>
        {Array.isArray(cars) &&
          cars.map(car => {
            return <CarItem key={car.id} car={car} />;
          })}
      </Grid>
    </div>
  );
};

export default CarsList;

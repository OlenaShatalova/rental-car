import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import {
  formatDistance,
  getCity,
  getCountry,
  upperFirst,
} from '../../utils/functions';

import css from './CarItem.module.css';

export const CarItem = ({ data }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = data;

  return (
    <li className={css.item}>
      <img src={img} alt={brand} className={css.img} />

      <div className={css.descr}>
        <div className={css.mainDetails}>
          <p className={css.name}>
            {brand}
            <span className={css.accent}> {model}</span>, {year}
          </p>
          <p className={css.price}>${rentalPrice}</p>
        </div>

        <div className={css.secDetails}>
          <span>{getCity(address)}</span>
          <span>{getCountry(address)}</span>
          <span>{rentalCompany}</span>
          <br />
          <span>{upperFirst(type)}</span>
          <span>{formatDistance(mileage)}</span>
        </div>
      </div>

      <Link to={`/catalog/${id}`} className={css.buttonLink}>
        <Button sx={{ width: '100%' }}>Read More</Button>
      </Link>
    </li>
  );
};

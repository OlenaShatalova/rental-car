import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

import {
  addFavorite,
  removeFavorite,
} from '../../redux/favorites/favoritesSlice.js';
import { selectFavorites } from '../../redux/favorites/selectors.js';

import { fillHeart, outlineHeart } from '../../assets/index';

import css from './FavoriteIcon.module.css';

const FavoriteIcon = ({ car, big }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite =
    Array.isArray(favorites) && favorites.some(fav => fav.id === car.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${css.heartBtn} ${big && css.bigHeartBtn}`}
      type="button"
    >
      {isFavorite ? (
        <ReactSVG src={fillHeart} />
      ) : (
        <ReactSVG src={outlineHeart} />
      )}
    </button>
  );
};

export default FavoriteIcon;

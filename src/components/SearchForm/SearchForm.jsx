import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  Box,
  Input,
} from '@mui/material';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

import { cleanCarsList } from '../../redux/cars/carSlice';
import { setFilters } from '../../redux/filters/filtersSlice';

import { getBrandsList } from '../../redux/filters/operations';
import {
  selectBrandsList,
  selectFilters,
  selectIsBrandsLoading,
  selectBrandsError,
} from '../../redux/filters/selectors';

import css from './SearchForm.module.css';

const SearchForm = () => {
  const reduxFilters = useSelector(selectFilters);
  const brandsList = useSelector(selectBrandsList);
  const isLoadingBrands = useSelector(selectIsBrandsLoading);
  const error = useSelector(selectBrandsError);

  const [selectedFilters, setSelectedFilters] = useState(reduxFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (brandsList.length === 0) {
      dispatch(getBrandsList());
    }
  }, [dispatch, brandsList.length]);

  const handleChange = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleMileageChange = (key, value) => {
    if (value === '' || (Number(value) > 0 && !isNaN(value))) {
      handleChange(key, value);
    }
  };

  const handleSearch = () => {
    dispatch(cleanCarsList());
    dispatch(setFilters(selectedFilters));
  };

  const renderSelect = (label, key, options, placeholder, width = '204px') => (
    <div style={{ width }} className={css.formDiv}>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        displayEmpty
        value={selectedFilters[key] || ''}
        onChange={e => handleChange(key, String(e.target.value))}
        renderValue={selected => (selected ? selected : placeholder)}
        fullWidth
        IconComponent={props => <Icon name="arrowUp" {...props} />}
        MenuProps={{ PaperProps: { [`data-select`]: key } }}
      >
        <MenuItem value="">All</MenuItem>
        {options.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );

  return (
    <div className={css.form}>
      {isLoadingBrands ? (
        <Loader />
      ) : error ? (
        <div className={css.error}>Error loading brands: {error}</div>
      ) : (
        <>{renderSelect('Car brand', 'brand', brandsList, 'Choose a brand')}</>
      )}

      {renderSelect(
        'Price/ 1 hour',
        'rentalPrice',
        Array.from({ length: 18 }, (_, i) => 30 + i * 10),
        'Choose a price',
        '196px'
      )}

      <div style={{ width: '320px' }} className={css.formDiv}>
        <InputLabel shrink>Car mileage / km</InputLabel>
        <Box className={css.inputContainer}>
          {['minMileage', 'maxMileage'].map(type => (
            <Input
              key={type}
              type="number"
              placeholder={type === 'minMileage' ? 'From' : 'To'}
              fullWidth
              value={selectedFilters[type]}
              onChange={e => handleMileageChange(type, e.target.value)}
              inputProps={{ min: 1 }}
            />
          ))}
        </Box>
      </div>

      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchForm;

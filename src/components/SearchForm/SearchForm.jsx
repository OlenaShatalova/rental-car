import { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  Box,
  Input,
} from '@mui/material';
import { fetchBrandsList } from '../../api/carsApi';
import css from './SearchForm.module.css';
import Icon from '../Icon/Icon';

const FILTERS = {
  brand: '',
  price: '',
  mileage: { min: null, max: null },
};

const SearchForm = () => {
  const [brandsList, setBrandsList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(FILTERS);

  useEffect(() => {
    (async () => setBrandsList(await fetchBrandsList()))();
  }, []);

  const handleChange = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleMileageChange = (e, type) => {
    const value = e.target.value ? Number(e.target.value) : null;
    if (value === null || value >= 0) {
      handleChange('mileage', { ...selectedFilters.mileage, [type]: value });
    }
  };

  const renderSelect = (label, key, options, placeholder) => (
    <div
      style={{ width: key === 'price' ? '196px' : '204px' }}
      className={css.formDiv}
    >
      <InputLabel shrink>{label}</InputLabel>
      <Select
        displayEmpty
        value={selectedFilters[key]}
        onChange={e => handleChange(key, e.target.value)}
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
      {renderSelect('Car brand', 'brand', brandsList, 'Choose a brand')}
      {renderSelect(
        'Price/ 1 hour',
        'price',
        Array.from({ length: 18 }, (_, i) => 30 + i * 10),
        'Choose a price'
      )}

      <div style={{ width: '320px' }} className={css.formDiv}>
        <InputLabel shrink>Car mileage / km</InputLabel>
        <Box className={css.inputContainer}>
          {['min', 'max'].map(type => (
            <Input
              key={type}
              type="number"
              placeholder={type === 'min' ? 'From' : 'To'}
              fullWidth
              value={selectedFilters.mileage[type] || ''}
              onChange={e => handleMileageChange(e, type)}
              inputProps={{ min: 0 }}
            />
          ))}
        </Box>
      </div>

      <Button onClick={() => console.log(selectedFilters)}>Search</Button>
    </div>
  );
};

export default SearchForm;

import { useEffect, useState } from 'react';

import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  Box,
  Input,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { fetchBrandsList } from '../../api/carsApi';

// import { setFilters } from '../../redux/filters/filtersSlice';
// import { arrowDown, arrowUp } from '../../assets/index';

import css from './SearchForm.module.css';

const SearchForm = () => {
  const [brandsList, setBrandsList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    price: '',
    mileage: { min: null, max: null },
  });
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadBrands = async () => {
      const res = await fetchBrandsList();
      console.log(res);
      setBrandsList(res);
    };
    loadBrands();
  }, []);

  const handleSearch = async () => {
    console.log(selectedFilters);
  };

  return (
    <div className={css.form}>
      <div style={{ width: '204px' }} className={css.formDiv}>
        <InputLabel shrink>Car brand</InputLabel>
        <Select
          displayEmpty
          value={selectedFilters.brand}
          onChange={e =>
            setSelectedFilters(prev => ({ ...prev, brand: e.target.value }))
          }
          renderValue={selected => (selected ? selected : 'Choose a brand')}
          fullWidth
          IconComponent={ExpandMoreIcon}
          MenuProps={{
            PaperProps: {
              'data-select': 'brand',
            },
          }}
        >
          <MenuItem value="">All</MenuItem>
          {brandsList.map((brand, i) => (
            <MenuItem key={i} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div style={{ width: '196px' }} className={css.formDiv}>
        <InputLabel shrink>Price/ 1 hour</InputLabel>
        <Select
          displayEmpty
          value={selectedFilters.price}
          onChange={e =>
            setSelectedFilters(prev => ({ ...prev, price: e.target.value }))
          }
          renderValue={selected =>
            selected ? `To $${selected}` : 'Choose a price'
          }
          fullWidth
          IconComponent={ExpandMoreIcon}
        >
          <MenuItem value="">All</MenuItem>
          {[...Array(18).keys()].map(i => {
            const price = 30 + i * 10;
            return (
              <MenuItem key={price} value={price}>
                {price}
              </MenuItem>
            );
          })}
        </Select>
      </div>

      <div style={{ width: '320px' }} className={css.formDiv}>
        <InputLabel shrink>Car mileage / km</InputLabel>
        <Box sx={{ display: 'flex' }}>
          <Input
            type="number"
            placeholder="From"
            fullWidth
            sx={{ borderBottom: '1px solid #8d929a', padding: '5px' }}
          />
          <Input
            type="number"
            placeholder="To"
            fullWidth
            sx={{ borderBottom: '1px solid #8d929a', padding: '5px' }}
          />
        </Box>
      </div>

      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchForm;

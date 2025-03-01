import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import { Button } from '@mui/material';

import { getCars } from '../../redux/cars/operations';

import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';

import css from './CatalogPage.module.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const cars = useSelector(selectCars);
  console.log(cars, currentPage);

  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (currentPage === '1') {
      const params = {
        page: 1,
        limit: 12,
        ...filters,
      };

      dispatch(getCars(params));
    }
  }, [dispatch, filters, currentPage]);

  const onLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = Number(currentPage) + 1;
      const params = {
        page: nextPage,
        limit: 12,
        ...filters,
      };

      dispatch(getCars(params));
    }
  };

  return (
    <main>
      <section className={css.section}>
        <Container>
          <SearchForm />
          <CarsList />

          {totalPages > currentPage && (
            <Button
              onClick={onLoadMore}
              sx={{
                color: 'var(--main)',
                border: '1px solid var(--button)',
                backgroundColor: 'transparent',
                '&:hover': {
                  border: '1px solid var(--button-hover)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              Load More
            </Button>
          )}
        </Container>
      </section>
    </main>
  );
}

export default CatalogPage;

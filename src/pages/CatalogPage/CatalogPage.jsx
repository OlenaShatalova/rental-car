import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import { Button } from '@mui/material';
import Loader from '../../components/Loader/Loader';

import { cleanCarsList } from '../../redux/cars/carSlice';
import { getCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectCurrentPage,
  selectError,
  selectIsCarsLoading,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';

import css from './CatalogPage.module.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);
  const isCarLoading = useSelector(selectIsCarsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(cleanCarsList());

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
      const nextPage = currentPage + 1;
      const params = {
        page: nextPage,
        limit: 12,
        ...filters,
      };

      dispatch(getCars(params));
    }
  };

  const renderError = () => {
    if (error) {
      return <div className={css.error}>Something went wrong: {error}</div>;
    }
    return null;
  };

  return (
    <main>
      <section className={css.section}>
        <Container>
          <SearchForm />
          {cars?.length === 0 && !isCarLoading && !error ? (
            <div className={css.noCars}>
              No cars found. Try adjusting your search criteria.
            </div>
          ) : (
            <CarsList />
          )}

          {renderError()}
          {isCarLoading && <Loader />}

          {totalPages > currentPage && !isCarLoading && !error && (
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

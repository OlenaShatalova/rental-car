import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarsList from '../../components/CarsList/CarsList';
import { Button } from '@mui/material';

import { getCars } from '../../redux/cars/operations';
import {
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/cars/selectors';

import css from './CatalogPage.module.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  // Обгортання loadCars в useCallback, щоб уникнути нескінченного циклу
  const loadCars = useCallback(
    page => {
      const params = {
        page,
        limit: 12, // Наприклад, можна додати параметри фільтрації та сортування
      };

      dispatch(getCars(params)); // передаємо page та інші параметри в getCars
    },
    [dispatch]
  );

  const onLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = Number(currentPage) + 1;

      loadCars(nextPage);
    }
  };

  useEffect(() => {
    loadCars(currentPage); // при завантаженні сторінки, завантажуємо автомобілі

    // const loadCars = async () => {
    //   try {
    //     const data = await getCars();
    //     dispatch(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // loadCars();
  }, [dispatch, currentPage, loadCars]);

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

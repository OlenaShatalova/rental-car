import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
import { Button } from '@mui/material';

import css from './HomePage.module.css';

function HomePage() {
  return (
    <main className={css.home}>
      <Container className={css.flex}>
        <div className={css.content}>
          <h1>Find your perfect rental car</h1>
          <p>Reliable and budget-friendly rentals for any journey</p>
          <Link to="/catalog" className={css.buttonLink}>
            <Button sx={{ width: '276px' }}>View Catalog</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default HomePage;

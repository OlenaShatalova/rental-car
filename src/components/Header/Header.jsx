import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ReactSVG } from 'react-svg';

import Container from '../Container/Container';

import logo from '../../assets/logoName.svg';

import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isAnyNavLinkActive = ['/', '/catalog'].includes(location.pathname);

  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && isAnyNavLinkActive && css.active);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerLine}>
          <Link to="/">
            <ReactSVG src={logo} className={css.logo} />
          </Link>

          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink to="/" className={buildCssClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/catalog" className={buildCssClasses}>
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

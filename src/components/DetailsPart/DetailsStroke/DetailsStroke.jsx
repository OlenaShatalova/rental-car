import { ReactSVG } from 'react-svg';

import checkCircle from '../../../assets/check-circle.svg';

import css from './DetailsStroke.module.css';

const DetailsStroke = ({ icon, text }) => {
  return (
    <li className={css.detailsStroke}>
      <ReactSVG src={icon || checkCircle} className={css.icon} />
      <p>{text}</p>
    </li>
  );
};

export default DetailsStroke;

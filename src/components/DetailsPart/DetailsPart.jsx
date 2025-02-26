import css from './DetailsPart.module.css';

const DetailsPart = ({ title, children }) => {
  return (
    <div className={css.block}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>{children}</ul>
    </div>
  );
};

export default DetailsPart;

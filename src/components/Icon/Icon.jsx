const Icon = ({ name, width = 13, height = 13, className, ...rest }) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      width={width}
      height={height}
      alt={name}
      className={className}
      {...rest}
    />
  );
};

export default Icon;

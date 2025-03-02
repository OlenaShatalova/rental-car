export const getCity = address => {
  const parts = address.split(', ');
  return parts.length > 1 ? parts[1] : null;
};

export const getCountry = address => {
  const parts = address.split(', ');
  return parts.length > 2 ? parts[2] : null;
};

export const formatDistance = number => {
  return new Intl.NumberFormat('uk-UA').format(number) + ' km';
};

export const formatNumberWithCommas = value => {
  if (!value) return value;
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatMileageInput = value => {
  return value.replace(/[^\d]/g, '');
};

export const hasNextPage = (currentPage, totalPages) => {
  return currentPage < totalPages;
};

export const getShortId = str => {
  return `id: ${str.slice(0, 4)}`;
};

export const upperFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

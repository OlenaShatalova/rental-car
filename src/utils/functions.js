export const getCity = address => {
  const parts = address.split(', ');
  return parts.length > 1 ? parts[1] : null;
};

export const getCountry = address => {
  const parts = address.split(', ');
  return parts.length > 2 ? parts[2] : null;
};

export const formatDistance = number => {
  return new Intl.NumberFormat('fr-FR').format(number) + ' km';
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

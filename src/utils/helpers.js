export const formatPrice = (price) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const getUniqueValues = (products, text) => {
  return ['all', ...new Set(products.map((product) => product[text]))];
};

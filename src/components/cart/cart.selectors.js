export const selectProductsCount = (reducer) => {
  return reducer.cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const selectTotalPrice = (reducer) => {
  return reducer.cart.products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
};

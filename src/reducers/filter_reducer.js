import {
  GET_PRODUCTS,
  HANDLE_SORT,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions/filter_actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      console.log(maxPrice);

      return {
        ...state,
        filtered_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case HANDLE_SORT:
      const { sort, filtered_products } = state;
      // We can leave this array empty but in case if we run out of products we can display smt on the screen.
      let tempProducts = [...filtered_products];
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProducts = filtered_products.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        tempProducts = filtered_products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (sort === 'name-z') {
        tempProducts = filtered_products.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case FILTER_PRODUCTS:
      console.log('filterin');
      const { all_products } = state;
      const { search, category, price } = state.filters;
      let tempPro = [...all_products];
      if (search) {
        tempPro = tempPro.filter((product) => {
          return product.title.toLowerCase().startsWith(search.toLowerCase());
        });
      }
      if (category !== 'all') {
        tempPro = tempPro.filter(
          (product) => product.category.toLowerCase() === category
        );
      }
      tempPro = tempPro.filter((product) => product.price <= price);
      return { ...state, filtered_products: tempPro };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: '',
          category: 'all',
          price: state.filters.max_price,
        },
      };
    default:
      throw new Error(
        `The action you want to utilize ${action.type} could not find.`
      );
  }
};

import React, { useContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducers/filter_reducer';
import {
  GET_PRODUCTS,
  UPDATE_SORT,
  HANDLE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions/filter_actions';
import { useProductsContext } from './products_context';

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: 'price-lowest',
  filters: {
    search: '',
    category: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // UPDATE SORTS
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // UPDATE FILTERS
  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.innerText.toLowerCase();
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  // CLEAR FILTERS
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: HANDLE_SORT });
  }, [products, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };

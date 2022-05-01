import React, { useContext, useReducer, useEffect } from 'react';
import {
  ADD_TO_CART,
  CALCULATE_AMOUNT_AND_ITEM,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from '../actions/cart_actions';
import { reducer } from '../reducers/cart_reducer';

// GET ITEMS

const getLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping: 456,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { amount, product } });
  };

  // TOGGLE AMOUNT
  const toggleAmount = (id, val) => {
    console.log(id, val);
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, val } });
  };

  // REMOVE ITEM
  const removeProduct = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  // CLEAR CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: CALCULATE_AMOUNT_AND_ITEM });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeProduct, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

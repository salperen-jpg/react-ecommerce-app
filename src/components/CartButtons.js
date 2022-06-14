import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/card_context';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
const CartButtons = () => {
  const { total_items } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <aside className='cart-button-container'>
      <Link to='/cart' className='basket-container' onClick={closeSidebar}>
        <FaShoppingCart className='cart-icon' />
        <div className='amount-container'>
          <span>{total_items}</span>
        </div>
      </Link>
      {myUser ? (
        <button
          className='log-btn btn'
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button className='log-btn btn' onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </aside>
  );
};

export default CartButtons;

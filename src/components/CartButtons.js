import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/card_context';

const CartButtons = () => {
  const { total_items } = useCartContext();
  return (
    <aside className='cart-button-container'>
      <Link to='/checkout' className='basket-container'>
        <FaShoppingCart className='cart-icon' />
        <div className='amount-container'>
          <span>{total_items}</span>
        </div>
      </Link>
      <button className='log-btn btn'>Login</button>
    </aside>
  );
};

export default CartButtons;

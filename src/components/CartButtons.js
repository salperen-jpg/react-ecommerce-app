import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartButtons = () => {
  return (
    <aside className='cart-container'>
      <Link to='/checkout' className='basket-container'>
        <FaShoppingCart className='cart-icon' />
        <div className='amount-container'>
          <span>2</span>
        </div>
      </Link>
    </aside>
  );
};

export default CartButtons;

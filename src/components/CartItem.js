import React from 'react';
import '../styles/cartitem.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import { useCartContext } from '../context/card_context';

const CartItem = ({ id, amount, price, image, title }) => {
  const { removeProduct, toggleAmount } = useCartContext();
  return (
    <section className='single-item'>
      <div className='single-item-container'>
        <img src={image} alt='' />
      </div>
      <div className='small-info'>
        <span>{title.substring(0, 12)}</span>
        <span className='small-price'>{(price * amount).toFixed(2)}</span>
      </div>

      <span className='big-title'>{title}</span>
      <span className='cart-btn-container'>
        <button
          className='btn amount-btn'
          onClick={() => toggleAmount(id, 'inc')}
        >
          <FaPlus />
        </button>
        {amount}
        <button
          className='btn amount-btn'
          onClick={() => toggleAmount(id, 'dec')}
        >
          <FaMinus />
        </button>
      </span>
      <span className='big-price'>{(price * amount).toFixed(2)}</span>
      <span>
        <button className='delete-btn' onClick={() => removeProduct(id)}>
          <BsFillTrashFill />
        </button>
      </span>
    </section>
  );
};

export default CartItem;

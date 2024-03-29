import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/addtocart.scss';
import { useCartContext } from '../context/card_context';

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const increaseAmount = () => {
    setAmount((oldState) => {
      return oldState + 1;
    });
  };
  const decreaseAmount = () => {
    setAmount((oldState) => {
      let value = oldState - 1;
      if (value === 0) {
        return 1;
      }
      return value;
    });
  };

  return (
    <section className='add-to-cart'>
      <div className='amount-sec'>
        <button
          type='button'
          className='btn amount-btn'
          onClick={decreaseAmount}
        >
          <FaMinus />
        </button>
        <span>{amount}</span>
        <button
          type='button'
          className='btn amount-btn'
          onClick={increaseAmount}
        >
          <FaPlus />
        </button>
      </div>
      <Link
        to='/checkout'
        className='btn add-btn'
        onClick={() => {
          addToCart(amount, product);
        }}
      >
        Add to Cart
      </Link>
    </section>
  );
};

export default AddToCart;

import React from 'react';
import { useCartContext } from '../context/card_context';
import { formatPrice } from '../utils/helpers';
import '../styles/carttotal.scss';

const CartTotal = () => {
  const { total_amount, shipping } = useCartContext();
  return (
    <section className='cart_total'>
      <p>
        <span className='att'>Total Cost :</span>
        <span>{formatPrice(total_amount)}</span>
      </p>
      <p>
        <span className='att'>Shipping :</span>
        <span>{formatPrice(shipping / 100)}</span>
      </p>
      <hr />
      <p>
        <span className='att'>Order Total :</span>
        <span>{formatPrice(total_amount + shipping / 100)}</span>
      </p>
    </section>
  );
};

export default CartTotal;

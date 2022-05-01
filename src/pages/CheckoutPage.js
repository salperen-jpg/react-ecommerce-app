import React from 'react';
import { CartItem, CartTotal, PageTitle } from '../components';
import { useCartContext } from '../context/card_context';
import '../styles/cartitem.scss';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length < 1) {
    return (
      <aside className='empty-container '>
        <h1>Your cart is currently empty</h1>
      </aside>
    );
  }

  return (
    <section className='chekout-page'>
      <PageTitle title='Checkout' />
      <div className='section section-center page-with-title '>
        <div className='headers single-item'>
          <span>Image</span>
          <span>title</span>
          <span>amount</span>
          <span>price</span>
          <span>delete</span>
        </div>
        <hr className='hr-big' />
        <div className='card-items-container'>
          {cart.map((single, index) => {
            console.log(single);
            return <CartItem key={index} {...single} />;
          })}
        </div>
        <hr />
        <div className='cart-footer'>
          <div className='checkout-btn-container'>
            <Link to='/products' className='btn'>
              Go to products
            </Link>
            <button className='btn clear-btn' onClick={clearCart}>
              Clear items
            </button>
          </div>
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;

import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import '../styles/shared/navbar.scss';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>
            <Link to='/'>
              take<span>All</span>
            </Link>
          </h3>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaHamburger />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link className='nav-link' to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link className='nav-link' to={'/checkout'}>
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;

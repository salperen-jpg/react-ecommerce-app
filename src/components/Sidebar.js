import React from 'react';
import { links } from '../utils/constants';
import { useProductsContext } from '../context/products_context';
import '../styles/shared/sidebar.scss';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}`}>
      <div className='sidebar-wrapper'>
        <button className='close-btn' onClick={closeSidebar}>
          <MdClose />
        </button>
        <ul className='sidebar-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link className='sidebar-link' to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link className='sidebar-link' to={'/checkout'}>
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <div className='sidebar-buttons'>
          <CartButtons />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

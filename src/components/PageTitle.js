import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared/pageTitle.scss';

const PageTitle = ({ title, product }) => {
  return (
    <section className='page-title'>
      <div className='page-title-container section-center'>
        <h3>
          <Link to='/'> Home </Link>
          {product && (
            <Link className='title-product' to='/products'>
              /Products
            </Link>
          )}
          / {title?.substring(0, 20)}
        </h3>
      </div>
    </section>
  );
};

export default PageTitle;

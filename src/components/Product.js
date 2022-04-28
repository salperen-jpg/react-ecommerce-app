import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/homeproducts.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
const Product = ({ id, title, price, image }) => {
  return (
    <article className='product'>
      <div className='product-image-container'>
        <img src={image} className='product-img' alt='product img' />
        <Link to={`/products/${id}`}>
          <span className='product-icon'>
            <FaSearch />
          </span>
        </Link>
      </div>
      <div className='product-footer'>
        <span>{title.substring(0, 25)}</span>
        <span className='price'>{formatPrice(price)}</span>
      </div>
    </article>
  );
};

export default Product;

import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/errorImg.svg';
import '../styles/error.scss';

const ErrorPage = () => {
  return (
    <section className='error-container'>
      <div className='error-content'>
        <img src={errorImg} alt='' />
        <Link className='btn' to='/'>
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

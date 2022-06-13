import React from 'react';
import her1 from '../assets/hero-1.jpg';

import { Link } from 'react-router-dom';
import '../styles/homehero.scss';

const HomeHero = () => {
  return (
    <section className='section-center home-hero'>
      <div className='hero-img-container'>
        <img className='hero-img' src={her1} alt='hero' />
        <img className='hero-img' src={her1} alt='hero' />
        <img className='hero-img' src={her1} alt='hero' />
        <img className='hero-img' src={her1} alt='hero' />
      </div>
      <div className='hero-info'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos fugiat non laborum laboriosam odit, optio unde ad, eius
          ipsa illum harum cumque vero iusto?
        </p>
        <Link className='btn hero-btn' to='/products'>
          See Products
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;

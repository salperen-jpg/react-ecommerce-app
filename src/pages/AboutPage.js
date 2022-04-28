import React from 'react';
import PageTitle from '../components/PageTitle';
import aboutImg from '../assets/about2.jpg';
import '../styles/about.scss';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <PageTitle title={'about'} />
      <section className='page-with-title'>
        <div className='about-container section section-center '>
          <img src={aboutImg} className='about-img' alt='about img' />
          <div className='about-info'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
              dolorum? Ipsum distinctio voluptas hic, sapiente labore quod,
              doloremque libero voluptates nisi nesciunt architecto veniam,
              corrupti ipsam animi tempore quo consequatur.
            </p>
            <Link className='btn about-btn' to='/products'>
              Start shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

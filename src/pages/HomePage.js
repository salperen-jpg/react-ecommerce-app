import React from 'react';
import { HomeFeatures, HomeHero } from '../components';
import HomeProducts from '../components/HomeProducts';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeProducts />
    </>
  );
};

export default HomePage;

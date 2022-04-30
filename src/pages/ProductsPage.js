import React from 'react';
import { Filters, PageTitle, Products, Sorting } from '../components';

import '../styles/productspage.scss';
const ProductsPage = () => {
  return (
    <main>
      <PageTitle title={'Products'} />

      <div className='section section-center page-with-title products-container'>
        <Filters />
        <div>
          <Sorting />
          <Products />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;

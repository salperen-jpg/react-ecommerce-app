import React from 'react';
import { useFilterContext } from '../context/filter_context';
import Product from './Product';
import '../styles/products.scss';
import '../styles/homeproducts.scss';

const Products = () => {
  const { filtered_products } = useFilterContext();

  return (
    <section className='products home-products-center'>
      {filtered_products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
};

export default Products;

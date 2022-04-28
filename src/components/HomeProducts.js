import React from 'react';
import { useProductsContext } from '../context/products_context';
import Loading from './Loading';
import Error from './Error';
import Product from './Product';

const HomeProducts = () => {
  const {
    products,
    isProductsLoading: loading,
    isProductsError: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <article className='home-products'>
        <div className='title'>
          <h2>Most Viewed Products</h2>
          <div className='underline'></div>
        </div>
        <section className='section section-center home-products-center'>
          {products.slice(9, 12).map((product) => {
            return <Product {...product} key={product.id} />;
          })}
        </section>
      </article>
    </>
  );
};

export default HomeProducts;

import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Loading, Error, PageTitle, Stars, AddToCart } from '../components';
import { useProductsContext } from '../context/products_context';
import { all_products } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import '../styles/singlepage.scss';

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);

  const {
    isSingleProductLoading: loading,
    isSingleProductError: error,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();
  console.log(singleProduct);

  useEffect(() => {
    fetchSingleProduct(`${all_products}/${id}`);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    id: sdk,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = singleProduct;
  return (
    <>
      <PageTitle title={title} product />
      <section className='section section-center page-with-title single-product-container'>
        <img src={image} alt={title} className='single-product-image' />
        <div className='single-product-info'>
          <h3>{title?.substring(0, 20)}</h3>
          {/* STARSPART */}
          <Stars {...rating} />
          <span className='price'>{formatPrice(price)}</span>
          <span className='cat'>
            Product id : <span className='attribute'> {sdk}</span>
          </span>
          <span className='cat'>
            Category : <span className='attribute'> {category}</span>
          </span>

          <p className='single-exp'>{description}</p>
          <hr />
          <AddToCart product={singleProduct} />
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;

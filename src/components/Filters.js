import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { formatPrice, getUniqueValues } from '../utils/helpers';
import '../styles/filters.scss';

const Filters = () => {
  const {
    filters: { search, category, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');

  return (
    <section className='filters'>
      {/* BY SEARCH */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <input
            type='text'
            className='form-input'
            placeholder='Search for item...'
            value={search}
            name='search'
            onChange={updateFilters}
          />
        </div>
        <div className='form-control'>
          <span>Category</span>
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                type='button'
                name='category'
                className={
                  c === category ? 'btn filter-btn active' : 'btn filter-btn'
                }
                onClick={updateFilters}
              >
                {c}
              </button>
            );
          })}
        </div>
        <div className='form-control'>
          <span>Price</span>
          <p className='filter-price'>{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
        <div className='form-control'>
          <button
            type='button'
            className='btn clear-btn'
            onClick={clearFilters}
          >
            reset filters
          </button>
        </div>
      </form>
    </section>
  );
};
export default Filters;

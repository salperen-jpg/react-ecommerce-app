import React from 'react';
import { useFilterContext } from '../context/filter_context';
import '../styles/sort.scss';
const Sorting = () => {
  const { filtered_products, updateSort, sort } = useFilterContext();
  return (
    <section className='sorting'>
      <p>{filtered_products.length} products listed</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort by</label>
        <select name='sort' id='sort' value={sort} onChange={updateSort}>
          <option value='price-lowest'>Lowest Price</option>
          <option value='price-highest'>Highest Price</option>
          <option value='name-a'>by name A-Z</option>
          <option value='name-z'>by name Z-A</option>
        </select>
      </form>
    </section>
  );
};

export default Sorting;

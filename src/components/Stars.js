import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import '../styles/stars.scss';
const Stars = ({ rate, count }) => {
  console.log(rate, count);
  return (
    <article className='stars-container'>
      <div className='star-part'>
        {/* STAR STARTS */}
        <span>
          {rate >= 1 ? (
            <BsStarFill />
          ) : rate >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* STAR ENDS */}
        {/* STAR STARTS */}
        <span>
          {rate >= 2 ? (
            <BsStarFill />
          ) : rate >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* STAR ENDS */}
        {/* STAR STARTS */}
        <span>
          {rate >= 3 ? (
            <BsStarFill />
          ) : rate >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* STAR ENDS */}
        {/* STAR STARTS */}
        <span>
          {rate >= 4 ? (
            <BsStarFill />
          ) : rate >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* STAR ENDS */}
        {/* STAR STARTS */}
        <span>
          {rate === 5 ? (
            <BsStarFill />
          ) : rate >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* STAR ENDS */}
      </div>
      <p>({count} customer reviews.)</p>
    </article>
  );
};

export default Stars;

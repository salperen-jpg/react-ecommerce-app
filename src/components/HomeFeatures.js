import React from 'react';
import { features } from '../utils/constants';
import '../styles/homefeatures.scss';

const HomeFeatures = () => {
  return (
    <section className='section features '>
      <div className='section-center features-grid'>
        {features.map((feature) => {
          const { id, text, icon, name } = feature;
          return (
            <article key={id} className='single-feature'>
              <span className='feature-icon'>{icon}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;

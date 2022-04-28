import React from 'react';
import { TiTick } from 'react-icons/ti';
import { FaPercent, FaShippingFast } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const features = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolorum.',
    icon: <TiTick />,
    name: 'Safe Shopping',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolorum.',
    icon: <FaPercent />,
    name: 'Crazy Discounts',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolorum.',
    icon: <FaShippingFast />,
    name: 'Fast Shipping',
  },
];

// API URLS

export const all_products = 'https://fakestoreapi.com/products';

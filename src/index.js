import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './userContex';
const products = [
  { name: "olma", price: 2000, inStock: true },
  { name: "anor", price: 4000, inStock: true },
  { name: "banan", price: 25000, inStock: false },
  { name: "olcha", price: 5000, inStock: true },
  { name: "o'rik", price: 10000, inStock: true },
  { name: "apilsin", price: 20000, inStock: false },
];
ReactDOM.render(
  <UserProvider value={products}>
    <App />
  </UserProvider>,
  document.getElementById('root'));

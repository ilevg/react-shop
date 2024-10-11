import React, { Suspense } from 'react';

const Shop = React.lazy(() => import('../pages/shop/Shop.jsx'));
const Home = React.lazy(() => import('../pages/home/Home.jsx'));
const About = React.lazy(() => import('../pages/About.jsx'));
const Contact = React.lazy(() => import('../pages/Contact.jsx'));
const SingleProduct = React.lazy(() => import('../pages/shop/SingleProduct.jsx'));
const CartPage = React.lazy(() => import('../pages/shop/CartPage.jsx'));

export const routes = [
  {path: '/', element: <Home/>, exact: true},
  {path: '/shop', element: <Shop/>, exact: true},
  {path: '/shop/:id', element: <SingleProduct />, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '/contact', element: <Contact/>, exact: true},
  {path: '/cart-page', element: <CartPage/>, exact: true},
]
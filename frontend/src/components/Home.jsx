import React, { useEffect } from 'react';
import MetaData from './Layouts/MetaData';
import Product from './Product/Product';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <MetaData title={'Best Online Shop in T&T'} />
          <h1 id='products_heading'>Latest Products</h1>

          <section id='products' className='container mt-5'>
            <div className='row'>
              {products &&
                products.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;

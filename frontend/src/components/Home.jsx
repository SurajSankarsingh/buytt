import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import MetaData from './Layouts/MetaData';
import Product from './Product/Product';
import Loader from './Layouts/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useAlert } from 'react-alert';

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, productsCount, error, resPerPage } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, error, alert, currentPage, keyword]);

  function setCurrentPageNum(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {loading ? (
        <Loader />
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

          {resPerPage <= productsCount && (
            <div className='d-flex justify-content-center mt-5'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNum}
                nextPageText={'Next'}
                prevPageText={'Prev'}
                firstPageText={'First'}
                lastPageText={'Last'}
                itemClass='page-item'
                linkClass='page-link'
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;

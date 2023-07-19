import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomeScreen.css';
// Components
import Product from '../components/Product';
import Gallery from '../components/Gallery';
// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleShopNowClick = () => {
   
    history.push('/');
  };

  return (
    <div>
      <div className="banner-container">
        <img src={require('../assets/banner.png').default} alt="Slide 1" className="banner" />
        <button className="shop-now-button" onClick={handleShopNowClick}>
          SHOP NOW
        </button>
      </div>

      <Gallery/>




      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
            key={product._id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
            name={product.name}
            id={product._id} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;


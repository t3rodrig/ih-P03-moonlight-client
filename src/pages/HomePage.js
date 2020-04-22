import React, {Fragment} from 'react';
import Jumbotron from '../components/Jumbotron';
import ProductGrid from "../components/products/ProductGrid";

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      <ProductGrid />
    </Fragment>
  );
};

export default Home;
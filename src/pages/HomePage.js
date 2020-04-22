import React, {Fragment} from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import ProductGrid from "../components/products/ProductGrid";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Jumbotron />
      <ProductGrid />
      <Footer />
    </Fragment>
  );
};

export default Home;
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ProductService from '../../services/product-service';

import ProductThumbnail from './ProductThumbnail';
// import products from './products.json';

class ProductGrid extends Component {
  constructor() {
    super();
    this.state = { listOfProducts: [] };
    this.service = new ProductService();
  }

  fetchProducts = () => {
    if (this.state.listOfProducts.length === 0) {
      this.service.getAllProducts()
      .then(response => {
        this.setState({listOfProducts: response});
      })
      .catch(err => this.setState({listOfProducts: []}));
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const listOfProducts = this.state.listOfProducts;
    return (
      <section id="products">
        <div className="row">
          { listOfProducts.map((eachProduct) => {
            return (
              <div className="col-lg-4" key={eachProduct._id}>
                <ProductThumbnail product={eachProduct}/>
              </div>
            )
          }) }
        </div>
      </section>
    );
  }
}

export default ProductGrid;
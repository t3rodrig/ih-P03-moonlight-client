import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import ProductThumbnail from './ProductThumbnail';
import products from './products.json';

class ProductGrid extends Component {
  constructor() {
    super();
    this.state = { listOfProducts: products};
  }

  render() {
    const listOfProducts = this.state.listOfProducts;
    return (
      <section id="products">
        <div className="row">
          { listOfProducts.map((eachProduct) => {
            return (
              <div className="col-md-4" key={eachProduct._id}>
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
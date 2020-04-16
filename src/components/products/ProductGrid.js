import React, { Component } from 'react';
import ProductService from '../../services/product-service';
import ProductThumbnail from './ProductThumbnail';

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
        if (response){
          this.setState({listOfProducts: response});
        } else {
          console.log('Something wrong with the request'); 
          this.setState({listOfProducts: []})
        }
      })
      .catch(err => this.setState({listOfProducts: []}));
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render = () => {
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
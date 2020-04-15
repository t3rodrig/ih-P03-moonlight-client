import React from 'react';
import ProductDetails from '../components/products/ProductDetails';

const ProductPage = (props) => {
  const { params } = props.match;
  return (
    <section id="product-section">
      <div className="row">
        <div className="col-md-8">
          <ProductDetails params={params} />
        </div>
        <div className="col-md-4">
          <div className ="list-group">
            <a href="#" className="list-group-item list-group-item-action">Category One</a>
            <a href="#" className="list-group-item list-group-item-action">Category Two</a>
            <a href="#" className="list-group-item list-group-item-action">Category Three</a>
            <a href="#" className="list-group-item list-group-item-action">Category Four</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
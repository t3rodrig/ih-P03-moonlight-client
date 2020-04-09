import React from 'react';

const ProductPage = () => {
  return (
    <section id="product-section">
      <div className="row">
        <div className="col-md-8">
          <span>PRODUCT</span>
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
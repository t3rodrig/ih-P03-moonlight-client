import React from 'react';

const ProductThumbnail = (props) => {
  const { product } = props;
  return (
    <div className="thumbnail">
      <img src={product.imageURL} alt="Product" className="product-image"/>
      <div className="caption">
        <h5 className="float-right">
          {`$${product.price}`}
        </h5>
        <h5>{product.name}</h5>
      </div>
      <div className="ratings">
        <p className="float-right">4 Reviews</p>
        <p>
          <img src="/images/star-fill.svg" alt="" className="star"/>
        </p>
      </div>
    </div>
  );
};

export default ProductThumbnail;
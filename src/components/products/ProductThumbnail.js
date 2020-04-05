import React from 'react';

const ProductThumbnail = (props) => {
  const { product } = props;
  return (
    <div className="thumbnail">
      <img src={product.imageURL} alt="Product" className="thumbnail"/>
      <div className="caption">
        <h4 className="pull-right">
          {`$${product.price}`}
        </h4>
        <h4>{product.name}</h4>
      </div>
      <div className="ratings">
        <p className="pull-right">4 Reviews</p>
        <p>
        <img src="/images/star-fill.svg" alt="" className="star"/>
        </p>
      </div>
    </div>
  );
};

export default ProductThumbnail;
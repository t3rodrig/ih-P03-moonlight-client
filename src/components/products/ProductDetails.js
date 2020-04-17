import React, { Fragment, Component } from 'react';
import ProductService from '../../services/product-service';
// import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { singleProduct: {} };
    this.service = new ProductService();
  }

  fetchSingleProduct = () => {
    const obj = this.state.singleProduct;
    let id = this.props.params.id
    if (JSON.stringify(obj) === '{}') {
      this.service.getSingleProduct(id)
      .then(response => {
        this.setState({singleProduct: response});
      })
      .catch(err => this.setState({singleProduct: {}}));
    }
  }

  componentDidMount() {
    this.fetchSingleProduct();
  }

  render = () => {
    const product = this.state.singleProduct;
    return (
    <Fragment>
      <div className="row">
        <div className="col-md-4">
          <img className="main-img" src={product.imageURL} />
        </div>
        <div className="col-md-8">
          <h2>{product.name}</h2>
          <p className="price">{`$${product.price}`}</p>
          <hr />

          <p>
            Quanity:
            <select name="quantity" id="product-quantity" className="form-control">
              <option value="1" selected="selected">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <a href="#" className="btn btn-success">Add to Cart</a>
          <br/>
          <br/>
          <br/>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Description
                  </button>
                </h2>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Specifications
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  {product.specifications}
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </Fragment>
    );
  }
}

export default ProductDetails;
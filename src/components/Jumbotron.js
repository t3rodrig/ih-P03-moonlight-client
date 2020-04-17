import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <div id="jumbotron" className="jumbotron">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="true">Featured Item</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="best-tab" data-toggle="tab" href="#best" role="tab" aria-controls="best" aria-selected="false">Best Seller</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="gift-tab" data-toggle="tab" href="#gift" role="tab" aria-controls="gift" aria-selected="false">Gift Idea</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
          <div className="tab-text">
            <h2>Apple iPhone 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
            <Link to="/product/5e99fa391e3ec53bd9e21c87" className="btn btn-light" >Read More</Link>
          </div>
          <img className="slide-img" src="/images/iphone.png"/>          
        </div>
        <div className="tab-pane fade" id="best" role="tabpanel" aria-labelledby="best-tab">
          <div className="tab-text">
            <h2>Xbox One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
            <Link to="/product/5e99fa391e3ec53bd9e21c82" className="btn btn-light" >Read More</Link>
          </div>
          <img className="slide-img" src="/images/xbox.png"/>
        </div>
        <div className="tab-pane fade" id="gift" role="tabpanel" aria-labelledby="gift-tab">
          <div className="tab-text">
            <h2>Vizio Smart TV</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
            <Link to="/product/5e99fa391e3ec53bd9e21c85" className="btn btn-light" >Read More</Link>
          </div>
          <img className="slide-img" src="/images/tv.png"/>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
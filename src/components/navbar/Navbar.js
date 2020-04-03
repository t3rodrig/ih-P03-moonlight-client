import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{"backgroundColor": "#563d7c"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Whats New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Specials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Account</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
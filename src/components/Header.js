import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosLogIn, IoMdCart, IoIosLogOut } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <h1 className="logo"><img src="/images/tag.svg" alt="" width="36" height="36" title="tag"/><span>Moonlight</span></h1>
          <p className="subtext">The moon is a loyal companion</p>
        </div>
        <div className="col-sm-6 col-md-8">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/login" className="nav-link"> <IoIosLogIn title="Login" size="3em" color="#000"/> </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link"> <IoIosLogOut title="Logout" size="3em" color="#000"/> </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <IoMdCart title="Cart" size="3em" color="#000"/> </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
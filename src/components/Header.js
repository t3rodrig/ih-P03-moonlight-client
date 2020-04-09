import React from 'react';
import { IoIosLogIn, IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <h1 className="logo"><img src="/images/tag.svg" alt="" width="36" height="36" title="tag"/><span>Moonlight</span></h1>
          <p className="subtext">The moon is a loyal companion</p>
        </div>
        <div className="col-md-8 col-sm-12">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#"> <IoIosLogIn size="3em" color="#C83C27"/> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <IoMdCart size="3em" color="#C83C27"/> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
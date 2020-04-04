import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <h1 className="logo"><img src="/images/tag.svg" alt="" width="36" height="36" title="tag"/><span>Moonlight</span></h1>
          <p className="subtext">The moon is a loyal companion</p>
        </div>
        <div className="col-md-8 col-sm-12">
          <form className="form-inline">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email..." className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password.." className="form-control"/>
            </div>
            <button type="submit" className="btn btn-light">Login</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
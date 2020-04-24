import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { IoIosLogIn, IoMdCart, IoIosLogOut } from "react-icons/io";
import AuthService from '../services/auth-service';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps){
    this.setState({...this.state, loggedInUser: nextProps['userInSession']});
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
      this.props.history.push('/');
    });
  }

  render() {
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
              {
                this.state.loggedInUser ? 
                <Link to="/logout" className="nav-link"> <IoIosLogOut onClick={() => this.logoutUser()} title="Logout" size="3em" color="#000"/> </Link>
                :
                <Link to="/login" className="nav-link"> <IoIosLogIn title="Login" size="3em" color="#000"/> </Link>
              }
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <IoMdCart title="Cart" size="3em" color="#000"/> </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );

  }
}

export default withRouter(Header);
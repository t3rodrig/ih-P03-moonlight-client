import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth-service';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { userData: {} };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { userData } = this.state;
    this.service.login(userData)
    .then(response => {
      this.setState({ userData: {} });
      console.log(response);
      this.props.getUser(response);
    })
    .catch(err => console.log(err));
  }

  handleChange = (event) => {
    const { userData } = { ...this.state };
    const currentState = userData;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ userData: currentState });
  }

  render(){
    const { userData } = { ...this.state };
    return (
      <Fragment>
      <div>
        <form onSubmit={this.handleFormSubmit} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={event => this.handleChange(event)}
              className="form-control"
              id="inputEmail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={event => this.handleChange(event)}
              className="form-control"
              id="inputPassword" 
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          <p className="mt-5 mb-3 text-muted">Don't have account? <Link to="/signup">Signup</Link></p>
        </form>
      </div>
      </Fragment>
    );
  }
}

export default Login;
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth-service';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = { email, password };
    this.service.login(userData)
    .then(response => {
      this.state = { email: '', password: ''};
      this.props.getUser(response);
    })
    .catch(err => console.log(err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render(){
    const { email, password } = this.state;
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
              value={email}
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
              value={password}
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
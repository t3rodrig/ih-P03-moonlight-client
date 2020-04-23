import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthService from './services/auth-service';
import ProtectedRoute from './components/auth/protected-route';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response => {
        this.setState({loggedInUser: response});
      })
      .catch(err => this.setState({loggedInUser: false}));
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App container">
          <Header />
          <Navbar />
          <h1>Loggedin</h1>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/product/:id' component={ProductPage} />
          </Switch>
  
          <Footer />      
        </div>
      );
    } else {
      return (
        <div className="App container">
          <Header />
          <Navbar />
  
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route exact path='/product/:id' component={ProductPage} />
          </Switch>
  
          <Footer />      
        </div>
      );
    }
  }
}

export default App;

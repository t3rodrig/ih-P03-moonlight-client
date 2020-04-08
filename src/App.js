import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App container">
      <Header />
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;

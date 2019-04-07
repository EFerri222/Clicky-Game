import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default App;

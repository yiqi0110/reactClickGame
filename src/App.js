import React, { Component } from 'react';
import './assets/styles/App.css';
import Jumbotron from "./conponents/jumbotron";
import MainJumbo from "./conponents/mainJumbo";
import Footer from "./conponents/footer";
 
class App extends Component {

  state = {
    display: "none"
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <MainJumbo />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Tickers from './components/Tickers.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Cryptocurrency Ticker</h2>
          <h4>React tutorial from <a href="https://sabe.io/tutorials/getting-started-with-react">https://sabe.io/tutorials/getting-started-with-react</a></h4>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;

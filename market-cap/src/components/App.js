import React, { Component } from 'react';
import axios from 'axios';

import MarketChart from './MarketChart';
import logo from '../logo.svg';

import '../styles/App.css';

const URL = 'https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array';

class App extends Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      marketCaps: [],
    }
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
          const data = response.data.data.slice();
          let labelOutput = [];
          let marketCapOutput = [];
          data.forEach(currency => {
            labelOutput.push(currency.name);
            marketCapOutput.push(currency.quotes.USD.market_cap);
          });
          this.setState({
            labels: labelOutput,
            marketCaps: marketCapOutput,
          })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <img src={logo} className="App-logo" alt="logo" />
        </React.Fragment>
        <MarketChart labels={this.state.labels} marketCaps={this.state.marketCaps} />
      </div>
    );
  }
}

export default App;

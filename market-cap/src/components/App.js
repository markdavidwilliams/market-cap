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
      data: [],
      labels: [],
    }
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
          const data = response.data.data.slice();
          console.log(data)
          let output = [];
          data.forEach(currency => {
            output.push(currency.name);
          });
          console.log(output);
          this.setState({
            data: data,
            labels: output,
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
        <MarketChart data={this.state.data} />
      </div>
    );
  }
}

export default App;

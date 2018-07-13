import React, { Component } from 'react';
import axios from 'axios';

import MarketChart from './MarketChart';

import '../styles/App.css';

const URL = 'https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <MarketChart data={this.state.data} />
      </div>
    );
  }
}

export default App;

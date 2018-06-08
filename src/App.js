import React, { Component } from 'react';
import logo from './images/twitcoin.gif';
import twitter from './images/TwitterSample.png'
import chart from './images/SampleChart.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="introText">
                <div className="block">
                    <img src={logo} alt="logo" align="center" className = "logo"/>
                </div>
                <div className="block">
                    <p className = "leftText">Neural net aided Twitter sentiment analysis for the prediction of bitcoin prices</p>
                </div>
            </div>
            <div className="container">
                <div className="block">
                    <img src={twitter} alt="twitter" className="image"/>
                </div>
                <div className = "block">
                    <img src={chart} alt="chart" className="image"/>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './images/twitcoin.gif';
import './App.css';
import SentimentAnalysis from './components/sentimentAnalysisChart'
import BuySell from './components/BuyOrSell'
import BitCoinChart from './components/BitCoinChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="introText">
                <div>
                    <nav className="flexContainer blueBackground">
                        <ul className="nav flexItem flexStart">
                        </ul>
                        <ul className="nav flexContainer flexEnd">
                            <li className="link"><a href="#">Github</a></li>
                            <li><a href="#">About</a></li>

                        </ul>
                    </nav>
                </div>
                <div>
                    <img src={logo} alt="logo" align="center" className = "logo"/>
                </div>
                <div>
                    <p className = "leftText">Neural net aided Twitter sentiment analysis for the prediction of bitcoin prices</p>
                </div>
            </div>
            <div className = "container">
                <BuySell/>
                <BitCoinChart />
                <SentimentAnalysis/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;

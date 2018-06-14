import React from 'react'
import {Radar} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: ["Neutral", 'Positive', 'Very Positive', 'Negative', 'Very Negative'],
    datasets: [
        {
            label: 'Twitter Bitcoin Sentiment analysis',
            backgroundColor: 'rgba(0, 198, 255,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#e7e7ff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [getRandomInt(0,100), getRandomInt(0,100), getRandomInt(0,100), getRandomInt(0,100), getRandomInt(0,100)]
        }
    ],

});

const options = {
    responsive : true
}

class sentimentAnalysisChart extends React.Component {
    constructor(props) {
        super(props);
        this.getInitialState()
        this.ComponentWillMount()
    }
    getInitialState() {
        return getState()
    }
    ComponentWillMount(){
        setInterval(()=>{
            this.setState(getState())
        }, 5000)
    }

    render(){
        return (
            <div className = "chart">
                <h3>Twitter Sentiment Analysis</h3>
                <Radar
                    data = {getState()}
                    options = {options}
                />
            </div>
        );
    }
}

export default sentimentAnalysisChart
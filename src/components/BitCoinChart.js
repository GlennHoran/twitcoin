import React from 'react'
import {Line} from 'react-chartjs-2'

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30'],
    datasets: [
        {
            label: 'Bitcoin price',
            yAxisID: 'Bitcoin price $',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#ffd22a',
            borderColor: '#ffd22a',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffd22a',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [getRandomInt(0, 10000),getRandomInt(0, 10000),getRandomInt(0, 10000), getRandomInt(0, 10000), getRandomInt(0, 10000), getRandomInt(0, 10000), getRandomInt(0, 10000)]
        },
        {
            label: 'Twitter Sentiment',
            yAxisID: 'Twitter Sentiment Score (0-4)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#21aeff',
            borderColor: '#21aeff',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#21aeff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [getRandomInt(0, 4),getRandomInt(0, 4),getRandomInt(0, 4), getRandomInt(0, 4), getRandomInt(0, 4), getRandomInt(0, 4), getRandomInt(0, 4)]
        }
    ]
});
const options = {
    responsive : true,
    scales: {
        yAxes: [{
            id: 'Bitcoin price $',
            type: 'linear',
            position: 'left',
            scaleLabel: {
                display: true,
                labelString: 'Bitcoin Price $'
            },
            ticks: {
                max: 10000,
                min: 0
            }
        }, {
            id: 'Twitter Sentiment Score (0-4)',
            type: 'linear',
            position: 'right',
            scaleLabel: {
                display: true,
                labelString: 'Twitter Sentiment Score (0-4)'
            },
            ticks: {
                max: 4,
                min: 0
            }
        }]
    }
}

export default class BitcoinChart extends React.Component{

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
        return(
        <div className = "chart">
            <h3>Bitcoin Price Vs Twitter Sentiment</h3>
            <Line
                data={this.state}
                options={options}
            />
        </div>
        )
    }
}

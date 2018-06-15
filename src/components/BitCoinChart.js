import React from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'

var jsonData = {
    "jsonArray":[]
}

var labels = jsonData.jsonArray.map(function(e) {
    return e.date_added;
});
var data = jsonData.jsonArray.map(function(e) {
    return e.bitcoin_price;
});

var data2 = jsonData.jsonArray.map(function(e) {
    return e.sentiment_score;
});;

function getData(){

console.log("getting data..")

    axios.get('https://limitless-dawn-80311.herokuapp.com/reading/')
       .then(response => {
           jsonData.jsonArray=[];
           for(let i = 0; i < response.data.length; i++){
        jsonData.jsonArray.push(response.data[i]);
    }})

    labels = jsonData.jsonArray.map(function(e) {
        console.log(JSON.stringify(e));

        return e.fields.date_added.substring(11,19);
    }).reverse();
    data = jsonData.jsonArray.map(function(e) {
        return e.fields.bitcoin_price;
    }).reverse();
    data2 = jsonData.jsonArray.map(function(e) {
        return e.fields.sentiment_score;
    }).reverse();;



}



const getState = () => ({
    labels: labels,
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
            data: data
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
            data: data2
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
                max: 6550,
                min: 6450
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
                max: 2.5,
                min: 1.5
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
            getData()
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

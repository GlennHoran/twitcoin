import React from 'react'
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const getState = () => ({
    labels: [
        'Buy',
        'Sell'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150)],
        backgroundColor: [
            '#cc0b17',
            '#16eb00'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
        ]
    }]
});

const options = {
    responsive : true
}

class BuySell extends React.Component {
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
                <h3>Sagemaker Analysis</h3>
            <Doughnut
            data = {this.state}
            options = {options}
            />
            </div>
        )
    }
}

export default BuySell


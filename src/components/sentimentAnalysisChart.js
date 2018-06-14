import React from 'react'
import {Radar} from 'react-chartjs-2';

const data = {
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
            data: [65, 59, 90, 81, 56]
        }
    ],

};

const options = {
    responsive : true
}

class sentimentAnalysisChart extends React.Component {
    render(){
        return (
            <div className = "chart">
                <h3>Twitter Sentiment Analysis</h3>
                <Radar
                    data = {data}
                    options = {options}
                />
            </div>
        );
    }
}

export default sentimentAnalysisChart
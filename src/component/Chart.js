import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';



export default class Chart extends Component {

  render() {
    const options = {
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
          },
        }]
      },
    }
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      
      datasets: [
        {
          label: this.props.data.d1.name,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data.d1.data
        },
        {
          label: this.props.data.d2.name,
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#FF573360',
          borderColor: '#FF5733',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#FF5733',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FF5733',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data.d2.data
        }
      ],
      
    };
    return (      
        <Line ref="chart" data={data} options={options} width={420}/>      
    );
  }
}
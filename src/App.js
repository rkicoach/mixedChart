import React from "react";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [0,1,2,3,4,5,6,7,8,9,10];


class App extends React.Component {
  constructor(props) {
    super(props);
    
    let xValues = [];
    let confirmed = [];
    let deaths = [];

    this.state = {
      chart:{
        labels,
        datasets: [
          {
            type: 'scatter',
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: [],
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'white',
            borderWidth: 1,
          },
          {
            type: 'line',
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: []
          },
        ],
      }
    };
  }
  componentDidMount(){

    for(let i=0; i < 4; i = i + 0.4 )
      this.state.chart.datasets[0].data.push({x:i,y:Math.floor(Math.random() * 1000)})

    for(let j=3; j < 10; j = j + 0.5 )
      this.state.chart.datasets[2].data.push({x:j,y:Math.floor(Math.random() * 800)})  
    }

  render() {
    return <Chart  data={this.state.chart} />;
  }
}

export default App;

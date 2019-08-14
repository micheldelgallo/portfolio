import React from "react";
import {Header} from 'semantic-ui-react';
import {Doughnut} from 'react-chartjs-2';

const Languages = (props) => {

    let { data } = props;

    let values = []
    let labels = []

    for(let i of data){
      values.push(i.value)
      labels.push(i.language)
    }

    const source = {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      };
  
    return (
        <div>
            <Header as='h2'>Languages</Header>
            <Doughnut data={source} />
        </div>
    )
}

export default Languages;
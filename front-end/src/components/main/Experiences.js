import React from "react";
import {Header} from 'semantic-ui-react';
import {HorizontalBar} from 'react-chartjs-2';

const Experiences = (props) => {

    let { data } = props;

    let values = []
    let labels = []

    for(let i of data){
      values.push(i.value)
      labels.push(i.company)
    }

    const source = {
        labels: labels,
        datasets: [
          {
            label: 'Months',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: values
          }
        ]
      };
  

    return (
        <div>
            <Header as='h2'>Experiences</Header>
            <HorizontalBar data={source} />
        </div>
    )
}

export default Experiences;
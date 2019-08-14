import React from "react";
import {Header} from 'semantic-ui-react';
import {Bar} from 'react-chartjs-2';

const Qualities = (props) => {

    let { data } = props;

    let values = []
    let labels = []

    for(let i of data){
      values.push(i.value)
      labels.push(i.quality)
    }

    let source = {
      labels: labels,
      datasets: [
        {
          label: 'Qualities',
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
            <Header as='h2'>Qualities</Header>
            <Bar
              data={source}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true
              }}

            />
        </div>
    )
}

export default Qualities;
import React from "react";
import { Grid, Header } from 'semantic-ui-react';

let setcolor = (id) => {
    let color = ''

    switch(id) { 
        case 1: { 
           color='red'; 
           break; 
        } 
        case 2: { 
            color='orange'
            break; 
         } 
         case 3: { 
            color='yellow'
            break; 
         } 
         case 4: { 
            color='olive'
            break; 
         } 
         case 5: { 
            color='green'
            break; 
         } 
         case 6: { 
            color='teal'
            break; 
         } 
         case 7: { 
            color='blue'
            break; 
         } 
        default: { 
           color='grey'; 
           break; 
        } 
    }

    return color;
};

const Technologies = (props) => {

    let { data } = props;

    return (
        <div>
            <Header as='h2'>Technologies</Header>
            <Grid
                centered
                columns={3}
                padded
                stackable
                style={{ margin: '-1.5em', width: 400 }}
                textAlign='center'
            >
                {data.map(item => (
                    <Grid.Column key={item.id} color={setcolor(item.id)} style={{ margin: '0.5em', height: 50 }}>
                        {item.name}
                    </Grid.Column>
                ))}
                
            </Grid>
        </div>
    )
}

export default Technologies;
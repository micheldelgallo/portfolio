import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Card, Button, Image, Header, Message
} from 'semantic-ui-react'

import If from "../../utils/If"

class Cards extends Component {

    state = {}


    componentWillReceiveProps() {

    }

    componentDidMount() {

    }

    handleAction = (entity,act) => {
        this.props.portfolioFrameworkSaveAction(entity,act)
    }

    render() {

        let { data } = this.props;

        return (
            <div>
                <Header as='h2'>Frameworks</Header>
                <Card.Group key="cardgroup">

                    {
                        data.map(item => (
                            <Card key={item.id}>
                                <Card.Content>
                                    <Image circular floated='right' size='mini' src={item.image} />
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Description>
                                        {item.description}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green' loading={item.isapproving} onClick={(e)=>this.handleAction(item,1)}>Approve</Button>
                                        <Button basic color='red' loading={item.isdeclining} onClick={(e)=>this.handleAction(item,2)}>Decline</Button>
                                    </div>
                                </Card.Content>
                            </Card>

                        ))
                    }

                </Card.Group>
                <If test={data.length===0}>
                <Message
                    header='Data not found'
                    content='Probably you removed all items'
                    />
                </If>

            </div>

        )
    }

}

Cards.defaultProps = {
    data: []
};

Cards.propTypes = {
    data: PropTypes.array.isRequired
    , portfolioFrameworkSaveAction: PropTypes.func.isRequired
};

export default Cards


import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import parse from 'html-react-parser';

import {
  portfolioListAction
  , portfolioFrameworksListAction
  , portfolioFrameworkSaveAction
  , portfolioFrameworksRemoveAction
  , portfolioInformationChangeAction
} from '../../actions/PortfolioActions';

import "pure-react-carousel/dist/react-carousel.es.css";
import ImageCarousel from "./ImageCarousel";
import { Container, Grid, Header, Image, Segment, Dimmer, Loader, Form } from 'semantic-ui-react';

import socketIOClient from "socket.io-client";

import If from "../../utils/If"

import Technologies from "./Technologies"
import Qualities from "./Qualities"
import Languages from "./Languages"
import Experiences from "./Experiences"
import Cards from "./Cards"

class Main extends Component {
  

  componentDidMount() {
    this.props.portfolioListAction().then(d => {

      const socket = socketIOClient(process.env.REACT_APP_API);
      socket.emit("SocketFrameworksConnect", "");
      setInterval(() => socket.emit("SocketFrameworksConnect", ""), 3600000)//1 hora

      socket.on("SocketFrameworksList", data => this.props.portfolioFrameworksListAction(data));
      socket.on("SocketFrameworksUpdate", data => this.props.portfolioFrameworksRemoveAction(data));

    })

  }

  render() {

    let { technologies, qualities, experiences, languages, projects, frameworks,InformationEntity, isloading } = this.props;

    return (
      <Container style={{ marginTop: '3em' }} >

        <If test={isloading===true}>
          <Segment>
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>

            <Image src='/images/paragraph.png' />
          </Segment>
        </If>
        <If test={!isloading===true}>
          <Header as='h2'>
            <Image circular src='/images/michel.png' /> Michel Legendre Delgallo
        </Header>
          <Header as='h2' dividing></Header>

          <Grid columns={3} stackable>
            <Grid.Column>

              <Header as='h2'>Professional</Header>
              
              {parse(InformationEntity.professional)}
              
            </Grid.Column>

            <Grid.Column>
              <Header as='h2'>Personal</Header>

              <Form>
                <Form.Group widths='equal'>
                  <Form.TextArea name="personal" fluid="true" label='' placeholder=''
                    onChange={this.props.portfolioInformationChangeAction}
                    value={InformationEntity.personal}
                    rows={10}
                  />
                </Form.Group>
              </Form>

            </Grid.Column>

            <Grid.Column>
              <Technologies data={technologies} />
            </Grid.Column>
          </Grid>

          <Header as='h2' dividing></Header>

          <Grid columns={3} stackable>
            <Grid.Column>
              <Qualities data={qualities} />
            </Grid.Column>

            <Grid.Column>
              <Languages data={languages} />
            </Grid.Column>

            <Grid.Column>
              <Experiences data={experiences} />
            </Grid.Column>
          </Grid>

          <Header as='h2' dividing></Header>

          <ImageCarousel data={projects} />

          <Header as='h2' dividing></Header>
          <Cards data={frameworks} portfolioFrameworkSaveAction={this.props.portfolioFrameworkSaveAction} />

          <Header as='h2' dividing></Header>
        </If>
      </Container>
    )
  }

}

const mapStateToProps = state => ({
  experiences: state.PortfolioReducer.experiences
  , languages: state.PortfolioReducer.languages
  , qualities: state.PortfolioReducer.qualities
  , technologies: state.PortfolioReducer.technologies
  , projects: state.PortfolioReducer.projects
  , frameworks: state.PortfolioReducer.frameworks
  , isloading: state.PortfolioReducer.isloading
  , InformationEntity: state.PortfolioReducer.InformationEntity
})

export default withRouter(connect(mapStateToProps, {
  portfolioListAction
  , portfolioFrameworksListAction
  , portfolioFrameworkSaveAction
  , portfolioFrameworksRemoveAction
  , portfolioInformationChangeAction
}
)(Main))
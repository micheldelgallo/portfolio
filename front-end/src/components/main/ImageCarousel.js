
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { CarouselProvider, Image, Slide, Slider, Dot } from "pure-react-carousel";
import { Divider, Accordion, Icon, Header, Grid, Button, Container  } from "semantic-ui-react";

class ImageCarousel extends Component {

  state = { activeIndex: 0 }



  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    let { activeIndex } = this.state;
    let { data } = this.props;

    return (

      <Grid columns={2} stackable>
        <Grid.Column>
          <Header as='h2'>Some projects</Header>
          <CarouselProvider
            naturalSlideWidth={3}
            naturalSlideHeight={1}
            totalSlides={data.length}
            dragEnabled={false}
          >
            <Slider>
              {data.map(item => (
                <Slide key={item.id} tag="a" index={item.index} >
                  <Image src={item.image} />
                </Slide>
              ))}
            </Slider>
            <Container textAlign="center">
              <Button.Group size={'mini'}>
                {[...Array(data.length).keys()].map(slide => (
                  <Button as={Dot} key={slide} icon="circle" slide={slide} index={slide} onClick={this.handleClick} />
              ))}
              </Button.Group>
            </Container>
            <Divider />
          </CarouselProvider>
        </Grid.Column>
        <Grid.Column>
          <Accordion styled>
            {
              data.map(item => (
                <div key={item.id}>
                  <Accordion.Title active={activeIndex === item.index} index={item.index} onClick={this.handleClick} >
                    <Icon name='dropdown' />
                    {item.title}
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === item.index}>
                    <p>
                      {item.description}
                    </p>
                  </Accordion.Content>
                </div>
              ))
            }
          </Accordion>
        </Grid.Column>
      </Grid>

    )
  }
}

ImageCarousel.defaultProps = {
  data: {}
};

ImageCarousel.propTypes = {
  data: PropTypes.array.isRequired
};

export default ImageCarousel;

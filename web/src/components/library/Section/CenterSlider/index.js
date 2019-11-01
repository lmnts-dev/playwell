// Center.js: using slick
//
// />

// Core
import React, { Component } from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import { Link } from 'gatsby';

// Components
import ImgMatch from 'components/core/ImgMatch';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Styles
import CenterSliderStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={false}
          centerPadding={0}
          centerMode={true}
        >
          {this.props.slides.map((testimonial, index) => {
            return (
              <div className="nav-item" key={index}>
                <ImgMatch src={testimonial.image} />
              </div>
            );
          })}
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          fade={true}
        >
          {this.props.slides.map((testimonial, index) => {
            return (
              <div className="item" key={index}>
                <p className="p-lg quote">{testimonial.quote}</p>
                <div className="p-lg">{testimonial.name}</div>
                <p>{testimonial.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}



// The SubLevel Page Itself
const CenterSlider = ({ testimonials, Color }) => (
  <CenterSliderStyle Color={Color}>
    <AsNavFor slides={testimonials}/>
  </CenterSliderStyle>
);

CenterSlider.defaultProps = {
  Color: Theme.Color.Primary,
};

export default CenterSlider;

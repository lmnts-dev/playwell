// Center.js: using slick
//
// />

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import { Link } from 'gatsby';

// Components
import ImgMatch from 'components/core/ImgMatch';

// Constants
import { Base } from 'constants/styles/Base';

// Styles
import CenterSliderStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Section Slider:
// For displaying widgets within a SlideSection.

// The Slider itself.
class CenterSliderSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // React-Slick Settings
    // Read more: https://react-slick.neostack.com/

    // Pass into Slick Settings.
    const settings = {
      speed: 1000,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      variableWidth: false,
      infinite: true,
      arrows: true,
      buttons: false,
      responsive: [
        {
          breakpoint: Base.Media.Width.Lg + 'px',
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };

    return (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/vendor/slick.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/slick-theme.min.css"
          />
        </Helmet>
        <Slider ref={h => (this.slider = h)} {...settings}>
          {this.props.children}
        </Slider>
      </>
    );
  }
}

// The SubLevel Page Itself
const CenterSlider = ({ testimonials }) => (
  <CenterSliderStyle>
    <CenterSliderSlider>
      {testimonials.map((testimonial, index) => {
        return (
          <div className="item" key={index}>
            <p className="p-lg quote">{testimonial.quote}</p>
            <div className="p-lg">{testimonial.name}</div>
            <p>{testimonial.title}</p>
          </div>
        );
      })}
    </CenterSliderSlider>
  </CenterSliderStyle>
);

export default CenterSlider;
// EdgeSlider.js: using slick
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
import EdgeSliderStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Section Slider:
// For displaying widgets within a SlideSection.

// The Slider itself.
class EdgeSliderSlider extends React.Component {
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
      autoplay: true,
      slidesToShow: 3.8,
      slidesToScroll: 1,
      variableWidth: false,
      infinite: false,
      arrows: false,
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
const EdgeSlider = ({ images, titles }) => (
  <EdgeSliderStyle>
    <EdgeSliderSlider>
      {images.map((image, index) => {
        return (
          <div className="item">
            <div className="h5">{titles[index]}</div>
            <ImgMatch src={image} />
          </div>
        );
      })}
    </EdgeSliderSlider>
  </EdgeSliderStyle>
);

export default EdgeSlider;
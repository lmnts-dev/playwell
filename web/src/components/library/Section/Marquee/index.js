// Marquee.js: using slick
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
import MarqueeStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Section Slider:
// For displaying widgets within a SlideSection.

// The Slider itself.
class MarqueeSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // React-Slick Settings
    // Read more: https://react-slick.neostack.com/

    // Pass into Slick Settings.
    const settings = {
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: false,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
      responsive: [
        {
          breakpoint: Base.Media.Width.Lg,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: Base.Media.Width.Md,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: Base.Media.Width.Sm,
          settings: {
            slidesToShow: 1.5,
          }
        }
      ]
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
const Marquee = ({ images, SquareFormat, Shadow, BgLinear }) => (
  <MarqueeStyle
    SquareFormat={SquareFormat}
    Shadow={Shadow}
    BgLinear={BgLinear}
  >
    <MarqueeSlider>
      {images.map((image, index) => {
        return (
          <div className="item">
            <ImgMatch src={image} />
          </div>
        );
      })}
    </MarqueeSlider>
  </MarqueeStyle>
);

export default Marquee;
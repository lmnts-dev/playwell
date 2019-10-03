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
//import MarqueeStyle from './styles.scss';

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
      autoplaySpeed: 5000,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: false,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
      responsive: [
        {
          breakpoint: Base.Media.Width.Lg + 'px',
          settings: {
            slidesToShow: 3,
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
const Marquee = () => (
    <MarqueeSlider>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
      <div class="item">
        <ImgMatch src="intro-smiles.jpg" />
      </div>
    </MarqueeSlider>
);

export default Marquee;
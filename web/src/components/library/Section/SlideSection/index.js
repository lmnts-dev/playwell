// SlideSection.js:
//
// Usage:
// <SlideSection
// Widgets={Widgets}
// SectionSize="Large"
// SlidesToShow={4}
// Header="Headline"
// ViewAll={['/', 'View All']}
// />

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import { Link } from 'gatsby';

// Components
import WidgetContainer from 'components/library/Widgets/Container/';
import Btn from 'components/library/Btn';
import Icon from 'elements/Icons';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Styles
import SlideSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Section Slider:
// For displaying widgets within a SlideSection.

// The Slider Arrows
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // These are eslint errors for accessibility below.
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <Icon className="svg-carat" Name="carat" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // These are eslint errors for accessibility below.
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <Icon className="svg-carat" Name="carat" />
    </div>
  );
}

// The Slider itself.
class SectionSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // React-Slick Settings
    // Read more: https://react-slick.neostack.com/

    // Get any theming.
    const ArrowColor = this.props.ArrowColor;

    // Get any custom Slider Settings we want to pass.
    const slidesToShow = this.props.SliderSettings.slidesToShow
      ? this.props.SliderSettings.slidesToShow
      : 1;
    const slidesToScroll = this.props.SliderSettings.slidesToScroll
      ? this.props.SliderSettings.slidesToScroll
      : 1;
    const autoplay = this.props.SliderSettings.autoplay
      ? this.props.SliderSettings.autoplay
      : false;
    const useTransform = this.props.SliderSettings.useTransform
      ? this.props.SliderSettings.useTransform
      : true;
    const infinite = this.props.SliderSettings.infinite
      ? this.props.SliderSettings.infinite
      : false;
    const arrows = this.props.SliderSettings.arrows
      ? this.props.SliderSettings.arrows
      : false;

    // Pass into Slick Settings.
    const settings = {
      dots: true,
      speed: 550,
      arrows: false,
      autoplaySpeed: 4000,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      autoplay: autoplay,
      infinite: infinite,
      draggable: true,
      arrows: arrows,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      useTransform: useTransform,
      responsive: [
        {
          breakpoint: Base.Media.Width.Md + 'px',
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
const SlideSection = ({
  Widgets,
  SectionSize,
  SliderSettings,
  Header,
  Icon,
  ViewAll,
  Theme,
  Gutter,
}) => (
  <SlideSectionStyle className="slide-section">
    <SlideSectionStyle.Inner Gutter={Gutter} className="slide-section-inner">
      <SlideSectionStyle.Content SectionSize={SectionSize}>
        <SlideSectionStyle.SectionHeader>
          <SlideSectionStyle.Headline TextColor={Theme.TextColor}>
            {Icon ? <i className={'fas fa-' + Icon} /> : null}
            {Header ? <h2>{Header}</h2> : null}
          </SlideSectionStyle.Headline>
          {ViewAll ? (
            <SlideSectionStyle.CallToAction>
              <Btn
                Destination={ViewAll[0]}
                BgColor="inherit"
                Label={ViewAll[1]}
                IconclassName="carat"
              />
            </SlideSectionStyle.CallToAction>
          ) : null}
        </SlideSectionStyle.SectionHeader>

        <SectionSlider
          SliderSettings={SliderSettings}
          ArrowColor={Theme.TextColr}
        >
          {/* Map our Widgets data. */}
          {Widgets.map((Widget, index) => {
            // Pass our Widgets data to our WidgetContainers
            return (
              <WidgetContainer
                key={index}
                WidgetContent={Widget.WidgetContent}
                Flex={Widget.Flex ? Widget.Flex : null}
              />
            );
          })}
        </SectionSlider>
      </SlideSectionStyle.Content>
    </SlideSectionStyle.Inner>
  </SlideSectionStyle>
);

export default SlideSection;

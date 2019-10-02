// Why.js:
// This is why portion of the who section of the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';
import ImgMatch from 'components/core/ImgMatch';
import Marquee from 'components/library/Section/Marquee';
import LegoList from 'components/library/Section/LegoList';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Number = styled.div`
    color: ${Theme.Color.Blush};
    font-weight: 700;
`

const ImageWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .image,
  .text {
    flex: 1;
  }

  .ico-gear {
    position: absolute;
    height: 140%;
    width: 100%;
    top: -20%;
    right: -50%;
    svg {
      height: 100%;
      width: auto;
      fill: ${Theme.Color.Nova};
    }
  }

  .image {
    margin-right: calc(${Root.Size} / 4);

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .text {
    .container {
      padding: ${Root.Size} calc(${Root.Size} * 1.5);
      max-width: calc(${Root.Size} * 9);

      .h4 {
        font-weight: 700;
      }

      p {
        color: ${Theme.Color.Dino};
      }
    }
  }

  ${props =>
    props.reversedOrder
      ? `
        flex-direction: row-reverse;
        .container {
          margin: 0 auto;
        }
        .image {
          margin-right: 0;
          margin-left: calc(${Root.Size} / 4);
        }
    `
      : null};
`;

const LargeTextBlock = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 0 auto;
  position: relative;

  > div {
    max-width: calc(${Root.Size} * 20);
  }

  .headline {
    color: ${Theme.Color.Eggplant};
    padding: calc(${Root.Size} / 4) 0;
  }

  .absolute-image {
    position: absolute;
    top: calc(${Root.Size} * -4.5);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: rotate(260deg);
  }
`;

const TextWithManyImages = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30vw;

  .text {
    font-weight: 700;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${Root.Size} ${Root.Size} ${Root.Size} 0;
  }

  .images {
    flex: 3;
    display: flex;
    flex-direction: row;

    > .gatsby-image-wrapper {
      display: inline-block;
      height: 100%;
      width: 66.66%;
    }

    .column {
      width: 33.33%;
      height: 100%;
      margin-left: 4px;

      .gatsby-image-wrapper {
        width: 100%;
        height: 50%;

        &:first-of-type {
          margin-bottom: 4px;
        }

        &:last-of-type {
          margin-top: 4px;
        }
      }
    }
  }
`;

const CenteredTitle = styled.div`
  text-align: center;
  color: ${Theme.Color.Blush};
  font-weight: 700;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-bottom: ${Root.Size};
  }

  .absolute-image {
    position: absolute;
    bottom: calc(${Root.Size} * -4);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: scaleX(-1);

    .ico-swoop {
      width: 100%;
      display: block;

      svg {
        transform: rotate(180deg) scaleX(-1) translateY(calc(${Root.Size} * 1.5));

        path {
          fill: ${Theme.Color.Dino};
        }
      }
    }
  }
`;

const Carousel =
  styled.div`
  padding-top: calc(${Root.Size});
  position: relative;

  .slick-slider {
    filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.20)});

    .item {
      .gatsby-image-wrapper {
        display: block !important;
        height: 25vw;
        max-height: calc(${Root.Size} * 7);
        margin-left: calc(${Root.Size} / 4);

        img {
          border-radius: calc(${Root.Size} / 8);
        }
      }
    }
  }
`;

const TextBlock = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: calc(${Root.Size} * 2) 0 calc(${Root.Size} * 1.5) 0;

  .h4 {
    font-weight: 700;
    max-width: calc(${Root.Size} * 10);
    margin: 0 auto;
    padding-bottom: calc(${Root.Size} / 4);
  }

  > div {
    z-index: 2;
    position: relative;
  }

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 100%;
    width: 100%;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${Theme.Color.Eggplant};
      opacity: 0.3;
      z-index: 2;
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 1;
    }
  }
`;

// Render Page
const WhoWhyPage = () => {
    return (
      <Layout>
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.White}
          noPaddingTop
          noPaddingBottom
          BorderBottomVertical
        >
          <TextBlock>
            <div className="background-image">
              <ImgMatch src="intro-smiles.jpg" />
            </div>
            <BasicInner>
              <div className="h4">
                Combining the elements of fun, challenge, and learning since
                1997
              </div>
              <Btn
                Label="Our Story"
                BgColor={Theme.Color.Sky}
                TextColor={Theme.Color.White}
                Destination="/"
              />
            </BasicInner>
          </TextBlock>
        </BasicSection>

        <BasicSection BgColor={Theme.Color.Background} BorderTopVertical>
          <CenteredTitle>
            <BasicInner>
              <div className="headline">Our Values</div>
            </BasicInner>
            <div className="absolute-image">
              <Icon Name="swoop" />
              <ImgMatch src="gears.png" />
            </div>
          </CenteredTitle>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
          noPaddingTop
          noPaddingBottom
        >
          <BasicInner noPaddingLeft noPaddingRight>
            <ImageWithText>
              <div className="image">
                <ImgMatch src="intro-smiles.jpg" />
              </div>
              <div className="text">
                <div className="container">
                  <Number className="h1">01</Number>
                  <div className="h4">Build problem-solving skills</div>
                  <p className="p-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                    egestas. Sed in magna sapien.
                  </p>
                </div>
              </div>
            </ImageWithText>
            <ImageWithText reversedOrder>
              <Icon Name="gear" />
              <div className="image">
                <ImgMatch src="intro-smiles.jpg" />
              </div>
              <div className="text">
                <div className="container">
                  <Number className="h1">02</Number>
                  <div className="h4">
                    Provide an opportunity for creative expression
                  </div>
                  <p className="p-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                    egestas. Sed in magna sapien.
                  </p>
                </div>
              </div>
            </ImageWithText>
            <ImageWithText>
              <div className="image">
                <ImgMatch src="intro-smiles.jpg" />
              </div>
              <div className="text">
                <div className="container">
                  <Number className="h1">03</Number>
                  <div className="h4">
                    Foster a greater appreciation of how things work
                  </div>
                  <p className="p-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                    egestas. Sed in magna sapien.
                  </p>
                </div>
              </div>
            </ImageWithText>
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
        >
            <LargeTextBlock>
              <BasicInner>
                <Number className="h1">04</Number>
                <div className="h4">Encourage the qualities of</div>
                <div className="headline txt-clr-eggplant">
                  Inquisitiveness Self Reliance &amp; Self Confidence
                </div>
                <div className="h4">In children &amp; in everybody.</div>
              </BasicInner>
              <div className="absolute-image">
                <ImgMatch src="gears.png" />
              </div>
            </LargeTextBlock>
        </BasicSection>

        <BasicSection BgColor={Theme.Color.Background} noPaddingTop BorderMiddle>
          <Carousel>
            <Marquee />
          </Carousel>
        </BasicSection>

        <BasicSection BgColor={Theme.Color.Background} noPaddingTop>
          <BasicInner>
            <LegoList />
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Blush}
          TextColor={Theme.Color.Dino}
          noPaddingTop
          noPaddingBottom
        >
          <BasicInner noPaddingRight>
            <TextWithManyImages>
              <div className="text h4">
                We do this in the context of fun-filled engineering and
                architectural projects, activities that both the children and
                the instructors enjoy.
              </div>
              <div className="images">
                <ImgMatch src="intro-smiles.jpg" />
                <div className="column">
                  <ImgMatch src="intro-smiles.jpg" />
                  <ImgMatch src="intro-smiles.jpg" />
                </div>
              </div>
            </TextWithManyImages>
          </BasicInner>
        </BasicSection>
      </Layout>
    );
  };
  
  export default WhoWhyPage;
  
  //////////////////////////////////////////////////////////////////////
  // End Component
  
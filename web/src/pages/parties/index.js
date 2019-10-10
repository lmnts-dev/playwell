// Parties.js:
// This is the birthday parties page of parties

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
import ImageAccordian from 'components/library/ImageAccordian';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import ImgMatch from 'components/core/ImgMatch';
import GiantTextBlock from 'components/library/Section/GiantTextBlock';
import ImageWithTextBlock from 'components/library/Section/ImageWithTextBlock';
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';
import EdgeSlider from 'components/library/Section/EdgeSlider';
import Marquee from 'components/library/Section/Marquee';
import LegoList from 'components/library/Section/LegoList';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import SplitHero from 'components/library/Hero/SplitHero';
import { Box, Flex } from 'components/library/Elements';
import SubNav from 'components/library/SubNav';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Props
const ThemeProps = {
  BgColor: Theme.Color.Cream,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: Theme.Color.Background,
  color: Theme.Color.Eggplant,
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButtonBg: Theme.Color.Nova,
  gear: false,
  textAlign: 'left',
  withMask: false,
  heroHeight: 'auto',
};

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleTextWithImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .image,
  .text {
    flex: 1;
  }

  .image {
    padding-left: calc(${Root.Size});
  }

  .text {
    padding-right: calc(${Root.Size});

    > * {
      max-width: calc(${Root.Size} * 7.5);
    }
  }

  .h6,
  .h2 {
    font-weight: 700;
  }

  .h2 {
    color: ${Theme.Color.Sunset};
    padding: calc(${Root.Size} / 5) 0;
  }
`;

const CurveAndAngle = styled.div`
  position: relative;
  width: 100vw;
  height: 30vw;

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 85%;
    z-index: 2;
  }

  .footer-curve-slice {
    width: 100%;
    height: calc(100% - ${Root.Size});
    z-index: 1;
    margin-bottom: calc(${Root.Size});
  }

  .absolute-image {
    position: absolute;
    width: 25vw;
    height: 25vw;
    bottom: 0;
    right: 2vw;
  }
`;

const AccordianFeature = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: calc(${Root.Size} / 3);

    li {
      font-weight: 700;
      padding: calc(${Root.Size} / 6);
      white-space: nowrap;

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      a {
        color: ${Theme.Color.Clay};
        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          font-size: 1rem;
        }

        &:visited {
          color: ${Theme.Color.Clay};
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: block;
    }

    .image-accordian {
      flex: 1;

      &:nth-of-type(2) {
        margin: 0 calc(${Root.Size} / 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          margin: calc(${Root.Size} / 4) 0;
        }
      }
    }
  }

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vw;
  }
`;

const SplitTextBoxes = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    ${Theme.Color.Eggplant} 50%,
    ${Theme.Color.Sunset} 50%
  );
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    background: linear-gradient(
      to bottom,
      ${Theme.Color.Eggplant} 50%,
      ${Theme.Color.Sunset} 50%
    );
  }

  .basic-inner {
    display: flex;
    flex-direction: row;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: block;
    }

    .container {
      flex: 1;
      padding: calc(${Root.Size} * 2) 0;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: calc(${Root.Size}) 0;
      }

      &:first-of-type {
        padding-right: calc(${Root.Size} * 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          padding-right: 0;
        }
      }

      &:last-of-type {
        padding-left: calc(${Root.Size} * 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          padding-left: 0;
        }
      }

      .h6,
      .h3 {
        font-weight: 700;
      }

      .h3 {
        padding: calc(${Root.Size} / 8) 0;
      }
    }
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  .project {
      width: 30%;
      margin-right: 5%;
      text-align: center;
      margin-top: calc(${Root.Size} / 1.5);

      .h6, .tag {
          font-weight: 700;
      }

      .h6 {
        padding: calc(${Root.Size} / 2) 0 calc(${Root.Size} / 3) 0;
      }

      p {
        padding-bottom: calc(${Root.Size} / 5);
      }

      .tags {
          display: flex;
          flex-direction: row;
          justify-content: center;

        .tag {
            font-size: 12px;
            color: ${Theme.Color.Nova};
            padding: 0 calc(${Root.Size} / 8);
        }
      }

      &:nth-of-type(3n) {
        margin-right: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }

      .gatsby-image-wrapper {
          padding-top: 100%;
          height: 0;
          border-radius: calc(${Root.Size} / 10);
          filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.4)});
      }
  }
`


// Render Page
const Parties = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps}>
        <h2>Let Us Engineer Your Child's Party</h2>
        <h6>Some of the most memorable and fun experiences kid's have together are at birthday parties.</h6>
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>

      <BasicSection
        BgColor={Theme.Color.Ocean}
        TextColor={Theme.Color.White}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner>
          <GiantTextBlock
            giantText="Well Supplied Fun"
          />
        </BasicInner>
      </BasicSection>
      <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Ocean}>
        <CurveAndAngle>
          <FooterCurveSlice bgColor={Theme.Color.Deepsea} />
          <FooterAngleSlice bgColor={Theme.Color.Background} />
          <div className="absolute-image">
            <ImgMatch src="sailboat.png" />
          </div>
        </CurveAndAngle>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino} noPaddingTop>
        <BasicInner>
          <CenteredTitle
            Title="Our Projects"
            Class="headline"
          />
          <Projects>
          {Array.from(Array(5), (e, i) => {
            return (
              <div className="project">
                  <ImgMatch src="intro-smiles.jpg"/>
                  <div className="h6">Race Car</div>
                  <p>Competitive Racing</p>
                  <div className="tags">
                      <div className="tag">Ages 5+</div>
                      <div className="tag">Vehicle</div>
                      <div className="tag">Mechanics</div>
                  </div>
              </div>
            )
          })}
          </Projects>
        </BasicInner>
      </BasicSection>


    </Layout>
  );
};

export default Parties;

//////////////////////////////////////////////////////////////////////
// End Component

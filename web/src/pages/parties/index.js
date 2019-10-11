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
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import ImgMatch from 'components/core/ImgMatch';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
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

const DeepseaTextBlock = styled.div`
  position: relative;

  .text-block {
    text-align: center;
    max-width: calc(${Root.Size} * 17);
    margin: 0 auto;

    .txt-clr-deepsea {
      color: ${Theme.Color.Deepsea};
    }

    .h1,
    p {
      font-weight: bold;
    }

    p {
      padding: calc(${Root.Size} / 6) calc(${Root.Size} * 1.5) 0 calc(${Root.Size} * 1.5);
      line-height: 1.2;
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
const Timeline = styled.div`

    .h3, .time {
        font-weight: 700;
    }

  .time {
      font-size: 100px;
      color: ${Theme.Color.Blush};
      span {
          font-size: 41px;
      }
  }

  .h3 {
      color: ${Theme.Color.Sunset};
  }
`

const Questions = styled.div`
    .h3 {
        font-weight: 700;
        padding-bottom: calc(${Root.Size} / 2);
    }

    .container {
       column-count: 2;
       
       a {
         min-width: 40%;
         display: block;
         flex: 1;
         margin-bottom: calc(${Root.Size} / 10);
         padding: calc(${Root.Size} / 2);
         font-weight: 700;
         color: ${Theme.Color.White};
         border-radius: calc(${Root.Size} / 10);

         &:nth-of-type(5n - 4){
             background-color: ${Theme.Color.Ocean};
         }

         &:nth-of-type(5n - 3){
            background-color: ${Theme.Color.Eggplant};
         }

         &:nth-of-type(5n - 2){
            background-color: ${Theme.Color.Sunlight};
         }
         &:nth-of-type(5n - 1){
            background-color: ${Theme.Color.Deepsea};
         }
         &:nth-of-type(5n){
            background-color: ${Theme.Color.Nova};
         }
       }
    }
`


const HideOverFlow = styled.div`
    overflow: hidden;
    width: 100vw;
`

// Render Page
const Parties = () => {
  return (
    <Layout {...ThemeProps}>
      <HideOverFlow>
        <SplitHero {...HeroProps}>
          <h2>Let Us Engineer Your Child's Party</h2>
          <h6>
            Some of the most memorable and fun experiences kid's have together
            are at birthday parties.
          </h6>
        </SplitHero>
        <Box css={{ position: 'relative', height: 0 }}>
          <SubNav />
        </Box>

        <BasicSection
          BgColor={Theme.Color.Ocean}
          TextColor={Theme.Color.White}
          noPaddingBottom
          noInner
        >
          <DeepseaTextBlock>
            <BasicInner>
              <div className="text-block">
                <div className="headline txt-clr-deepsea">
                  Well Supplied Fun
                </div>
                <p className="h3">
                  At a Play-Well party, you provide the kids and we bring over
                  20,000 pieces of LEGO and awesome project ideas!
                </p>
              </div>
            </BasicInner>
          </DeepseaTextBlock>
        </BasicSection>

        <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Ocean}>
          <CurveAndAngle
            CurveColor={Theme.Color.Deepsea}
            AngleColor={Theme.Color.Background}
            Clouds="1"
            AbsoluteImages={[
              {
                src: 'sailboat.png',
                width: '40vw',
                right: '-10vw',
                bottom: '0',
              },
              {
                src: 'plant-wavy-1.png',
                width: '12vw',
                right: '45vw',
                bottom: '180px',
              },
              {
                src: 'plant-wavy-2.png',
                width: '14vw',
                right: '56vw',
                bottom: '180px',
              },
              {
                src: 'plant-gears.png',
                width: '40vw',
                right: '75vw',
                bottom: '10px',
                flip: true,
              },
              {
                src: 'clouds.png',
                width: '30vw',
                right: '75vw',
                bottom: '90%',
              },
            ]}
          />
        </BasicSection>
      </HideOverFlow>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <CenteredTitle Title="Our Projects" Class="headline" />
          <Projects>
            {Array.from(Array(5), (e, i) => {
              return (
                <div className="project">
                  <ImgMatch src="intro-smiles.jpg" />
                  <div className="h6">Race Car</div>
                  <p>Competitive Racing</p>
                  <div className="tags">
                    <div className="tag">Ages 5+</div>
                    <div className="tag">Vehicle</div>
                    <div className="tag">Mechanics</div>
                  </div>
                </div>
              );
            })}
          </Projects>
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.White} TextColor={Theme.Color.Dino}>
        <BasicInner>
          <CenteredTitle Title="How We Party" Class="headline" />
          <Timeline>
            <div className="time">
              15<span>min</span>
            </div>
            <div className="h3">Before Party</div>
            <p className="p-lg">
              A Play-Well instructor will arrive before the party is scheduled
              to start to set up.
            </p>
          </Timeline>
        </BasicInner>
      </BasicSection>

      {/*<BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        BorderTop={Theme.Color.Nova}
      >
        <BasicInner>
          <Questions>
            <div className="h3">FAQs for Parties</div>
            <div className="container">
              {Array.from(Array(8), (e, i) => {
                return (
                  <a className="h4" href="/">
                    What is the process for booking a party?
                  </a>
                );
              })}
            </div>
          </Questions>
        </BasicInner>
      </BasicSection>*/}

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <CenteredTitle
            Title="Are you ready to plan a Party with Play-Well?"
            Class="h3"
            TextColor={Theme.Color.Dino}
            MaxWidth="700px"
            PaddingBottom="30px"
          >
            <Btn
              Label="Request a Party"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/"
            />
          </CenteredTitle>
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default Parties;

//////////////////////////////////////////////////////////////////////
// End Component

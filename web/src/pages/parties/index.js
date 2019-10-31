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
import Section from 'components/library/Elements/Section';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
import GiantTextBlock from 'components/library/Section/GiantTextBlock';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
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
  BgColor: Theme.Color.Ocean,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: Theme.Color.Background,
  color: Theme.Color.Eggplant,
  playButton: true,
  playButtonBg: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
  gear: false,
  arrow: true,
};

// Begin Component
//////////////////////////////////////////////////////////////////////

const DeepseaTextBlock = styled.div`
  position: relative;
  text-align: center;
  max-width: calc(${Root.Size} * 17);
  margin: 0 auto;

  .h2,
  p {
    font-weight: bold;
  }

  .h2 {
    font-size: 114px;
    color: ${Theme.Color.Deepsea};
  }

  p {
    padding: calc(${Root.Size} / 6) calc(${Root.Size} * 1.5) 0
      calc(${Root.Size} * 1.5);
    line-height: 1.2;
    font-size: 44px;
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

    .h6,
    .tag {
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
      filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
    }
  }
`;
const Timeline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: calc(${Theme.Base.Size.Lg});

  .images,
  .text {
    flex: 1;
    min-width: 50%;
  }

  .images {
    height: calc(${Theme.Base.Size.Lg} * 6);
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: calc(${Theme.Base.Size.Lg} * 2);

    .gatsby-image-wrapper {
      position: absolute !important;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  .text {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(${Theme.Base.Size.Lg} * 6);
      padding-left: calc(${Theme.Base.Size.Lg} * 0.75);
      margin-left: calc(${Theme.Base.Size.Lg} * 0.75);
      position: relative;

      &:after {
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-image: linear-gradient(
          ${Theme.Color.Sunset} 40%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: right;
        background-size: 1px 10px;
        background-repeat: repeat-y;
      }

      &:before {
        left: calc(${Theme.Base.Size.Lg} / -10);
        position: absolute;
        content: '';
        z-index: 2;
        top: 50%;
        border-radius: 50%;
        width: calc(${Theme.Base.Size.Lg} / 5);
        height: calc(${Theme.Base.Size.Lg} / 5);
        border: 1px solid ${Theme.Color.Sunset};
        background: radial-gradient(
          ${Theme.Color.Sunset} 3px,
          ${Theme.Color.Background} 4px
        );
      }

      &:first-of-type {
        &:after {
          height: 50%;
          top: auto;
          bottom: 0;
        }
      }

      &:last-of-type {
        &:after {
          height: 50%;
        }
      }
    }
  }

  .h3,
  .time {
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
`;

const Questions = styled.div`
  .h3 {
    font-weight: 700;
    padding-bottom: calc(${Root.Size} / 2);
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a {
      min-width: 40%;
      flex: 1;
      margin-bottom: calc(${Root.Size} / 10);
      padding: calc(${Root.Size} / 2);
      font-weight: 700;
      color: ${Theme.Color.White};
      border-radius: calc(${Root.Size} / 10);

      &:nth-of-type(2n - 1) {
        margin-right: calc(${Root.Size} / 10);
      }

      &:nth-of-type(5n - 4) {
        background-color: ${Theme.Color.Ocean};
      }

      &:nth-of-type(5n - 3) {
        background-color: ${Theme.Color.Eggplant};
      }

      &:nth-of-type(5n - 2) {
        background-color: ${Theme.Color.Sunlight};
      }
      &:nth-of-type(5n - 1) {
        background-color: ${Theme.Color.Deepsea};
      }
      &:nth-of-type(5n) {
        background-color: ${Theme.Color.Nova};
      }
    }
  }
`;

const CTA = styled.div`
  max-width: calc(${Root.Size} * 11);
  margin: 0 auto;
  text-align: center;

  .h3 {
    color: ${Theme.Color.Dino};
    padding-bottom: calc(${Theme.Base.Size.Lg} / 2);
  }

  .centered {
    text-align: center;
    .h3 {
      font-weight: 700;
      padding-bottom: calc(${Root.Size} / 4);
    }
  }

  from {
    padding: ${Root.Size};
  }
`;
export const AbsoluteDecor = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 0 !important;
  padding-top: 100%;
  bottom: 0;
  left: 0;
  max-width: ${Root.Site.Width};
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    padding-top: ${Root.Site.Width};
    margin: 0 calc(50vw - calc(${Root.Site.Width} / 2));
  }

  .decor-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: auto;
    pointer-events: none;

    .ico {
      width: 100%;
      height: auto;
    }

    &.absolute-clouds {
      width: 35%;
      left: -5%;
      bottom: -9%;
    }

    &.absolute-gears {
      width: 35%;
      left: -15%;
      bottom: 4%;
      transform: scaleX(-1);
    }

    &.absolute-sailboat {
      width: 45%;
      left: auto;
      right: -12%;
      bottom: 3%;
    }

    &.absolute-plant-1 {
      width: 10%;
      left: 50%;
      bottom: 7%;
    }

    &.absolute-plant-2 {
      width: 12%;
      left: 40%;
      bottom: 10%;
    }
  }
`;



// Render Page
const Parties = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps} subNav={['birthday parties', 'special events']}>
        <h2>Let Us Engineer Your Child's Party</h2>
        <h6>
          Some of the most memorable and fun experiences kid's have together are
          at birthday parties.
        </h6>
        <Btn
          Label="Request a Party"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination="/"
        />
      </SplitHero>

      <BasicSection noPaddingTop noPaddingBottom>
        <AbsoluteDecor>
          <div className="decor-container absolute-clouds">
            <ImgMatch src="clouds.png" />
          </div>
        </AbsoluteDecor>
      </BasicSection>

      <BasicSection noPaddingBottom BgColor={Theme.Color.Ocean}>
        <BasicInner>
          <DeepseaTextBlock>
            <div className="h2">Well Supplied Fun</div>
            <p>
              At a Play-Well party, you provide the kids and we bring over
              20,000 pieces of LEGO and awesome project ideas!
            </p>
          </DeepseaTextBlock>
        </BasicInner>
          <CurveAndAngle
            AngleColor={Theme.Color.Background}
            CurveColor={Theme.Color.Deepsea}
            Clouds="1"
          >
          <AbsoluteDecor>
            <div className="decor-container absolute-gears">
              <ImgMatch src="plant-gears.png" />
            </div>
            <div className="decor-container absolute-sailboat">
              <ImgMatch src="sailboat.png" />
            </div>
            <div className="decor-container absolute-plant-1">
              <ImgMatch src="plant-wavy-1.png" />
            </div>
            <div className="decor-container absolute-plant-2">
              <ImgMatch src="plant-wavy-2.png" />
            </div>
          </AbsoluteDecor>
        </CurveAndAngle>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <CenteredTitle Title="Our Projects" Class="headline" />
          <Projects>
            {ProjectsList.map((project, index) => {
              return (
                <div className="project" key={index}>
                  <ImgMatch src={project.image} />
                  <div className="h6">{project.title}</div>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, index) => {
                      return (
                        <div className="tag" key={index + '-tag'}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Projects>
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.White} TextColor={Theme.Color.Dino}>
        <BasicInner wideWidth>
          <CenteredTitle Title="How We Party" Class="headline" />
          <Timeline>
            <div className="images">
              <ImgMatch src="random-1.jpg" />
              <ImgMatch src="random-2.jpg" />
              <ImgMatch src="random-3.jpg" />
              <ImgMatch src="random-4.jpg" />
            </div>
            <div className="text">
              <div className="container">
                <div className="time">
                  15<span>min</span>
                </div>
                <div className="h3">Before Party</div>
                <p className="p-lg">
                  A Play-Well instructor will arrive before the party is
                  scheduled to start to set up.
                </p>
              </div>
              <div className="container">
                <div className="time">
                  1<span>hr</span> 15<span>min</span>
                </div>
                <div className="h3">Play Time</div>
                <p className="p-lg">
                  The real fun begins! Guests build an engaging project, guided
                  by the instructor.
                </p>
              </div>
              <div className="container">
                <div className="time">
                  15<span>min</span>
                </div>
                <div className="h3">Cleanup</div>
                <p className="p-lg">
                  Queue the 'Cleanup Song'. Everyone helps take apart the
                  projects and cleanup together.
                </p>
              </div>
              <div className="container">
                <div className="time">
                  15<span>min</span>
                </div>
                <div className="h3">Over and Out</div>
                <p className="p-lg">
                  It may take us 15 minutes to remove our materials. This is a
                  great ime to transition your guests to food or another
                  activity.
                </p>
              </div>
            </div>
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
        BorderTop={Theme.Color.Nova}
      >
        <BasicInner>
          <CTA>
            <CenteredTitle
              Title="Are you ready to plan a Party with Play-Well?"
              Class="h3"
            />
            <Btn
              Label="Request a Party"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/"
            />
          </CTA>
        </BasicInner>
      </BasicSection>

      <Section bg={ThemeProps.BgColor} pb={0}>
        <SplitLinks>
          <SplitLink
            title="Adults need purposeful play too."
            message="View our team building opportunities"
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/"
            themeProps={ThemeProps}
            first
          />
          <SplitLink
            title="Need help with a special Event?"
            message="Learn about our partnerships"
            to="/"
            themeProps={ThemeProps}
            last
          />
        </SplitLinks>
      </Section>
    </Layout>
  );
};

export default Parties;

//////////////////////////////////////////////////////////////////////
// End Component

const ProjectsList = [
  {
    title: 'Race Car',
    image: 'project-1.jpg',
    link: '/',
    description: 'Competitive racing',
    tags: ['Ages 5+', 'Vehicles', 'Mechanics'],
  },
  {
    title: 'Off Roader',
    image: 'project-2.jpg',
    link: '/',
    description: 'Traverse obstacle course',
    tags: ['Ages 5+', 'Vehicles', 'Mechanics'],
  },
  {
    title: 'Parade Float',
    image: 'project-3.jpg',
    link: '/',
    description: 'Creative build and play',
    tags: ['Ages 5+', 'Vehicles', 'Mechanics'],
  },
  {
    title: 'Merry Go Round',
    image: 'project-1.jpg',
    link: '/',
    description: 'Creative build and play',
    tags: ['Ages 5+', 'Vehicles', 'Mechanics'],
  },
  {
    title: 'Battlerack',
    image: 'project-2.jpg',
    link: '/',
    description: 'Competitive jousting',
    tags: ['Ages 5+', 'Vehicles', 'Mechanics'],
  },
];

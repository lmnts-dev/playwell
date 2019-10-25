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
      filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.4)});
    }
  }
`;
const Timeline = styled.div`
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

const PartyForm = styled.div`
  max-width: calc(${Root.Size} * 11);
  margin: 0 auto;

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
      </SplitHero>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <GiantTextBlock giantText="Well Supplied Fun" />
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
          <PartyForm>
            <div className="centered">
              <div className="h3">
                Thank you for your interest in Play-Well parties!
              </div>
              <p className="p-lg">
                Please provide us with information about your preferred party
                date and location. We will let you know if we can do a party at
                your location on the date requested. To view pricing for your
                area, please choose your location.
              </p>
            </div>
            <form>
              {/*<input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <select></select>
                        <input type="text" placeholder="City"/>
                        <textarea placeholder="Comments, questions, etc."/>
                        <input type="email" placeholder="Your email address"/>
                        <input />
                        <label>How did you hear about us?</label>
                        <input type="radio">From a Play-Well Instuctor</input> */}
              <button type="submit">Submit Request</button>
            </form>
            <p className="centered p-lg">
              Once you've submitted your request, you should receive an email
              with more information in 1-2 minutes. If you don't see it in your
              inbox, please check your promotions or spam folder.
            </p>
          </PartyForm>
        </BasicInner>
      </BasicSection>
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
    description:
      'Competitive racing',
    tags: [ 'Ages 5+', 'Vehicles', 'Mechanics' ],
  },
  {
    title: 'Off Roader',
    image: 'project-2.jpg',
    link: '/',
    description:
      'Traverse obstacle course',
    tags: [ 'Ages 5+', 'Vehicles', 'Mechanics' ],
  },    
  {
    title: 'Parade Float',
    image: 'project-3.jpg',
    link: '/',
    description:
      'Creative build and play',
    tags: [ 'Ages 5+', 'Vehicles', 'Mechanics' ],
  },
  {
    title: 'Merry Go Round',
    image: 'project-1.jpg',
    link: '/',
    description:
      'Creative build and play',
    tags: [ 'Ages 5+', 'Vehicles', 'Mechanics' ],
  },  
  {
    title: 'Battlerack',
    image: 'project-2.jpg',
    link: '/',
    description:
      'Competitive jousting',
    tags: [ 'Ages 5+', 'Vehicles', 'Mechanics' ],
  }
];
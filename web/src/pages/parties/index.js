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
import BirthdayPartiesForm from 'components/library/Forms/BirthdayParties/BirthdayParties';

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
  PrimaryColor: Theme.Color.Eggplant,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Eggplant,
};

const HeroProps = {
  bg: Theme.Color.Background,
  color: Theme.Color.Eggplant,
  playButton: true,
  video: "https://www.youtube.com/watch?v=mN26kaFk_YM&t=",
  playButtonBg: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
  gear: false,
  arrow: true,
  subNavColor: Theme.Color.Nova,
};

// Begin Component
//////////////////////////////////////////////////////////////////////


export const OverflowHidden = styled.div`
  overflow: hidden;
`;

const DeepseaTextBlock = styled.div`
  position: relative;
  text-align: center;
  max-width: calc(${Root.Size} * 17);
  margin: 0 auto;

  .h2,
  p {
    font-weight: bold;
  }

  .btn-inner {
    margin-top: calc(${Theme.Base.Size.Lg} / 2);
  }

  .h2 {
    font-size: 114px;
    color: ${Theme.Color.Deepsea};
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 4rem;
      padding-top: calc(${Root.Size});
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding-top: 0;
    }
  }

  p {
    padding: calc(${Root.Size} / 6) calc(${Root.Size} * 1.5) 0
      calc(${Root.Size} * 1.5);
    line-height: 1.2;
    font-size: 44px;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 24px;
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding: calc(${Root.Size} / 6) 0 calc(${Root.Size} * 1.5) 0;
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
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      width: 47.5%;
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      width: 100%;
      margin-right: 0 !important;
    }

    .h6,
    .tag {
      font-weight: 700;
    }

    .h6 {
      padding: calc(${Root.Size} / 2) 0 calc(${Root.Size} / 10) 0;
    }

    p {
      padding-bottom: calc(${Root.Size} / 20);
    }

    .tags {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

      .tag {
        font-size: 12px;
        color: ${Theme.Color.Nova};
        padding: 0 calc(${Root.Size} / 8);
        white-space: nowrap;
        margin-top: calc(${Root.Size} / 8);
      }
    }

    &:nth-of-type(3n) {
      margin-right: 0;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        margin-right: 5%;
      }
    }

    &:nth-of-type(2n) {
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        margin-right: 0;
      }
    }

    &:last-of-type {
      margin-right: 0 !important;
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
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: none;
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
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        height: auto;
        padding-bottom: calc(${Theme.Base.Size.Lg});
        margin-left: 0;
        padding-left: calc(${Theme.Base.Size.Lg} / 2);
      }

      .mobile-image {
        display: none;
        max-width: calc(${Theme.Base.Size.Lg} * 7);
        height: 0;
        padding-top: calc(${Theme.Base.Size.Lg} * 4);
        margin-bottom: calc(${Theme.Base.Size.Lg} / 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          display: block;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          padding-top: 57%;
        }
      }

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
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          top: 25%;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          top: 15%;
        }
      }

      &:first-of-type {
        &:after {
          height: 50%;
          top: auto;
          bottom: 0;
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            height: 75%;
          }
          @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
            height: 85%;
          }
        }
      }

      &:last-of-type {
        &:after {
          height: 50%;
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            height: 25%;
          }
          @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
            height: 15%;
          }
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
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      font-size: 72px;
    }

    span {
      font-size: 41px;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        font-size: 35px;
      }
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
  pointer-events: none;
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

    &.absolute-gears {
      width: 35%;
      left: -15%;
      bottom: 4%;
      transform: scaleX(-1);
      @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
        left: 0;
        transform: scaleX(-1) rotate(45deg);
      }
    }

    &.absolute-sailboat {
      width: 45%;
      left: auto;
      right: -18%;
      bottom: 3%;
      @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
        width: 50%;
        bottom: 0;
      }
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

const Centered = styled(CenteredTitle)`
  .mobile-left {
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      text-align: left;
    }
  }
`;


// Render Page
const Parties = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero 
        {...HeroProps} 
        subNav={[
          { label: 'birthday parties', 
            active: true,
            link: '/parties/birthday-parties' 
          },
          {
            label: 'special events',
            link: '/parties/special-events',
          },
        ]}
      >
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

      <OverflowHidden>
        <BasicSection noPaddingBottom BgColor={Theme.Color.Ocean}>
          <BasicInner wideWidth>
            <DeepseaTextBlock>
              <div className="h2">Well Supplied Fun</div>
              <p>
                At a Play-Well party, you provide the kids and we bring over
                20,000 pieces of LEGO and awesome project ideas!
              </p>
              <Btn
                Label="Party Info PDF"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
                Destination="/"
              />
            </DeepseaTextBlock>
          </BasicInner>
          <CurveAndAngle
            AngleColor={Theme.Color.Background}
            CurveColor={Theme.Color.Galaxy}
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
      </OverflowHidden>

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
          <Centered Title="How We Party" Class="headline mobile-left" />
          <Timeline>
            <div className="images">
              <ImgMatch src="party.jpg" />
              <ImgMatch src="party.jpg" />
              <ImgMatch src="party.jpg" />
              <ImgMatch src="party.jpg" />
            </div>
            <div className="text">
              <div className="container">
                <ImgMatch className="mobile-image" src="party.jpg" />
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
                <ImgMatch className="mobile-image" src="party.jpg" />
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
                <ImgMatch className="mobile-image" src="party.jpg" />
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
                <ImgMatch className="mobile-image" src="party.jpg" />
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
                  <Link className="h4" to="/">
                    What is the process for booking a party?
                  </Link>
                );
              })}
            </div>
          </Questions>
        </BasicInner>
      </BasicSection>*/}

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <Box textAlign="center">
            <BirthdayPartiesForm
              formName="birthday-parties-contact"
              title="Thank you for your interest in Play-Well parties!"
              footnote="Once you've submitted your request, you should receive an email with more info in 1-2 minutes. If you don't see it in your inbox, please check your spam promotions or spam folder."
            />
          </Box>
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

// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import Section from 'components/library/Elements/Section';
import Spacer from 'components/library/Spacer';
import ImgMatch from 'components/core/ImgMatch';
import { Box, Flex, Text } from 'components/library/Elements';

// Sections
import HomeHero from 'sections/HomeHero';
import HomeIntro from 'sections/HomeIntro';
import HomeCommunity from 'sections/HomeCommunity';
import HomePrograms from 'sections/HomePrograms';
import HomeImpact from 'sections/HomeImpact';
import HomeBetterFuture from 'sections/HomeBetterFuture';
import LocationPlayZone from 'sections/LocationPlayZone';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Ocean,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Nova,
};

// Render Page
const HomePage = () => (
  <Layout {...ThemeProps}>
    <Main>
      <HomeHero slides={HeroSlides} Decorator={Decorator} />
      <Spacer indent>Scroll</Spacer>
      <HomeIntro />
      <HomeCommunity slides={CommunitySlides} />
      <HomeBetterFuture themeProps={ThemeProps} />
      <Decorator>
        <div className="decorator__better-future decorator__better-future--top">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__better-future decorator__better-future--bottom">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
      </Decorator>
      <HomeImpact />
      <HomePrograms />
      <LocationPlayZone />
    </Main>
  </Layout>
);


// Styles
const Main = styled.main`
  overflow: hidden;
`;

const Decorator = styled(Box)`
  position: relative;

  .decorator__hero {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
      right: -100px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -170px;
        width: 340px;
      }
    }

    &--waterfall {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 3);
      

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 0;
        width: 600px;
      }
    }

    &--volcano {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 9);
      

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 35vw;
        width: 400px;
      }
    }

    &--left {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -70px;
        width: 180px;
      }
    }
  }

  .decorator__footer {
    position: absolute;
    /* top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1); */
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -25px;
        width: 180px;
      }
    }

    &--bottom {
      left: 50%;
      width: 400px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {

        width: 400px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {

        width: 400px;
      }
    }
  }

  .decorator__better-future {
    position: absolute;
    z-index: 4;

    &--top {
      bottom: calc(${Theme.Root.Size} * 1.6);
      right: -130px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -190px;
        width: 300px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -230px;
        width: 340px;
      }
    }

    &--bottom {
      bottom: calc(${Theme.Root.Size} * -0.8);
      right: -20px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -20px;
        width: 300px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -30px;
        width: 340px;
      }
    }
  }
`;

// Data
const HeroSlides = [
  {
    index: 0,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
  {
    index: 1,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
  {
    index: 2,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
];

const CommunitySlides = [
  {
    index: 0,
    header: 'Building a coral reef out of Lego materials',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
  {
    index: 1,
    header: 'Building a coral reef out of Lego materials',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
  {
    index: 2,
    header: 'Building a coral reef out of Lego materials',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
  {
    index: 3,
    header: 'Building a coral reef out of Lego materials',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
];

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

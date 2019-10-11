// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

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

// Styles
import { Decorator, Main } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Nova,
};

// Render Page
const HomePage = ({ bgColor, textColor }) => (
  <Layout {...ThemeProps}>
    <Main>
      <HomeHero slides={HeroSlides} />
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

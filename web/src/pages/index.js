// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Sections
import HomeHero from 'sections/HomeHero';
import HomeIntro from 'sections/HomeIntro';
import HomeCommunity from 'sections/HomeCommunity';

// Styles
import { Scroll, Intro } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Sunset,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

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

// Render Page
const HomePage = ({ bgColor, textColor }) => (
  <Layout {...ThemeProps}>
    <HomeHero slides={HeroSlides} />
    <Scroll>
      <Scroll.Positioner>
        <span>Scroll</span>
        <Scroll.Line />
      </Scroll.Positioner>
    </Scroll>
    <HomeIntro />
    <HomeCommunity slides={CommunitySlides} />
    <Section bg="Dino" pt={12} pb={12} />
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

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
import Btn from 'components/library/Btn';

// Sections
import HomeHero from 'sections/HomeHero';

// Styles
import {} from './styles.scss';

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

// Render Page
const HomePage = ({ bgColor, textColor }) => (
  <Layout {...ThemeProps}>
    <HomeHero slides={HeroSlides} />
    <Section textAlign="left" pt={0}>
      {/* <Box width={[1, 3 / 4, 7 / 10, 7 / 10, 1 / 2]} px={[0, 0, 2, 6, 8]}> */}
      <Box width={[1, 3 / 4, 7 / 10, 7 / 10, 1 / 2]}>
        <Text as="span" color="Galaxy" fontSize={[1, 2, 2]} mb={1}>
          Taking our imagination up a level
        </Text>
        <Text as="h2" fontSize={[7]} color="Sunset">
          Creativity, confidence &amp; collaboration.
        </Text>{' '}
        <Text as="p" color="Galaxy" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
        <Btn
          External
          Label="What We Do"
          BgColor={props => props.theme.Color.Primary}
          TextColor={props => props.theme.Color.White}
        />
      </Box>
    </Section>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

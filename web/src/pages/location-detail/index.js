// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import Section from 'components/library/Elements/Section';
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';

// Sections

// Styles
import { Hero } from './styles.scss';

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

const HeroProps = {
  bg: 'Background',
  color: 'Dino',
  textAlign: 'left',
};

// Render Page
const LocationDetail = () => (
  <Layout {...ThemeProps}>
    <Hero>
      <Hero.Inner>
        <Box width={1} px={Root.Grid.Indent.X}>
          <Hero.Tags as="ul">
            <li>
              <Link to={'/'}>Robotics</Link>
            </li>
            <li>
              <Link to={'/'}>Intro to STEM</Link>
            </li>
            <li>
              <Link to={'/'}>Gaming</Link>
            </li>
            <li>
              <Link to={'/'}>Advanced Engineering</Link>
            </li>
            <li>
              <Link to={'/'}>Engineering Themes</Link>
            </li>
          </Hero.Tags>
        </Box>
        <Box width={[1, 1, 8 / 10, 6 / 10]} px={Root.Grid.Indent.X}>
          <Hero.Heading>
            STEM Education &amp; Engineering in <span>STATE</span>
          </Hero.Heading>
          <Box mr={1} display="inline-block">
            <Btn
              External
              Label="View Programs"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
            />
          </Box>
          <Box display="inline-block">
            <Btn
              External
              Label="Contact Manager"
              BgColor={Theme.Color.Blush}
              TextColor={Theme.Color.Primary}
            />
          </Box>
        </Box>
      </Hero.Inner>
    </Hero>
  </Layout>
);

export default LocationDetail;

//////////////////////////////////////////////////////////////////////
// End Component

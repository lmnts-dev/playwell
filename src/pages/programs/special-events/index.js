// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import SplitHero from 'components/library/Hero/SplitHero';
import Btn from 'components/library/Btn';

// Styles

// Constants
import { Box, Flex } from 'components/library/Elements';
import { Theme, Root } from 'constants/Theme';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  bg: 'Sky',
  color: 'White',
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButtonBg: 'Nova',
};

// Render Page
const HomePage = props => (
  <Layout>
    <SplitHero {...HeroProps}>
      <h2>Join a team of creative problem solvers &amp; creators</h2>
      <h6>We are passionate specialists in STEM Education.</h6>
      <Btn
        Label="View Listings"
        BgColor={Theme.Color.Galaxy}
        TextColor="white"
      />
    </SplitHero>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

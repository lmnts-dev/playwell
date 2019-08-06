// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import ProgramHero from 'components/library/Hero/ProgramHero';
import Btn from 'components/library/Btn';

// Styles

// Constants
import { Box, Flex } from 'components/library/Elements';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

import BgImage from './assets/dev-image.jpeg';

const HeroProps = {
  Background: Theme.Color.Secondary,
  TextColor: 'white',
  Padding: [6, 0, 3, 1],
  ImgMatch: BgImage,
};

// Render Page
const HomePage = props => (
  <Layout>
    <ProgramHero>
      <h2>Join a team of creative problem solvers &amp; creators</h2>
      <h6>We are passionate specialists in STEM Education.</h6>
      <Btn
        Label="View Listings"
        BgColor={Theme.Color.Galaxy}
        TextColor="white"
      />
    </ProgramHero>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import SimpleHero from 'components/library/Hero/SimpleHero';
import Btn from 'components/library/Btn';

// Styles
import { ProgramHero } from './styles.scss';

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
    <Box as="section" bg="Sky" px={1} color="white">
      <ProgramHero>
        <Flex width={1} flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 2]} pl={[0, 0, 2, 6]}>
            <h2>Join a team of creative problem solvers &amp; creators</h2>
            <h6>We are passionate specialists in STEM Education.</h6>
            <Btn
              Label="View Listings"
              BgColor={Theme.Color.Galaxy}
              TextColor="white"
            />
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} pl={[0, 0, 2, 5]} />
        </Flex>
      </ProgramHero>
    </Box>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

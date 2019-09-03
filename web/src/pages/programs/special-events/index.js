// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import SplitHero from 'components/library/Hero/SplitHero';
import { Btn } from 'components/library/Btn';
import SubNav from 'components/library/SubNav';

// Styles

// Constants
import { Box, Flex } from 'components/library/Elements';

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
  gear: true,
};

// Render Page
const ProgramPage = () => {
  return (
    <Layout>
      <SplitHero {...HeroProps}>
        <h2>Join a team of creative problem solvers &amp; creators</h2>
        <h6>We are passionate specialists in STEM Education.</h6>
        <Btn
          Label="View Listings"
          BgColor={props => props.theme.Color.Galaxy}
          TextColor="white"
        />
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>
    </Layout>
  );
};

export default ProgramPage;

//////////////////////////////////////////////////////////////////////
// End Component

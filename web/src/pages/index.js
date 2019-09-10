// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';

// Constants
// import { Box, Flex } from '../components/library/Elements';
import ImgMatch from '../components/core/ImgMatch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomePage = props => (
  <Layout>
    <main
      style={{
        padding: '20px',
        backgroundColor: props => props.Theme.Color.Background,
        flex: '1',
        color: props => props.Theme.Color.Text,
      }}
    >
      <ImgMatch src="brandmark.png" AltText="brandmark" />
    </main>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

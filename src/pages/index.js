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
import { Box } from '../components/elements';

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
      <h1 style={{ textAlign: 'center' }}>lmnts.dev</h1>
      <p style={{ textAlign: 'center', width: '100%' }}>react.js starter v0</p>
      <Box bg="black" width={['100%', '50%']} py={80} color="white">
        Hello
      </Box>
    </main>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

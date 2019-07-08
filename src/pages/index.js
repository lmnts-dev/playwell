// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomePage = props => (
  <Layout>
    <main style={{ padding: '20px', backgroundColor: '#141414', flex: '1', color: 'pink' }}>
      <h1 style={{ textAlign: 'center' }}>lmnts.dev</h1>
      <p style={{ textAlign: 'center', width: '100%' }}>react.js starter v0</p>
    </main>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

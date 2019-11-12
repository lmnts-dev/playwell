// Contact page:
// This is the contact page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';

// Sections
import ContactHero from 'sections/ContactHero';
import ContactInfo from 'sections/ContactInfo';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ContactStyleOverrides = createGlobalStyle`
  body  {
    background-color: ${Theme.Color.Deepsea} !important;
  }

  .site-grid {
     max-width: 100% !important;
  };
`;

// Props
const ThemeProps = {
  BgColor: Theme.Color.Deepsea,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Nova,
};

// Render Page
const ContactPage = () => {
  // Use our hook's data as source
  const fetchedData = DataFetch();

  // For debugging only.
  // console.log(fetchedData);

  return (
    <Layout {...ThemeProps}>
      <ContactStyleOverrides />
      <Main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'spaceBetween',
          background: Theme.Color.Deepsea,
        }}
      >
        <ContactHero data={fetchedData} style={{ flex: 1, height: 'auto' }} />
        <ContactInfo />
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  overflow: hidden;
`;

export default ContactPage;

//////////////////////////////////////////////////////////////////////
// End Component

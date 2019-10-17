// Contact page:
// This is the contact page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';

// Sections
import ContactHero from 'sections/ContactHero';
import ContactInfo from 'sections/ContactInfo';

// Constants
import { Theme, Root } from 'constants/Theme';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

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
      <Main>
        <ContactHero data={fetchedData} />
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

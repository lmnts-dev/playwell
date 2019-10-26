// Host a Program page:
// This is the host a program page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Sections
import AfterSchoolHero from 'sections/AfterSchoolHero';
import AfterSchoolClasses from 'sections/AfterSchoolClasses';
import AfterSchoolOverview from 'sections/AfterSchoolOverview';
import AfterSchoolContact from 'sections/AfterSchoolContact';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Styled
const Main = styled.main`
  overflow: hidden;
`;

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Lilac,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Nova,
};

// Render Page
const AfterSchoolEnrichmentPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <AfterSchoolHero />
        <AfterSchoolClasses />

        <Section bg="Background" pt={14} pb={14}>
          <Text color="Primary" fontSize="4rem" fontWeight={600}>Testimonials</Text>
        </Section>

        <AfterSchoolOverview />
        <AfterSchoolContact />
      </Main>
    </Layout>
  );
};

export default AfterSchoolEnrichmentPage;

//////////////////////////////////////////////////////////////////////
// End Component

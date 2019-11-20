// Host a Program page:
// This is the host a program page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';

// Sections
import Hero from 'sections/AfterSchoolHero';
import Classes from 'sections/AfterSchoolClasses';
import Testimonials from 'sections/AfterSchoolTestimonials';
import Overview from 'sections/AfterSchoolOverview';
import Contact from 'sections/AfterSchoolContact';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Eggplant,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Nova,
};

// Render Page
const AfterSchoolEnrichmentPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Hero />
      <Classes />
      <Testimonials />
      <Overview />
      <span id="request"/>
      <Contact />
    </Layout>
  );
};

export default AfterSchoolEnrichmentPage;

//////////////////////////////////////////////////////////////////////
// End Component

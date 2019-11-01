// Workshops page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';

// Sections
import ClassesHero from 'sections/ClassesHero';
import WorkshopsCulture from 'sections/WorkshopsCulture';
import SummerCampsSplitLinks from 'sections/SummerCampsSplitLinks';
import WorkshopsTestimonials from 'sections/WorkshopsTestimonials';
import SummerCampsNewsletter from 'sections/SummerCampsNewsletter';

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
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Sunset,
};

// Render Page
const ClassesPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <ClassesHero />
        <WorkshopsCulture />
        <WorkshopsTestimonials />
        <SummerCampsNewsletter />
        <SummerCampsSplitLinks themeProps={ThemeProps} />
        {/* <AfterSchoolContact /> */}
      </Main>
    </Layout>
  );
};

export default ClassesPage;

//////////////////////////////////////////////////////////////////////
// End Component

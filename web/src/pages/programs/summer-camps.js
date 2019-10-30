// Summer Camps page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import SummerCampsHero from 'sections/SummerCampsHero';
import SummerCampsCulture from 'sections/SummerCampsCulture';
import SummerCampsSplitLinks from 'sections/SummerCampsSplitLinks';
import SummerCampsTestimonials from 'sections/SummerCampsTestimonials';
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
const SummerCampsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <SummerCampsHero />
        <SummerCampsCulture />
        <SummerCampsTestimonials />
        <SummerCampsNewsletter />
        <SummerCampsSplitLinks themeProps={ThemeProps} />
        {/* <AfterSchoolContact /> */}
      </Main>
    </Layout>
  );
};

export default SummerCampsPage;

//////////////////////////////////////////////////////////////////////
// End Component

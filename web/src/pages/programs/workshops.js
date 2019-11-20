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
import WorkshopsHero from 'sections/WorkshopsHero';
import WorkshopsCulture from 'sections/WorkshopsCulture';
import WorkshopsTestimonials from 'sections/WorkshopsTestimonials';
import SummerCampsNewsletter from 'sections/SummerCampsNewsletter';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

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
const WorkshopsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <WorkshopsHero />
        <WorkshopsCulture />
        <WorkshopsTestimonials />
        <SummerCampsNewsletter />
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Dino}
          BorderTop={Theme.Color.Sunset}
          noPaddingBottom
        >
          <BasicInner wideWidth>
            <Box textAlign="center">
              <SplitLinks>
                <SplitLink
                  title="Keep exploring"
                  message="Learn about what our summer camps look like"
                  // message={'Keep exploring programs in ' + countyStateString + '.'}
                  to={'/programs/summer-camps'}
                  themeProps={ThemeProps}
                  first
                />
                <SplitLink
                  title="What do classes look like?"
                  message="Learn more about our classes"
                  to={'/programs/classes'}
                  themeProps={ThemeProps}
                  last
                />
              </SplitLinks>
            </Box>
          </BasicInner>
        </BasicSection>
        {/* <AfterSchoolContact /> */}
      </Main>
    </Layout>
  );
};

export default WorkshopsPage;

//////////////////////////////////////////////////////////////////////
// End Component

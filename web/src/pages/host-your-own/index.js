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

// Sections
import HostProgramHero from 'sections/HostProgramHero';
import HostProgramHow from 'sections/HostProgramHow';
import HostProgramSplitLinks from 'sections/HostProgramSplitLinks';

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
const HostYourOwnPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <HostProgramHero />
        <HostProgramHow />
        <HostProgramSplitLinks themeProps={ThemeProps} />
      </Main>
    </Layout>
  );
};

export default HostYourOwnPage;

//////////////////////////////////////////////////////////////////////
// End Component

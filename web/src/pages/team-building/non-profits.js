// NonProfitsPage page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import Marquee from 'components/library/Section/Marquee';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import NonProfitsHero from 'sections/NonProfitsHero';
import NonProfitsOutreach from 'sections/NonProfitsOutreach';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Props
const ThemeProps = {
  BgColor: Theme.Color.White,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

// Render Page
const NonProfitsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <NonProfitsHero />
      <NonProfitsOutreach />

      <BasicSection BgColor={Theme.Color.White} BorderTop={Theme.Color.Clay}>
        <BasicInner>
          <CenteredTitle
            Title={null}
            Class="h3"
            TextColor={Theme.Color.Sunset}
          />
        </BasicInner>
        <Marquee
          images={[
            'visa.png',
            'microsoft.png',
            'clorox.png',
            'google.png',
            'pixar.jpeg',
          ]}
          SquareFormat
          Shadow
        />
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner noPaddingRight>
          <TextWithManyImages
            Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
            Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
          />
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default NonProfitsPage;

//////////////////////////////////////////////////////////////////////
// End Component

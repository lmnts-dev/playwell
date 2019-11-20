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
import Section from 'components/library/Elements/Section';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
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
  PrimaryColor: Theme.Color.Eggplant,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Eggplant,
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
        BorderTop
      >
        <TextWithManyImages
          Reversed
          Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
          Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
        />
      </BasicSection>

      <Section bg={ThemeProps.BgColor} pb={0}>
        <SplitLinks>
          <SplitLink
            title="Keep reading."
            message="Learn about Our Values &amp; why we do what we do."
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/who-we-are/why"
            themeProps={ThemeProps}
            first
          />
          <SplitLink
            title="Here ye, here ye."
            message="Learn about Our Story &amp; where it all began."
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/who-we-are"
            themeProps={ThemeProps}
            last
          />
        </SplitLinks>
      </Section>
    </Layout>
  );
};

export default NonProfitsPage;

//////////////////////////////////////////////////////////////////////
// End Component

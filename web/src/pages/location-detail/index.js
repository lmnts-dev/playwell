// Location detail template:
// This is the data template for the Locations Detail page
// todo: Use <Spacer in place of <Scroll && add props to <Spacer

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import Layout from 'components/core/Layout';
import Section from 'components/library/Elements/Section';
import { Box, Flex, Text } from 'components/library/Elements';
import SpacerCentered from 'components/library/Spacer/Centered';

// Sections
import LocationHero from 'sections/LocationHero';
import LocationCoordinators from 'sections/LocationCoordinators';
import LocationSplitSection from 'sections/LocationSplitSection';
import LocationPrograms from 'sections/LocationPrograms';
import LocationEvents from 'sections/LocationEvents';
import Quote from 'sections/Quote';
import LocationIntro from 'sections/LocationIntro';
import LocationPlayCenter from 'sections/LocationPlayCenter';

import LegoList from 'components/library/Section/LegoList';

// Styles
import { Hero, Spacer, Intro, Scroll, Decorator } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Dino,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

// Render Page
const LocationDetail = () => (
  <Layout {...ThemeProps}>
    <Box
      position="relative"
      css={css`
        overflow: hidden;
        z-index: 9;
      `}
    >
      <Decorator className="decorator__hero decorator__hero--top">
        <ImgMatch src="cloud-big.png" AltText="Cloud" />
      </Decorator>

      <Decorator className="decorator__hero decorator__hero--bottom">
        <ImgMatch src="cloud-big.png" AltText="Cloud" />
      </Decorator>
    </Box>

    <LocationHero />

    <Section bg="Dino" pt={0} pb={0} fullWidth>
      <ImgMatch
        src="locations-hero.jpg"
        AltText="STEM Education &amp; Engineering in"
      />
    </Section>

    <SpacerCentered />
    
    <LocationIntro />
    <LocationSplitSection />
    <LocationCoordinators cities={Cities} />
    {/* <LocationEvents /> */}

    <Section bg="White">
      <LegoList />
    </Section>

    <Quote color="Sunset">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
      enim sed magna vestibulum, nec imperdiet orci egestas. Sed in magna
      sapien.
    </Quote>

    <LocationPrograms />

    <Scroll>
      <Scroll.Positioner>
        <span>Play</span>
        <Scroll.Line />
      </Scroll.Positioner>
    </Scroll>

    <Box
      position="relative"
      css={css`
        z-index: 9;
      `}
    >
      <Decorator className="decorator__footer decorator__footer--top">
        <ImgMatch src="cloud-small.png" AltText="Cloud" />
      </Decorator>
    </Box>

    <LocationPlayCenter />

    <Box
      position="relative"
      css={css`
        z-index: 9;
      `}
    >
      <Decorator className="decorator__footer decorator__footer--bottom">
        <ImgMatch src="volcano.png" AltText="Cloud" />
      </Decorator>
    </Box>
  </Layout>
);

// Data
const Cities = [
  {
    id: 0,
    city: 'Apache Junction',
    state: 'arizona',
    role: 'manager',
    name: 'Jennifer Gaona',
    email: 'jen@gaonoa.com',
    phone: '+1 123 456 7890',
  },
  {
    id: 1,
    city: 'Avondale',
    state: 'arizona',
    role: 'manager',
    name: 'Jennifer Gaona',
    email: 'jen@gaonoa.com',
    phone: '+1 123 456 7890',
  },
  {
    id: 2,
    city: 'Benson',
    state: 'arizona',
    role: 'manager',
    name: 'Jennifer Gaona',
    email: 'jen@gaonoa.com',
    phone: '+1 123 456 7890',
  },
  {
    id: 3,
    city: 'Buckeye',
    state: 'arizona',
    role: 'manager',
    name: 'Jennifer Gaona',
    email: 'jen@gaonoa.com',
    phone: '+1 123 456 7890',
  },
  {
    id: 4,
    city: 'Carefree',
    state: 'arizona',
    role: 'manager',
    name: 'Jennifer Gaona',
    email: 'jen@gaonoa.com',
    phone: '+1 123 456 7890',
  },
];

export default LocationDetail;

//////////////////////////////////////////////////////////////////////
// End Component

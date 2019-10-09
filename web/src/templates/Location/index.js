// Location detail template:
// This is the data template for the Locations Detail page
// todo: Use <Spacer in place of <Scroll && add props to <Spacer

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import ImgMatch from 'components/core/ImgMatch';
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
import LocationPlayZone from 'sections/LocationPlayZone';

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
const LocationDetail = ({ pageContext }) => {
  // For Debugging Purposes only
  console.log(pageContext);
  console.log(pageContext.managers.manager);

  // Build Page
  return (
    <Layout {...ThemeProps}>
      <LocationHero pageContext={pageContext} />

      <Section pt={0} pb={0} fullWidth>
        <ImgMatch
          src="locations-hero.jpg"
          AltText="STEM Education &amp; Engineering in"
        />
      </Section>

      <SpacerCentered />

      <LocationIntro pageContext={pageContext} />
      <LocationSplitSection />
      <LocationCoordinators pageContext={pageContext} />
      
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

      <Decorator
        css={css`
          position: relative;
        `}
      >
        <div className="decorator__footer decorator__footer--top">
          <ImgMatch src="cloud-small.png" AltText="Cloud" />
        </div>
      </Decorator>

      <LocationPlayZone />

      {/* <Decorator>
      <div className="decorator__footer decorator__footer--bottom">
        <ImgMatch src="volcano.png" AltText="Cloud" />
      </div>
    </Decorator> */}
    </Layout>
  );
};

export default LocationDetail;

//////////////////////////////////////////////////////////////////////
// End Component

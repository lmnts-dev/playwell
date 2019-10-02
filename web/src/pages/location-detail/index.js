// Location detail template:
// This is the data template for the Locations Detail page
// todo: make <Spacer /> a component

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import Layout from 'components/core/Layout';
import Section from 'components/library/Elements/Section';
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';

// Sections
import LocationCoordinators from 'sections/LocationCoordinators';
import LocationSplitSection from 'sections/LocationSplitSection';
import LocationEvents from 'sections/LocationEvents';

// Styles
import { Hero, Spacer, Intro } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Sunset,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

// Render Page
const LocationDetail = () => (
  <Layout {...ThemeProps}>
    <Hero>
      <Hero.Inner>
        <Box width={1} px={Root.Grid.Indent.X}>
          <Hero.Tags>
            <li>
              <Link to={'/'}>Robotics</Link>
            </li>
            <li>
              <Link to={'/'}>Intro to STEM</Link>
            </li>
            <li>
              <Link to={'/'}>Gaming</Link>
            </li>
            <li>
              <Link to={'/'}>Advanced Engineering</Link>
            </li>
            <li>
              <Link to={'/'}>Engineering Themes</Link>
            </li>
          </Hero.Tags>
        </Box>
        <Box width={1} px={Root.Grid.Indent.X}>
          <Hero.Heading>
            STEM Education &amp;
            <br />
            Engineering in <span>STATE</span>
          </Hero.Heading>
          <Box mr={1} display="inline-block">
            <Btn
              External
              Label="View Programs"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
            />
          </Box>
          <Box display="inline-block">
            <Btn
              External
              Label="Contact Manager"
              BgColor={Theme.Color.Blush}
              TextColor={Theme.Color.Primary}
            />
          </Box>
        </Box>
      </Hero.Inner>
    </Hero>

    <Section bg="Dino" pt={0} pb={0} fullWidth>
      <ImgMatch
        src="locations-hero.jpg"
        AltText="STEM Education &amp; Engineering in"
      />
    </Section>

    {/* // Vertical dashed spacer */}
    <Spacer>
      <Spacer.Line />
    </Spacer>

    <Intro bg="Cream" textAlign="center">
      <Intro.Inner pt={[2, 2, 4, 4]} pb={[1, 1, 2, 2]}>
        <Text as="p" color="Nova" className="lead">
          Arizona’s Leading STEM Education &amp; Engineering Programs
        </Text>
        <Text as="p" color="Galaxy" className="lead">
          Ut vehicula dictum tristique. Cras at sem nec risus sollicitudin
          varius. Proin ultrices metus arcu, ut lacinia libero ornare eget.
          Morbi orci mi, scelerisque a justo quis, euismod sollicitudin dui.
          Duis convallis magna eget eleifend tempor. Ut non lobortis metus.
          Donec sit amet vulputate risus. Vivamus et lacinia ante.
        </Text>
      </Intro.Inner>
    </Intro>

    <LocationSplitSection />

    <LocationCoordinators cities={Cities} />

    <LocationEvents />

    <Section bg="Dino" pt={12} pb={12} />
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
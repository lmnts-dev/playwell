// <LocationCoordinators /> section:
// Location detail template coordinator accordion

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';

// Styles
import { Hero } from './styles.scss';
import { Decorator } from '../../pages/location-detail/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationHero = ({ cities, pageContext }) => (
  <Hero>
    <Decorator>
      <div className="decorator__hero decorator__hero--top">
        <ImgMatch src="cloud-big.png" AltText="Cloud" />
      </div>

      <div className="decorator__hero decorator__hero--bottom">
        <ImgMatch src="cloud-big.png" AltText="Cloud" />
      </div>
    </Decorator>
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
          Engineering in{' '}
          <span>
            {pageContext.isCounty
              ? pageContext.name + ', ' + pageContext.parentState.name
              : pageContext.name}
          </span>
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
);

export default LocationHero;

//////////////////////////////////////////////////////////////////////
// End Component

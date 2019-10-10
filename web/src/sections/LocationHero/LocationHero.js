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

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationHero = ({ cities, pageContext }) => {
  const countyState =
    pageContext.isCounty == true
      ? pageContext.name + ', ' + pageContext.parentState.name
      : pageContext.isCostCode == true
      ? pageContext.cost_code_name + ', ' + pageContext.parentState.name
      : pageContext.name;

  const programsSlug =
    pageContext.isCounty == true
      ? slugify(pageContext.parentState.name.toLowerCase()) +
        '/' +
        slugify(pageContext.cost_code_name.name.toLowerCase()) +
        '/' +
        slugify(pageContext.name.toLowerCase())
      : pageContext.isCostCode == true
      ? slugify(pageContext.parentState.name.toLowerCase()) +
        '/' +
        slugify(pageContext.cost_code_name.toLowerCase())
      : slugify(pageContext.name.toLowerCase());

  return (
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
            Engineering in <span>{countyState}</span>
          </Hero.Heading>
          <Box mr={1} display="inline-block">
            <Btn
              Destination={'/programs/' + programsSlug}
              Label="View Programs"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
            />
          </Box>
          <Box display="inline-block">
            <Btn
              Destination="/#coordinators"
              Label="Contact Manager"
              BgColor={Theme.Color.Blush}
              TextColor={Theme.Color.Primary}
            />
          </Box>
        </Box>
      </Hero.Inner>
    </Hero>
  );
};

export default LocationHero;

//////////////////////////////////////////////////////////////////////
// End Component

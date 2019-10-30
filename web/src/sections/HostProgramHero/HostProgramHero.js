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
import SplitHero from 'components/library/Hero/SplitHero';

// Styles
import { Hero } from './styles.scss';
import { Decorator } from '../../templates/Location/styles.scss';

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  arrow: false,
  bg: Theme.Color.Cream,
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  subNavColor: Theme.Color.Primary,
  bgMatch: 'group-girls.jpg',
};

const HostProgramHero = ({ cities, pageContext }) => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        {
          label: 'after school programs',
          active: true,
          link: '/host-a-program',
        },
        {
          label: 'recreation centers',
          link: '/recreation-centers',
        },
        {
          label: 'homeschool classes',
          link: '/homeschool-classes',
        },
        {
          label: 'workshops',
          link: '/workshops',
        },
      ]}
    >
      <h2>Hosting a Play-Well Program</h2>
      <h6>
        Our LEGO-inspired STEM programs are customizable and can be tailored to
        your needs. We'd love to work with you to provide a memorable hands-on
        learning experience. Contact us today to discuss options for enrichment,
        workshops, team building, special events and more.
      </h6>
      <Btn
        BgColor={Theme.Color.Nova}
        Label="Get in Touch"
        Destination="/contact"
        TextColor={Theme.Color.White}
        Size="large"
      />
    </SplitHero>
  );
};

export default HostProgramHero;

//////////////////////////////////////////////////////////////////////
// End Component

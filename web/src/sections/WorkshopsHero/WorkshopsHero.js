// <WorkshopsHero /> section:

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

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  arrowColor: Theme.Color.Lilac,
  bg: Theme.Color.Lilac,
  color: Theme.Color.White,
  playButton: false,
  playButtonBg: Theme.Color.Primary,
  gear: false,
  bgMatch: 'team-containers.jpg',
  reversed: true,
  wideImage: false,
  subNavColor: Theme.Color.White,
  noPaddingBottom: true,
};

const WorkshopsHero = () => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'Summer Camps', link: '/programs/summer-camps' },
        { label: 'Workshops', active: true, link: '/programs/workshops' },
        { label: 'Classes', link: '/programs/classes' },
      ]}
    >
      <h2>LEGO-Inspired Engineering Workshops for Kids</h2>
      <h6 className="txt-clr-dino">
        We believe that play reveals who you are, and who you are inpires your
        work.
      </h6>
      <Btn
        BgColor={Theme.Color.Primary}
        Label="Browse Programs"
        Destination="/programs"
        TextColor={Theme.Color.White}
        Size="large"
      />
    </SplitHero>
  );
};

export default WorkshopsHero;

//////////////////////////////////////////////////////////////////////
// End Component

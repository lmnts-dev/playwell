// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Helpers
import HeroContainer from '../HeroContainer';

// Styles
import {
  ProgramsHeroStyle,
  SearchBarStyle,
  ProgramsHeroContentStyle,
} from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SearchBar = () => {
  return (
    <SearchBarStyle>
      <div class="inner">
        {/* <Icon Name="map-marker-alt" fas /> */}
        <input placeholder="Or find a location near.." />
        <Icon Name="search" fas />
      </div>
    </SearchBarStyle>
  );
};

const ProgramsHeroContent = ({ mapWidth, mapZedIndex }) => {
  return (
    <ProgramsHeroContentStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <h1>
        <span class="h2">
          <span class="inline">Explore LEGO® STEM Programs near</span>
        </span>
        <span class="location h2">
          <span class="inline">
            <Icon Name="map-marker-alt" fas />
            <span>Brooklyn, NYC</span>
          </span>
        </span>
      </h1>
      <SearchBar />
    </ProgramsHeroContentStyle>
  );
};

export const ProgramsHero = ({
  BgMatch,
  BgQuery,
  BgAlt,
  color,
  px,
  bg,
  mapWidth,
  mapZedIndex,
}) => (
  <ProgramsHeroStyle bg={bg}>
    <HeroContainer bg="none" px={px} color={color}>
      <Flex
        width={1}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          width={[1, 1, 1, 1]}
          pr={[0, 0, 0, 0, 3]}
          pl={[0, 0, 2, 6, 9]}
          pb={[2, 2, 0, 0]}
        >
          <ProgramsHeroContent mapZedIndex={mapZedIndex} mapWidth={mapWidth} />
        </Box>
      </Flex>
    </HeroContainer>
  </ProgramsHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

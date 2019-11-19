// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
import HeroContainer from '../../Hero/HeroContainer';
import _ from 'lodash';
import withLocation from 'helpers/withLocation';

// Styles
import {
  CourseHeroStyle,
  SearchBarStyle,
  CourseHeroContentStyle,
} from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import CourseHeroContent from './CouseHeroContent';

// Helpers
import slugify from 'helpers/slugify';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Full Wrapper
export const CourseHero = ({
  BgMatch,
  BgQuery,
  BgAlt,
  color,
  px,
  bg,
  mapWidth,
  mapZedIndex,
  geoData,
  pageContext,
  categoryFilter,
}) => (
  <CourseHeroStyle bg={bg}>
    <HeroContainer
      bg="none"
      px={px}
      color={color}
    >
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
          {
            // Utilize our withLocation helper to provide access
            //to the url's play-well.org/programs/?query=params
            <CourseHeroContent
              geoData={geoData}
              mapZedIndex={mapZedIndex}
              mapWidth={mapWidth}
              pageContext={pageContext}
              categoryFilter={categoryFilter}
            />
          }
        </Box>
      </Flex>
    </HeroContainer>
  </CourseHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

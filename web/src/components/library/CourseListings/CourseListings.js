// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';
import { Box, Flex } from 'components/library/Elements';
import { ListingsCounters } from './ListingsCounters';
import { ListingsFilters } from './ListingsFilters';
import { ClientCard } from './ClientCard';

// Styles
import { CourseListingsStyle, ListingsResultsStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ListingsResults = ({ courseData }) => {
  return (
    <ListingsResultsStyle>
      {courseData.allPlayWellClient.edges.map((client, idx) => {
        if (idx < 20) {
          return <ClientCard idx={idx} clientData={client} />;
        }
      })}
    </ListingsResultsStyle>
  );
};

const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div class="listings-inner">
        <Flex
          width={1}
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            width={[1, 1, 1, 1]}
            pr={[0, 0, 0, 0, 3]}
            pl={[0, 0, 2, 6, 9]}
            pb={[2, 2, 0, 0]}
          >
            <div className="listings">{children}</div>
          </Box>
        </Flex>
      </div>
    </CourseListingsStyle>
  );
};

export const CourseListings = ({ courseData, mapWidth, mapZedIndex }) => {
  return (
    <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <ListingsFilters courseData={courseData} />
      <ListingsCounters courseData={courseData} />
      <ListingsResults courseData={courseData} />
    </ListingsWrapper>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

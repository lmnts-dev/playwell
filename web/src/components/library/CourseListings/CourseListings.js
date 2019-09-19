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

class ListingsResults extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      lat: [],
      lng: [],
      zoom: [],
      showCourses: true,
      showClasses: true,
      ageMin: 0,
      startDate: '',
      courseType: '',
      showWorkshops: true,
      results: [],
    };

    // Bind search query function
    // this.toggleCard = this.toggleCard.bind(this);
  }

  render() {
    const courseData = this.props.courseData;

    return (
      <>
        <CourseListingsStyle.Toolbar>
          <div class="toolbar-inner">
            <ListingsFilters courseData={courseData} />
            <ListingsCounters courseData={courseData} />
          </div>
        </CourseListingsStyle.Toolbar>
        <ListingsResultsStyle>
          {courseData.allPlayWellClient.edges.map((client, idx) => {
            if (idx < 50) {
              return <ClientCard idx={idx} clientData={client} />;
            }
          })}
        </ListingsResultsStyle>
      </>
    );
  }
}

const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div class="listings-inner">
        <div className="listings">{children}</div>
      </div>
    </CourseListingsStyle>
  );
};

export const CourseListings = ({ courseData, mapWidth, mapZedIndex }) => {
  return (
    <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <ListingsResults courseData={courseData} />
    </ListingsWrapper>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

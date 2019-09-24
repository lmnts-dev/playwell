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
import { ProgramsHero } from 'components/library/Hero/ProgramsHero';
import { CourseMapNav } from 'components/library/CourseMapNav';

// Styles
import { CourseListingsStyle, ListingsResultsStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

class FilteredResults extends PureComponent {
  constructor(props) {
    super(props);

    // Initial state of filtered results
    this.state = {
      filtered: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     filtered: this.props.results,
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     filtered: nextProps.results,
  //   });
  // }

  render() {
    return (
      <ListingsResultsStyle>
        {this.props.results.map((client, idx) => {
          // console.log(client);
          if (idx < 150) {
            if (client.node.courses.length > 0) {
              return <ClientCard key={idx} clientData={client} />;
            } else {
              return;
            }
          }
        })}
      </ListingsResultsStyle>
    );
  }
}

class ListingsResults extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      lat: [],
      lng: [],
      zoom: [],
      categoryFilter: '',
      ageMin: 0,
      startDate: '',
      courseType: '',
      results: [],
    };

    // Bind search query function
    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
  }

  toggleCategoryFilter(context) {
    if (this.state.categoryFilter == context) {
      this.setState({
        categoryFilter: '',
      });
    } else {
      this.setState({
        categoryFilter: context,
      });
    }

    return console.log(context);
  }

  render() {
    // Source Data
    const courseData = this.props.courseData;

    // Filter Categories
    const categoryFilter = this.state.categoryFilter;
    const filteredCourseDataByCategory = queryString =>
      courseData.allPlayWellClient.edges.map((node, idx) => {
        return {
          node: {
            client_id: node.node.id,
            client_location_name: node.node.client_location_name,
            courses: node.node.courses.filter((course, idxx) => {
              // Define our query
              const filter = queryString;

              // Set up the conditions
              return course.category_group_name.includes(filter);
            }, this),
            display_address: node.node.display_address,
            geocode_address: node.node.geocode_address,
            id: node.node.location_id,
            location_lat: node.node.location_lat,
            location_lng: node.node.location_lng,
            public_note: node.node.public_note,
            key: idx,
          },
        };
      }, this);

    // Map Settings
    const mapZedIndex = this.props.mapZedIndex;
    const mapWidth = this.props.mapWidth;

    return (
      <>
        <CourseListingsStyle.Toolbar>
          <div className="toolbar-inner">
            <ListingsFilters courseData={courseData} />
            <ListingsCounters
              toggleCategoryFilter={this.toggleCategoryFilter.bind(this)}
              courseData={filteredCourseDataByCategory(categoryFilter)}
            />
          </div>
        </CourseListingsStyle.Toolbar>
        <FilteredResults
          results={filteredCourseDataByCategory(categoryFilter)}
        />
      </>
    );
  }
}

const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div className="listings-inner">
        <div className="listings">{children}</div>
      </div>
    </CourseListingsStyle>
  );
};

export const CourseListings = ({ courseData, mapWidth, mapZedIndex }) => {
  return (
    <main>
      <ProgramsHero
        bg={Theme.Color.Galaxy}
        color="White"
        flexDirection="row"
        mapWidth={mapWidth}
        mapZedIndex={mapZedIndex}
      />
      <CourseMapNav mapWidth={mapWidth} mapZedIndex={mapZedIndex} />
      <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
        <ListingsResults courseData={courseData} />
      </ListingsWrapper>
    </main>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

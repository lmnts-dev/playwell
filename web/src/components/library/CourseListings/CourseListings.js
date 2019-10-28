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
import { CourseHero } from './CourseHero';
import { CourseMapNav } from 'components/library/CourseMapNav';

// Helpers
import slugify from 'helpers/slugify';
import locationMatch from 'helpers/LocationMatch';

// Styles
import { CourseListingsStyle, ListingsResultsStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our Filtered Results component
class FilteredResults extends PureComponent {
  constructor(props) {
    super(props);

    // Initial state of filtered results
    this.state = {
      filtered: [],
    };
  }

  render() {
    // Define our data variables
    let results = this.props.results;
    let stateEdges = this.props.stateEdges;

    // For Debugging only
    // console.log(stateEdges);
    // console.log(results);

    // Show our listings
    return (
      <ListingsResultsStyle>
        {results.map((client, idx) => {
          // Get our Location Meta Data for this Client
          let locationMetaResults = locationMatch(
            stateEdges,
            client.node.county_id,
            client.node.state_id
          );

          {
            console.log(locationMetaResults);
          }

          // Build our slugified strings for pretty URLs.
          let stateSlug = slugify(locationMetaResults.state.name);
          let countySlug = slugify(locationMetaResults.county.name);

          // console.log(client);
          if (client.node.courses.length > 0) {
            // Return our cards
            return (
              <ClientCard
                key={idx}
                clientData={client}
                locationMetaResults={locationMetaResults}
                stateSlug={stateSlug}
                countySlug={countySlug}
              />
            );
          } else {
            return;
          }
        }, this)}
      </ListingsResultsStyle>
    );
  }
}

// Our Listing Results
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

  // Our Function to Toggle Categories
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
  }

  render() {
    // Source Data
    const courseData = this.props.courseData;
    const stateEdges = this.props.courseData.allPlayWellStates.edges;
    const pageContext = this.props.pageContext;

    // Our Filters
    const stateId = this.props.stateId;
    const countyId = this.props.countyId;
    const costCodeId = this.props.costCodeId;

    // Filter Categories
    const categoryFilter = this.state.categoryFilter;
    const geoFilteredCourseData = courseData.allPlayWellClient.edges
      .map((node, idx) => {
        return {
          node: {
            client_id: node.node.id,
            client_location_name: node.node.client_location_name,
            courses: node.node.courses,
            display_address: node.node.display_address,
            county_id: node.node.county_id,
            state_id: node.node.state_id,
            geocode_address: node.node.geocode_address,
            id: node.node.location_id,
            location_lat: node.node.location_lat,
            location_lng: node.node.location_lng,
            public_note: node.node.public_note,
            key: idx,
          },
        };
      }, this)
      .filter(client => {
        if (
          client.node.state_id == stateId ||
          client.node.county_id == countyId
        ) {
          return client;
        }
      }, this);

    const filteredCourseDataByToggle = queryString =>
      geoFilteredCourseData.map((node, idx) => {
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
            county_id: node.node.county_id,
            state_id: node.node.state_id,
            geocode_address: node.node.geocode_address,
            id: node.node.location_id,
            location_lat: node.node.location_lat,
            location_lng: node.node.location_lng,
            public_note: node.node.public_note,
            key: idx,
          },
        };
      }, this);

    /**
     * For Debugging Purposes Only:
     * */
    // console.log('pageContext:');
    // console.log(pageContext);
    // console.log('filteredCourseDataByToggle():');
    // console.log(filteredCourseDataByToggle());

    return (
      <>
        <CourseListingsStyle.Toolbar>
          <div className="toolbar-inner">
            <ListingsFilters courseData={geoFilteredCourseData} />
            <ListingsCounters
              toggleCategoryFilter={this.toggleCategoryFilter.bind(this)}
              courseData={geoFilteredCourseData}
            />
          </div>
        </CourseListingsStyle.Toolbar>
        <FilteredResults
          results={filteredCourseDataByToggle(categoryFilter)}
          stateEdges={stateEdges}
        />
      </>
    );
  }
}

// The wrapper around our listings.
const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div className="listings-inner">
        <div className="listings">{children}</div>
      </div>
    </CourseListingsStyle>
  );
};

// The page itself.
export const CourseListings = ({
  courseData,
  mapWidth,
  mapZedIndex,
  geoData,
  stateId,
  countyId,
  costCodeId,
  pageContext,
}) => {
  /**
   *  For Debugging Purposes Only:
   * */
  // console.log('stateId: ' + stateId);
  // console.log('countyId: ' + countyId);
  // console.log('costCodeId: ' + costCodeId);

  return (
    <main>
      <CourseHero
        bg={Theme.Color.Galaxy}
        color="White"
        flexDirection="row"
        mapWidth={mapWidth}
        mapZedIndex={mapZedIndex}
        geoData={geoData}
        stateId={stateId}
        countyId={countyId}
        costCodeId={costCodeId}
        pageContext={pageContext}
      />
      <CourseMapNav mapWidth={mapWidth} mapZedIndex={mapZedIndex} />
      <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
        <ListingsResults
          courseData={courseData}
          stateId={stateId}
          countyId={countyId}
          costCodeId={costCodeId}
          pageContext={pageContext}
        />
      </ListingsWrapper>
    </main>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

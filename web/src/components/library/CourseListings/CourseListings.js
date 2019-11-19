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
import locationMatch from 'helpers/locationMatch';
import withLocation from 'helpers/withLocation';

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
    console.log('stateEdges:');
    console.log(stateEdges);
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

        <div class="nearby-results">More in</div>
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
      ageMin: 0,
      ageMax: 0,
      startDate: '',
      startDate: '',
      courseTypes: [],
      results: [],
    };
  }

  render() {
    // For debugging
    // console.log('this.props.urlQuery.toLowerCase():');
    // console.log(this.props.urlQuery.toLowerCase());

    // Source Data
    const courseData = this.props.courseData;
    const stateEdges = this.props.courseData.allPlayWellStates.edges;
    const pageContext = this.props.pageContext;

    // Our Filters
    const stateId = this.props.stateId;
    const countyId = this.props.countyId;
    const costCodeId = this.props.costCodeId;

    // Filter Categories
    const categoryFilter = this.props.categoryFilter;
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

    const filteredCourseDataByToggle = d =>
      geoFilteredCourseData.map((node, idx) => {
        return {
          node: {
            client_id: node.node.id,
            client_location_name: node.node.client_location_name,
            courses: node.node.courses.filter((course, idxx) => {
              // Define our query
              const filter = d;

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
            <ListingsFilters
              categoryFilter={categoryFilter}
              courseData={geoFilteredCourseData}
            />
            <ListingsCounters
              categoryFilter={categoryFilter}
              toggleCategoryFilter={this.props.toggleCategoryFilter}
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

/**
 *
 *  The wrapper around ourlistings
 *
 *  */

const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div className="listings-inner">
        <div className="listings">{children}</div>
      </div>
    </CourseListingsStyle>
  );
};

/**
 *
 * The Page Itself
 *
 **/

class CourseListings extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State for a top level category
    this.state = {
      categoryFilter: '',
    };

    // Bind search query function
    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
    this.checkForUrlQuery = this.checkForUrlQuery.bind(this);
    this.setParams = this.setParams.bind(this);
    this.updateURL = this.updateURL.bind(this);
  }

  // Function to update our url query parameters when we change
  // categories & filters to create sharable urls.
  setParams({ show = '' }) {
    const searchParams = new URLSearchParams();
    searchParams.set('show', show);
    return searchParams.toString();
  }

  // Functon to update our URL using history.push API
  updateURL() {
    // If we are indeed filtering:
    if (this.state.categoryFilter != '') {
      const url = this.setParams({
        show: this.state.categoryFilter.toLowerCase() + 's',
      });
      //do not forget the "?" !
      history.pushState({}, '', `?${url}`);
    }

    // If it is  displaying all programs:
    else {
      const url = this.setParams({
        show: 'all',
      });
      history.pushState({}, '', `?${url}`);
    }
  }

  // Our Function to Toggle Categories
  toggleCategoryFilter(context) {
    if (this.state.categoryFilter == context) {
      this.setState(
        {
          categoryFilter: '',
        },
        // Use updateURL as a callback to confirm state.
        this.updateURL
      );
    } else {
      this.setState(
        {
          categoryFilter: context,
        },
        // Use updateURL as a callback to confirm state.
        this.updateURL
      );
    }
  }

  // Check for url query
  checkForUrlQuery() {
    if (this.props.search.show != undefined) {
      let safeUrlQuery = this.props.search.show.toLowerCase(); // Via Reach Router

      if (safeUrlQuery === 'workshops') {
        this.setState({
          categoryFilter: 'Workshop',
        });
      }

      if (safeUrlQuery === 'camps') {
        this.setState({
          categoryFilter: 'Camp',
        });
      }

      if (safeUrlQuery === 'courses') {
        this.setState({
          categoryFilter: 'Course',
        });
      }
    }
    // For debugging
    // console.log('this.state.categoryFilter:');
    // console.log(this.state.categoryFilter);

    return;
  }

  componentDidMount() {
    this.checkForUrlQuery();
  }

  render() {
    let courseData = this.props.courseData;
    let mapWidth = this.props.mapWidth;
    let mapZedIndex = this.props.mapZedIndex;
    let geoData = this.props.geoData;
    let stateId = this.props.stateId;
    let countyId = this.props.countyId;
    let costCodeId = this.props.costCodeId;
    let pageContext = this.props.pageContext;
    let search = this.props.search;

    /**
     *  For Debugging Purposes Only:
     * */
    // console.log('stateId: ' + stateId);
    // console.log('countyId: ' + countyId);
    // console.log('costCodeId: ' + costCodeId);
    // console.log('search.show:');
    // console.log(search.show);

    console.log('this.state:');
    console.log(this.state);

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
          categoryFilter={this.state.categoryFilter}
        />
        {this.props.pageContext !== false ? (
          <>
            <CourseMapNav mapWidth={mapWidth} mapZedIndex={mapZedIndex} />
            <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
              <ListingsResults
                courseData={courseData}
                stateId={stateId}
                countyId={countyId}
                costCodeId={costCodeId}
                pageContext={pageContext}
                urlQuery={search.show} // Utilizes our withLocation(); function at the end of this document.
                categoryFilter={this.state.categoryFilter}
                toggleCategoryFilter={this.toggleCategoryFilter}
              />
            </ListingsWrapper>
          </>
        ) : null}
      </main>
    );
  }
}

export default withLocation(CourseListings);

//////////////////////////////////////////////////////////////////////
// End Component

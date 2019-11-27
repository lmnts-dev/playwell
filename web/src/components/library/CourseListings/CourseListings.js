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
import { ListingsCounters } from './ListingsCounters';
import { ListingsFilters } from './ListingsFilters';
import { ClientCard } from './ClientCard';
import { CourseHero } from './CourseHero';
import { CourseMapNav } from 'components/library/CourseMapNav';

// Helpers
import slugify from 'helpers/slugify';
import locationMatch from 'helpers/locationMatch';
import withLocation from 'helpers/withLocation';
import {
  getCenterFromDegrees,
  clientsByLatLong,
} from 'helpers/getCenterFromDegrees';
import { costCodesAdapter } from 'helpers/costCodesAdapter';

// Data
import { DataFetch } from 'hooks/DataFetch';

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
    let pageContext = this.props.pageContext;
    let clientsData = this.props.courseData.allPlayWellClient.edges;

    // Function to filter our courseData for related results
    const relatedCourseData = (clients, context) => {
      // Create empty related Courses array
      let relatedCourses = [];

      // Check if the pageContext is a county or a cost code
      if (pageContext.isCounty == true) {
        let statesWithEdges = { edges: this.props.stateEdges };
        let contextualCountyId = context.county_id;
        let contextualStateId = context.parentState.playwell_state_id;
        let contextualCostCode = parseInt(context.cost_code);

        // Match & get our Cost Code's array of States & Counties
        let allCostCodes = costCodesAdapter(statesWithEdges, true);
        let matchedCostCode = allCostCodes.filter(
          costCode => costCode.code == contextualCostCode
        )[0];

        console.log('allCostCodes', allCostCodes);
        console.log('matchedCostCode', matchedCostCode);

        // First grab our Cost Code's courses:
        let costCodeCourses = matchedCostCode.states.map((state, idx) => {
          let filteredClients = state.counties.map(county => {
            let filteredByCounty = clientsData.filter(
              client =>
                parseInt(client.node.county_id) == parseInt(county.county_id)
            );

            return filteredByCounty;
          });

          return filteredClients;
        });

        console.log('costCodeCourses', costCodeCourses);

        // Filter out the current County:
        let relatedCourses = [];

        // Next match our related clients to the current Cost Code:
        // let relatedClientsWithinCostCode = relatedClientsWithoutCurrentCounty.filter(client => {
        //   let clientCoursesWithCostCode = client.courses.map((course, idx) => {
        //     let matchedCostCodeMeta = matchedCostCode.states.map((state, idxx) => {

        //     })
        //   })
        // });

        return relatedCourses;
      } else {
        return relatedCourses;
      }
    };

    /**
     *
     * For Debugging only
     *
     */
    // console.log('stateEdges:');
    // console.log(stateEdges);
    // console.log(results);
    // console.log(pageContext);
    // console.log('relatedCourseData(clientsData, pageContext):');
    // console.log(relatedCourseData(clientsData, pageContext));

    /**
     *
     * Show our listings
     *
     */
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

        {/**
         *
         * Related Programs By County
         *
         */}
        {pageContext.isCounty == true ? (
          relatedCourseData(clientsData, pageContext).length > 0 ? (
            <div className="nearby-results">
              <div className="nearby-results-inner">
                <h3 className="nearby-results-header">
                  {relatedCourseData(clientsData, pageContext).length +
                    ' more LEGO® STEM ' +
                    (relatedCourseData(clientsData, pageContext).length > 1
                      ? 'Programs near '
                      : 'Program near ')}
                  <Link
                    to={
                      '/programs/' +
                      slugify(pageContext.parentState.name) +
                      '/' +
                      slugify(pageContext.cost_code_name)
                    }
                  >
                    {pageContext.cost_code_name}
                  </Link>
                </h3>
                <div className="nearby-results-listings">
                  {relatedCourseData(clientsData, pageContext).map(
                    (client, idx) => {
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
                    },
                    this
                  )}
                </div>
              </div>
            </div>
          ) : (
            false
          )
        ) : (
          false
        )}

        {/**
         *
         * Related Programs By State
         *
         */}
        {pageContext.isCounty == true || pageContext.isCostCode == true ? (
          relatedCourseData(clientsData, pageContext).length > 0 ? (
            <div className="nearby-results">
              <div className="nearby-results-inner">
                <h3 className="nearby-results-header">
                  <Link
                    to={'/programs/' + slugify(pageContext.parentState.name)}
                  >
                    {'View ' +
                      relatedCourseData(clientsData, pageContext).length +
                      ' more LEGO® STEM ' +
                      (relatedCourseData(clientsData, pageContext).length > 1
                        ? 'Programs in '
                        : 'Program in ') +
                      pageContext.parentState.name}
                  </Link>
                </h3>
                {/* <div className="nearby-results-listings">
                  {relatedCourseData(clientsData, pageContext).map(
                    (client, idx) => {
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
                    },
                    this
                  )}
                </div> */}
              </div>
            </div>
          ) : (
            false
          )
        ) : (
          false
        )}
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
          pageContext={pageContext}
          courseData={courseData}
        />
      </>
    );
  }
}

/**
 *
 *  The wrapper around our listings
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
      currentlyViewing: '',
    };

    // Bind search query function

    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
    this.checkforFilterUrlParam = this.checkforFilterUrlParam.bind(this);
    this.checkforLocationUrlParam = this.checkforLocationUrlParam.bind(this);
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

  // Check for url query for showing/hiding results.
  checkforFilterUrlParam() {
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

  checkforLocationUrlParam() {
    if (this.props.search.location != undefined) {
      let safeUrlLocationQuery = this.props.search.location.toLowerCase(); // Via Reach Router

      this.setState({
        currentlyViewing: safeUrlLocationQuery,
      });

      console.log('TRUE this.state.currentlyViewing:', this.state.currentlyViewing);
    } else {
      console.log('FALSE this.state.currentlyViewing:', 'no query');
    }
    // For debugging
    // console.log('this.state.categoryFilter:');
    // console.log(this.state.categoryFilter);

    // this.checkforLocationUrlParam(); // Run recursively.
  }

  componentDidMount() {
    this.checkforFilterUrlParam();
    this.checkforLocationUrlParam();
  }

  render() {
    // Define clean variables
    let courseData = this.props.courseData;
    let mapWidth = this.props.mapWidth;
    let mapZedIndex = this.props.mapZedIndex;
    let geoData = this.props.geoData;
    let stateId = this.props.stateId;
    let countyId = this.props.countyId;
    let costCodeId = this.props.costCodeId;
    let pageContext = this.props.pageContext;
    let search = this.props.search;
    let allCostCodes = this.props.allCostCodes;

    /**
     *  For Debugging Purposes Only:
     * */
    // console.log(
    //   'courseData.allPlayWellClient.edges:',
    //   courseData.allPlayWellClient.edges
    // );
    // console.log(
    //   'clientsByLatLong(6, courseData.allPlayWellClient.edges):',
    //   clientsByLatLong(6, courseData.allPlayWellClient.edges)
    // );
    // console.log(
    //   'getCenterFromDegrees(clientsByLatLong(6, courseData.allPlayWellClient.edges)):',
    //   getCenterFromDegrees(
    //     clientsByLatLong(6, courseData.allPlayWellClient.edges)
    //   )
    // );
    // console.log('stateId: ' + stateId);
    // console.log('countyId: ' + countyId);
    // console.log('costCodeId: ' + costCodeId);
    console.log('pageContext:', pageContext);
    // console.log('search.show:');
    // console.log(search.show);
    // console.log('this.state:');
    // console.log(this.state);
    // console.log('courseData:', courseData);

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
          allCostCodes={allCostCodes}
        />
        {this.props.pageContext !== false ? (
          <>
            <CourseMapNav
              courseData={courseData}
              mapWidth={mapWidth}
              mapZedIndex={mapZedIndex}
              stateId={stateId}
              countyId={countyId}
              costCodeId={costCodeId}
              pageContext={pageContext}
            />
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
                allCostCodes={allCostCodes}
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

// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { isWithinInterval, format } from 'date-fns'
import setQuery from 'set-query-string'

// MapboxGL
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoicGV0ZXJsYXhhbHQiLCJhIjoiY2p6cTExcmw5MHZpNTNubW1wc25veXJseiJ9.3nFjkPOZM2kbHYQCdkqU7g';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';
import { ListingsCounters } from './ListingsCounters';
import { ListingsFilters } from './ListingsFilters';
import { ClientCard } from './ClientCard';
import { CourseHero } from './CourseHero';
import { CourseMapNavContainer } from 'components/library/CourseMapNav';

// Helpers
import slugify from 'helpers/slugify';
import locationMatch from 'helpers/locationMatch';
import withLocation from 'helpers/withLocation';
import {
  clientGeoJsonAdapter,
  clientsByLatLong,
} from 'helpers/clientGeoJsonAdapter';
import { costCodesAdapter } from 'helpers/costCodesAdapter';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Styles
import {
  CourseListingsStyle,
  ListingsResultsStyle,
  CourseMapNavStyle,
  ToggleMapBtnStyle,
} from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * Our Filtered Results component
 *
 */

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

        // console.log('allCostCodes', allCostCodes);
        // console.log('matchedCostCode', matchedCostCode);

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

        // console.log('costCodeCourses', costCodeCourses);

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

/**
 *
 * Our Listing Results
 *
 */
class ListingsResults extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      lat: [],
      lng: [],
      zoom: [],
      startDate: '',
      startDate: '',
      courseTypes: [],
      results: [],
    };
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
    const categoryFilter = this.props.categoryFilter;
    const ageFilter = this.props.ageFilter;
    const dateFilter = this.props.dateFilter;
    const courseTypeFilter = this.props.courseTypeFilter;

    // Filter update function
    const setListingFilter = this.props.setListingFilter

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

    const filteredCourseByAge = course => {
      // Return all courses on page load
      if (ageFilter.ageMin === 0 && ageFilter.ageMax === 0) return course
      // Return courses for ages < 5
      else if (ageFilter.ageMin === 0 && (course.age_range_start < ageFilter.ageMax ||course.age_range_end < ageFilter.ageMax)) {
        return course
      }
      // Return courses for a specific age (5-9)
      else if (ageFilter.ageMin === ageFilter.ageMax && (ageFilter.ageMin >= course.age_range_start &&
        ageFilter.ageMin <= course.age_range_end)) {
          return course
      }
      // Return course for ages over 10
      else if (course.age_range_start <= ageFilter.ageMin && course.age_range_end >= ageFilter.ageMin) {
        return course
      }
    }

    const filterCourseByDate = course => {
      if (dateFilter.startDate === '' && dateFilter.endDate === '') {return course}
     else if (isWithinInterval(new Date(course.start_date), { start: dateFilter.startDate, end: dateFilter.endDate })) {return course}
    }

    const filterCourseByType = course => {
      if (courseTypeFilter === '') {return course}
      else if (course.course_type_group === courseTypeFilter) {return course}
    }

    const filteredCourseDataByCategory = filter =>
      geoFilteredCourseData.map(node => {
        return {
          node: {
            ...node.node,
            courses: node.node.courses
              .filter(course => course.category_group_name.includes(filter))
          },
        };
      }, this);

    const filteredCourseDataBySelection = filter =>
      geoFilteredCourseData.map(node => {
        return {
          node: {
            ...node.node,
            courses: node.node.courses
              .filter(course => course.category_group_name.includes(filter))
              .filter(course  => filteredCourseByAge(course))
              .filter(course => filterCourseByDate(course))
              .filter(course => filterCourseByType(course))
          },
        };
      }, this);

    return (
      <>
        <CourseListingsStyle.Toolbar>
          <div className="toolbar-inner">
            <ListingsFilters
              setListingFilter={setListingFilter}
              categoryFilter={categoryFilter}
              courseData={filteredCourseDataByCategory(categoryFilter)}
            />
            <ListingsCounters
              categoryFilter={categoryFilter}
              toggleCategoryFilter={this.props.toggleCategoryFilter}
              courseData={filteredCourseDataBySelection(categoryFilter)}
            />
          </div>
        </CourseListingsStyle.Toolbar>
        <FilteredResults
          results={filteredCourseDataBySelection(categoryFilter)}
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
 */
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
 */
class CourseListings extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State for a top level category
    this.state = {
      // Filtering
      categoryFilter: '',
      currentlyViewing: '',
      ageFilter: {
        ageMin: 0,
        ageMax: 0
      },
      dateFilter: {
        startDate: '',
        endDate: ''
      },
      courseTypeFilter: '',
      /**
       *
       * Mapbox settings
       *
       */
      lat: 40.7088,
      lng: -73.9888,
      zoom: 2,
    };

    // Create our Map Ref
    this.mapBoxRef = React.createRef();

    // Bind our functions
    this.setListingFilter = this.setListingFilter.bind(this);
    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
    this.checkforFilterUrlParam = this.checkforFilterUrlParam.bind(this);
    this.checkforLocationUrlParam = this.checkforLocationUrlParam.bind(this);
    this.setParams = this.setParams.bind(this);
    this.updateURL = this.updateURL.bind(this);
  }

  // Function to update our url query parameters when we change
  // categories & filters to create sharable urls.
  setParams({ show = '', age_min, age_max }) {
    const searchParams = new URLSearchParams();
    searchParams.set('show', show);
    if (age_min !== undefined && age_max !== undefined) {
      searchParams.set('age_min', age_min);
      searchParams.set('age_max', age_max);
    }
    return searchParams.toString();
  }

  // Functon to update our URL using history.push API
  updateURL() {
    if (this.state.categoryFilter !== '') {
      if (this.state.courseTypeFilter !== '') {
        setQuery({course_type: this.state.courseTypeFilter})
      }
      if (this.state.dateFilter.startDate !== '' && this.state.dateFilter.endDate !== '') {
        setQuery({date_min: format(this.state.dateFilter.startDate, 'yyyy-MM-dd'), date_max: format(this.state.dateFilter.endDate, 'yyyy-MM-dd')}, {pushState: true})
      }
      if (this.state.ageFilter.ageMin !== 0 && this.state.ageFilter.ageMax !== 0) {
        setQuery({age_min: this.state.ageFilter.ageMin, age_max: this.state.ageFilter.ageMax}, {pushState: true})
      }
      setQuery({show: this.state.categoryFilter.toLowerCase() + 's'}, {pushState: true})
    } else {
      if (this.state.courseTypeFilter !== '') {
        setQuery({course_type: this.state.courseTypeFilter})
      }
      if (this.state.dateFilter.startDate !== '' && this.state.dateFilter.endDate !== '') {
        setQuery({date_min: format(this.state.dateFilter.startDate, 'yyyy-MM-dd'), date_max: format(this.state.dateFilter.endDate, 'yyyy-MM-dd')}, {pushState: true})
      }
      if (this.state.ageFilter.ageMin !== 0 && this.state.ageFilter.ageMax !== 0) {
        setQuery({age_min: this.state.ageFilter.ageMin, age_max: this.state.ageFilter.ageMax}, {pushState: true})
      }
      setQuery({show: 'all'}, {pushState: true})
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

  // Our function to update the listing filters for age, date, and course type
  setListingFilter(name, value) {
    this.setState({ [name]: value })
    this.updateURL()
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

    return;
  }

  checkforLocationUrlParam() {
    if (this.props.search.location != undefined) {
      let safeUrlLocationQuery = this.props.search.location.toLowerCase(); // Via Reach Router

      this.setState({
        currentlyViewing: safeUrlLocationQuery,
      });

      console.log(
        'TRUE this.state.currentlyViewing:',
        this.state.currentlyViewing
      );
    } else {
      console.log('FALSE this.state.currentlyViewing:', 'no query');
    }
  }

  componentDidUpdate() {
    this.updateURL();
  }

  componentDidMount() {
    /**
     *
     * Check for Url Parameters
     *
     */

    this.checkforFilterUrlParam();
    this.checkforLocationUrlParam();

    /**
     *
     * Initialize MapboxGL
     *
     */

    // Initial position
    const { lng, lat, zoom } = this.state;

    if (this.props.pageContext !== false) {
      // Our map object
      const map = new mapboxgl.Map({
        container: this.mapBoxRef,
        style: 'mapbox://styles/mapbox/streets-v9',
        maxZoom: 11,
      });


      this.map = map;

      const clientEdges = this.props.courseData.allPlayWellClient.edges;
      const stateId = this.props.pageContext.isCostCode // If CostCode:
        ? this.props.pageContext.parentState.playwell_state_id // Display State Id.
        : this.props.pageContext.isCounty // If County:
        ? this.props.pageContext.parentState.playwell_state_id // Display State Id.
        : this.props.pageContext.playwell_state_id; // else it's a State and remove parentState and use it's Id.

      const countyId = this.props.pageContext.isCostCode // If CostCode:
        ? this.props.pageContext.county_id // Display County Id.
        : this.props.pageContext.isCounty // If County:
        ? this.props.pageContext.county_id // Display County Id.
        : null; // else it's a State and County Id is no longer needed.

      const costCodeId = this.props.pageContext.isCostCode // If CostCode:
        ? this.props.pageContext.cost_code // Display Cost Code.
        : this.props.pageContext.isCounty // If County:
        ? this.props.pageContext.cost_code // Display Cost Code.
        : null; // else it's a State and CostCode is no longer needed.

      // Updating state depending on map position & zoom
      map.on('move', () => {
        const { lng, lat } = map.getCenter();

        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2),
        });
      });

      /**
       * Generate our map markers
       */

      // Our data
      const clientsGeoJson = clientGeoJsonAdapter(
        this.props.courseData.allPlayWellClient.edges
      );

      // Map Id
      const mapId = 'clients';

      /**
       * Once  our map is loaded:
       */
      map.on('load', () => {
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        /**
         * Fit to our respective initial bounds provided by pageContext
         */

        // First establish an empty set of bounds.
        const initialBounds = new mapboxgl.LngLatBounds();

        // Create raw markers with our helper function and utilize our State Id from CourseListings / PageContext.
        const initialMarkers = clientsByLatLong(
          stateId,
          countyId,
          costCodeId,
          clientEdges
        );

        // Extend our bounds to include our raw markers
        initialMarkers.forEach(coordinates => {
          initialBounds.extend(coordinates);
        });

        // Fit our map to said bounds.
        map.fitBounds(initialBounds, { padding: 50 });

        /**
         * Add data layers.
         */
        map.addLayer({
          id: mapId,
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: clientsGeoJson,
            },
          },
          paint: {
            'circle-radius': 5,
            'circle-color': Theme.Color.Nova,
            'circle-stroke-color': Theme.Color.White,
            'circle-stroke-width': 1,
            'circle-opacity': 1,
          },
        });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', mapId, function(e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.title;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', mapId, function() {
          map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', mapId, function() {
          map.getCanvas().style.cursor = '';
        });

        // Functions to run on click.
        map.on('click', mapId, function(e) {
          // Fly to point
          map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 9 });

          // Use Reach Router to update route.
          navigate(`?location=${e.features[0].properties.locationHash}`);
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.props.pageContext !== false) {
      this.map.remove();
    }
  }

  render() {
    // Define clean variables
    const courseData = this.props.courseData;
    const mapWidth = this.props.mapWidth;
    const mapZedIndex = this.props.mapZedIndex;
    const geoData = this.props.geoData;
    const stateId = this.props.stateId;
    const countyId = this.props.countyId;
    const costCodeId = this.props.costCodeId;
    const pageContext = this.props.pageContext;
    const search = this.props.search;
    const allCostCodes = this.props.allCostCodes;
    const { lng, lat, zoom } = this.state;

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
          currentCoordinates={{
            lat: this.state.lat,
            lng: this.state.lng,
          }}
        />
        {this.props.pageContext !== false ? (
          <>
            <CourseMapNavContainer
              mapZedIndex={mapZedIndex}
              mapWidth={mapWidth}
              mapBoxRef={el => (this.mapBoxRef = el)}
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
                ageFilter={this.state.ageFilter}
                dateFilter={this.state.dateFilter}
                courseTypeFilter={this.state.courseTypeFilter}
                setListingFilter={this.setListingFilter}
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

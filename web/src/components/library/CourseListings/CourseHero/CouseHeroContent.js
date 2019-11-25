// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import queryString from 'query-string';
import { Location } from '@reach/router';

// Helpers
import HeroContainer from '../../Hero/HeroContainer';
import _ from 'lodash';

// Styles
import {
  CourseHeroStyle,
  SearchBarStyle,
  CourseHeroContentStyle,
} from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';

// Helpers
import slugify from 'helpers/slugify';
import { costCodesAdapter } from 'helpers/costCodesAdapter';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our Search Bar
class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    // Assign initial state
    this.state = {
      query: '',
      resultsActive: false,
      queryActive: false,
    };

    // Bind our functions
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchResultsToggle = this.handleSearchResultsToggle.bind(this);
  }

  // Mounted state
  componentDidMount() {
    // Listen for click events to show/hide results
    document.addEventListener('mousedown', this.handleSearchResultsToggle);

    // Assign State
    this.state = {
      query: '',
      resultsActive: false,
      queryActive: false,
    };
  }

  // Unmounted state
  componentWillUnmount() {
    // Remove listener for click events to show/hide results
    document.removeEventListener('mousedown', this.handleSearchResultsToggle);

    // De-assign State
    this.state = {
      query: '',
      resultsActive: false,
      queryActive: false,
    };
  }

  // Assign Ref to search bar
  // searchWrapperRef(node) {
  //   this.searchWrapperRef = node;
  // }

  // Function to listen for mouse clicks to show/hide results bar
  handleSearchResultsToggle(event) {
    // If the click is outside of the input, hide results
    if (
      this.refs.searchInputWrapper &&
      !this.refs.searchInputWrapper.contains(event.target)
    ) {
      this.setState({
        resultsActive: false,
      });
    }
    // If the click is inside of the input, show results
    else {
      this.setState({
        resultsActive: true,
      });
    }

    document.addEventListener('mousedown', this.handleSearchResultsToggle);
  }

  // Handle our query updates
  handleInputChange = query => {
    if (query.target.value.length != '') {
      this.setState({
        query: query.target.value,
        queryActive: true,
      });
    } else {
      this.setState({
        query: '',
        queryActive: false,
      });
    }
  };

  render() {
    // Establish Page Context
    const pageContext = this.props.pageContext;

    // Clean our queries
    const searchSafeQuery = this.state.query.toLowerCase();

    // Create our Results array
    const results = this.props.geoData.edges.filter(location => {
      // Clean our Location's name
      const searchSafeName = location.node.name.toLowerCase();

      /*
      // Clean our county names, make them iterable. and
      // return true if it is inside of the new array
      */

      // Create empty array
      const searchSafeCounties = [];

      // Iterate through Counties and add to said array
      const cleanCountyNames = () => {
        //  Convert each county name to lowercase
        location.node.counties.forEach((county, idx) => {
          searchSafeCounties.push(county.name.toLowerCase());
        });
      };

      // Run above function synchronously
      cleanCountyNames();

      // Iterate through cleaned array with clean query and return truthy
      // or falsy if it exists
      const isCountyMatch = searchSafeCounties.filter(county => {
        if (county.includes(searchSafeQuery)) {
          return true;
        }
      });

      /*
      // Clean our Cost Code Names, make them iterable. and
      // return true if it is inside of the new array
      */

      // Create empty array
      const searchSafeCostCodes = [];

      // Iterate through Counties and add to said array
      const cleanCostCodes = () => {
        //  Convert each county name to lowercase
        location.node.counties.forEach((county, idx) => {
          searchSafeCostCodes.push(county.cost_code_name.toLowerCase());
        });
      };

      // Run above function synchronously
      cleanCostCodes();

      // Iterate through cleaned array with clean query and return truthy
      // or falsy if it exists
      const isCostCodeMatch = searchSafeCostCodes.filter(costCode => {
        if (costCode.includes(searchSafeQuery)) {
          return true;
        }
      });

      /*
      // Return our filtered results
      */

      if (searchSafeName.includes(searchSafeQuery)) {
        return location;
      } else if (isCountyMatch.length > 0 || isCostCodeMatch.length) {
        return location;
      }

      // For Debugging only.
      // console.log('searchSafeCounties:');
      // console.log(searchSafeCounties);

      // console.log(isCostCodeMatch.length > 0 ? true : false);
      // console.log(isCostCodeMatch);

      // console.log('isCountyMatch:');
      // console.log(isCountyMatch);

      // console.log('searchSafeName: ' + searchSafeName);
      // console.log('searchSafeQuery: ' + searchSafeQuery);
    });

    // For Debugging only.
    // console.log('results:');
    // console.log(results);
    // console.log('resultsSample:');
    // console.log(resultsSample);

    return (
      <SearchBarStyle ref="searchInputWrapper">
        <div
          className={
            this.state.resultsActive == true
              ? 'search-bar results-visible'
              : 'search-bar'
          }
        >
          <div className="inner">
            {/* <Icon Name="map-marker-alt" fas /> */}
            <input
              placeholder={
                pageContext !== false
                  ? 'Or search by another location...'
                  : 'Enter your state...'
              }
              onChange={this.handleInputChange}
            />
            <Icon Name="search" fas />
          </div>
        </div>

        {this.state.resultsActive == true ? (
          <SearchBarResults
            className="search-results-wrapper"
            results={results}
            searchSafeQuery={searchSafeQuery}
            queryActive={this.state.queryActive}
          />
        ) : (
          false
        )}
      </SearchBarStyle>
    );
  }
}

// Our Search Bar Results
const SearchBarResults = ({ results, queryActive, searchSafeQuery }) => {
  return (
    <div className={'search-results'}>
      <ul className="search-results-inner">
        {/* Map all availabe locations */}
        {results.length > 0 ? (
          results.map((result, idx) => {
            // Build our slugified strings for pretty URLs.
            const rootSlug = '/programs/';
            const stateSlug = slugify(result.node.name);
            const slugString = rootSlug + stateSlug + '/';

            return (
              <ResultRow
                parentLocation={result.node.name}
                slugString={slugString}
                searchSafeQuery={searchSafeQuery}
                key={idx}
                result={result}
                queryActive={queryActive}
              />
            );
          })
        ) : (
          <li>
            <div className="results-row">
              <div className="no-results">
                <Icon Name="sad-cry" fas />
                <span className="label">No results found.</span>
                <Link
                  to={'/programs/host-a-program?location=' + searchSafeQuery}
                  className="suggest-link"
                >
                  Interested in hosting your own program in '{searchSafeQuery}'?
                </Link>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

// Our Search Bar Result Individual Rows
class ResultRow extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      rowExpanded: 'unset',
    };

    // Bind expanding function
    this.toggleRow = this.toggleRow.bind(this);
  }

  // Mounted State
  componentDidMount() {
    this.state = {
      rowExpanded: 'unset',
    };
  }

  // Card expanding function
  toggleRow() {
    if (
      this.state.rowExpanded == 'closed' ||
      this.state.rowExpanded == 'unset'
    ) {
      this.setState({
        rowExpanded: 'open',
      });
    } else {
      this.setState({
        rowExpanded: 'closed',
      });
    }
  }

  render() {
    const result = this.props.result;
    const slugString = this.props.slugString;
    const queryActive = this.props.queryActive;
    const searchSafeQuery = this.props.searchSafeQuery;
    const parentLocation = this.props.parentLocation;

    // Logic to show/hide rows on search.
    const showRows = () => {
      if (queryActive == true) {
        if (this.state.rowExpanded == 'unset' && queryActive == true) {
          return true;
        } else if (this.state.rowExpanded == 'closed' && queryActive == true) {
          return false;
        }
      } else {
        if (
          this.state.rowExpanded == 'unset' ||
          this.state.rowExpanded == 'closed'
        ) {
          return false;
        } else {
          return true;
        }
      }
    };

    // For Debugging Purposes:
    // console.log('queryActive: ' + queryActive);
    // console.log('this.state.rowExpanded: ' + this.state.rowExpanded);
    // console.log('showRows: ' + showRows());

    // Filter our counties & cost_codes by searchSafeQuery
    const filteredCountiesAndCostCodes = result.node.counties.filter(county => {
      if (
        county.name.toLowerCase().includes(searchSafeQuery) ||
        county.cost_code_name.toLowerCase().includes(searchSafeQuery)
      ) {
        return county;
      }
    });

    /**
     * Group our Counties by Cost Code
     */

    // Our groupBy function.
    const groupBy = key => array =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});

    // Our groupByCostCode function
    const groupByCostCode = groupBy('cost_code_name');

    // Create our usable & iterable Cost Code Groups
    const costCodeGroups = () => {
      // Our group key-value pairs of cost codes & counties. Not iteratable.
      let costCodeGroups = groupByCostCode(filteredCountiesAndCostCodes);

      // Our entries array of said key-value pairs. Iterable, but illegible.
      let costCodeEntries = Object.entries(costCodeGroups);

      // Our remapping of the above illegible array into something usaable
      let costCodeMapping = costCodeEntries.map((costCode, idx) => {
        // Remap Our Conties
        let costCodeCounties = costCode[1].map((county, idxx) => {
          return county;
        });

        // Our proper array to be used.
        return {
          cost_code_name: costCode[0],
          counties: costCodeCounties,
        };
      });

      return costCodeMapping;
    };

    // Our variable for Cost Codes to iterate through.
    const costCodes = costCodeGroups();

    /**
     * For Debugging Purposes
     */
    // console.log('filteredCountiesAndCostCodes:');
    // console.log(filteredCountiesAndCostCodes);

    // console.log('costCodeGroups():');
    // console.log(costCodeGroups());

    return (
      <li>
        <div
          className={
            showRows() == false
              ? 'results-row'
              : 'results-row results-sub-visible'
          }
        >
          <Link className="top-level" to={slugString}>
            <span>{result.node.name}</span>
          </Link>

          {/* Show/hide action button if Cost Codes available */}
          {filteredCountiesAndCostCodes.length > 0 ? (
            <span
              className="result-action"
              onClick={this.toggleRow}
              onKeyDown={this.props.navOverlayToggle}
              role="button"
              tabIndex="0"
            >
              <span className="result-action-icon" />
            </span>
          ) : (
            false
          )}
        </div>

        {/* Show Cost Codes if availabe */}
        {filteredCountiesAndCostCodes.length > 0 ? (
          <ul
            className={
              showRows() == false
                ? 'results-sub results-sub-hidden'
                : 'results-sub'
            }
          >
            {/* Map Cost Codes */}
            {costCodes.map((costCode, idxx) => {
              // Build our slugified strings for pretty URLs.
              let costCodeSlug = slugify(costCode.cost_code_name);
              let costCodeSlugString = slugString + '/' + costCodeSlug;

              return (
                <li key={idxx}>
                  <div className="results-row">
                    <Link to={costCodeSlugString}>
                      <span>{costCode.cost_code_name}</span>
                    </Link>
                  </div>
                  <ul className="results-sub">
                    {/* Map our counties. */}
                    {costCode.counties.map((county, idxxx) => {
                      // Build our slugified strings for pretty URLs.
                      let countySlug = slugify(county.name);

                      return (
                        <li key={idxxx}>
                          <div className="results-row">
                            <Link to={costCodeSlugString + '/' + countySlug}>
                              <span>{county.name}</span>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        ) : (
          false
        )}
      </li>
    );
  }
}

/**
 * Simple Course Hero Display Component
 */

const CourseHeroContent = ({
  mapWidth,
  mapZedIndex,
  geoData,
  pageContext,
  categoryFilter,
  allCostCodes,
}) => {
  /**
   *
   * Use our React Hook to get our Data
   */
  let dataFetch = DataFetch();

  /**
   * Check our County names if they contain 'County'
   */
  const countyClean = countyName => {
    if (countyName.toLowerCase().includes('county')) {
      return countyName;
    } else {
      return countyName + ' County';
    }
  };

  /**
   * Create page name
   */
  const contextualPageName = () => {
    if (pageContext != false) {
      if (pageContext.isCounty == true) {
        return (
          countyClean(pageContext.name) + ', ' + pageContext.parentState.name
        );
      } else if (pageContext.isCostCode == true) {
        return pageContext.cost_code_name + ', ' + pageContext.parentState.name;
      } else {
        return pageContext.name;
      }
    } else {
      return 'Brooklyn, NYC';
    }
  };

  /**
   * Create our listingContext name -- all programs / workshops / classes / etc.
   */

  const listingContext = context => {
    if (context != undefined) {
      let safeContext = context.toLowerCase();

      if (safeContext === 'workshop') {
        return 'Workshops';
      }

      if (safeContext === 'camp') {
        return 'Camps';
      }

      if (safeContext === 'course') {
        return 'Classes';
      } else {
        return 'Programs';
      }
    } else {
      return 'Programs';
    }
  };

  /**
   * Clean our geoData for States & Counties that don't have courses
   */

  const geoDataVerify = () => {
    // Use our hook's data as source for all Courses
    let fetchedCourses = dataFetch.allPlayWellClient.edges;

    // Clean our data if courses don't exist in the respective States or Counties
    const cleanedStates = geoData.edges
      .map((state, idx) => {
        // Function to check if Courses exist in this State
        const courseStateVerify = currentStateId => {
          // Map our Clients and compare State Ids
          let checkState = fetchedCourses.map((client, idx) => {
            if (client.node.state_id == currentStateId) {
              return true;
            } else {
              return false;
            }
          });

          // Return truthy or falsy if so.
          if (checkState.includes(true)) {
            return true;
          } else {
            return false;
          }
        };

        //  Return our State nodes if Courses exist in this State
        if (courseStateVerify(state.node.playwell_state_id) == true) {
          // Create our cleaned Counties array
          let cleanedCounties = state.node.counties
            .map((county, idxx) => {
              // Function to check if Courses exist in this County
              const courseCountyVerify = currentCountyId => {
                // Map our Clients and compare State Ids
                let checkCounty = fetchedCourses.map((client, idx) => {
                  if (client.node.county_id == currentCountyId) {
                    return true;
                  } else {
                    return false;
                  }
                });

                // Return truthy or falsy if so.
                if (checkCounty.includes(true)) {
                  return true;
                } else {
                  return false;
                }
              };

              if (courseCountyVerify(county.county_id) == true) {
                return county;
              }
            })
            .filter(state => state != undefined);

          // Return our new rebuilt array
          return {
            node: {
              abbrev: state.node.abbrev,
              counties: cleanedCounties,
              id: state.node.id,
              name: state.node.name,
              playwell_state_id: state.node.playwell_state_id,
            },
          };
        }
      })
      .filter(state => state != undefined);

    // Return our cleaned Geo Variable
    return { edges: cleanedStates };
  };

  let allVerifiedCostCodes = costCodesAdapter(geoDataVerify(), true);

  /**
   * For Debugging only
   */

  // console.log('allVerifiedCostCodes:', allVerifiedCostCodes);
  // console.log('geoDataVerify():');
  // console.log(geoDataVerify());

  // console.log('pageContext:');
  // console.log(pageContext);

  // console.log('listingContext()');
  // console.log(queryString.parse(window.location.search));

  // console.log('listingContext(categoryFilter)');
  // console.log(listingContext(categoryFilter));

  // console.log('categoryFilter (courseHeroContent)');
  // console.log(categoryFilter);

  // console.log('geoData:');
  // console.log(geoData);

  /**
   * Return component
   */

  return (
    <CourseHeroContentStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      {pageContext !== false ? (
        <h1>
          <span className="h2">
            <span className="inline">
              Explore LEGO® STEM {listingContext(categoryFilter)} in
            </span>
          </span>
          <span className="location h2">
            <span className="inline">
              <Icon Name="map-marker-alt" fas />
              {contextualPageName()}
            </span>
          </span>
        </h1>
      ) : (
        <h1>
          <span className="h2">
            <span className="inline" style={{ fontWeight: 'bold' }}>
              Find LEGO® STEM {listingContext(categoryFilter)} near you.
            </span>
          </span>
          <span className="location h2">
            <span className="inline" style={{ fontWeight: 'bold' }}>
              <Icon Name="map-marker-alt" fas />
              Get started below.
            </span>
          </span>
        </h1>
      )}
      <SearchBar pageContext={pageContext} geoData={geoDataVerify()} />

      {/**
       *
       * Related queries
       *
       */}
      {pageContext.isCounty == true || pageContext.isCostCode == true ? (
        <div className="related-queries">
          <span>Also see: </span>
          {geoDataVerify()
            .edges.filter(
              state =>
                state.node.playwell_state_id ==
                pageContext.parentState.playwell_state_id
            )
            .map((state, idx) => {
              let stateCounties = state.node.counties
                .filter(county => county.county_id != pageContext.county_id)
                .map((county, idxx) => {
                  // Build our slugified strings for pretty URLs.
                  let rootSlug = '/programs/';
                  let countySlug = slugify(county.name);
                  let costCodeSlug = slugify(county.cost_code_name);
                  let stateSlug = slugify(state.node.name);
                  let slugString =
                    rootSlug +
                    stateSlug +
                    '/' +
                    costCodeSlug +
                    '/' +
                    countySlug +
                    '/';

                  return (
                    <Link key={idxx} to={slugString}>
                      {county.name}
                    </Link>
                  );
                });

              return stateCounties;
            })}
        </div>
      ) : pageContext != false ? (
        <span className="related-queries">
          <span>Also see: </span>
          {geoDataVerify()
            .edges.filter(
              state =>
                state.node.playwell_state_id == pageContext.playwell_state_id
            )
            .map((state, idx) => {
              let stateCounties = state.node.counties.map((county, idxx) => {
                // Build our slugified strings for pretty URLs.
                let rootSlug = '/programs/';
                let countySlug = slugify(county.name);
                let costCodeSlug = slugify(county.cost_code_name);
                let stateSlug = slugify(state.node.name);
                let slugString =
                  rootSlug +
                  stateSlug +
                  '/' +
                  costCodeSlug +
                  '/' +
                  countySlug +
                  '/';

                return (
                  <Link key={idxx} to={slugString}>
                    {county.name}
                  </Link>
                );
              });

              return stateCounties;
            })}
        </span>
      ) : (
        false
      )}
    </CourseHeroContentStyle>
  );
};

export default CourseHeroContent;

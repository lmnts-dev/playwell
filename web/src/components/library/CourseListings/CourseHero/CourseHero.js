// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
import HeroContainer from '../../Hero/HeroContainer';

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
      // Return our filtered results
      */

      if (searchSafeName.includes(searchSafeQuery)) {
        return location;
      } else if (isCountyMatch.length > 0) {
        return location;
      }

      // For Debugging only.
      // console.log('searchSafeCounties:');
      // console.log(searchSafeCounties);

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
              placeholder="Or search by another location..."
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

    // Filter our counties by searchSafeQuery
    const filteredCounties = result.node.counties.filter(county => {
      if (county.name.toLowerCase().includes(searchSafeQuery)) {
        return county;
      }
    });

    // For Debugging Purposes:
    // console.log('filteredCounties:');
    // console.log(filteredCounties);

    return (
      <li>
        <div
          className={
            showRows() == false
              ? 'results-row'
              : 'results-row results-sub-visible'
          }
        >
          <Link to={slugString}>
            <span>{result.node.name}</span>
          </Link>

          {/* Show/hide action button if counties available */}
          {filteredCounties.length > 0 ? (
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

        {/* Show Counties if availabe */}
        {filteredCounties.length > 0 ? (
          <ul
            className={
              showRows() == false
                ? 'results-sub results-sub-hidden'
                : 'results-sub'
            }
          >
            {/* Map Counties */}
            {filteredCounties.map((county, idxx) => {
              // Build our slugified strings for pretty URLs.
              let countySlug = slugify(county.name);
              let costCodeSlug = slugify(county.cost_code_name);
              let countySlugString =
                slugString + '/' + costCodeSlug + '/' + countySlug + '/';

              return (
                <li key={idxx}>
                  <div className="results-row">
                    <Link to={countySlugString}>
                      <span>{county.name}</span>
                    </Link>
                  </div>
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

// Simple Course Hero Display Component
const CourseHeroContent = ({ mapWidth, mapZedIndex, geoData, pageContext }) => {
  // Check our County names if they contain 'County'
  const countyClean = countyName => {
    if (countyName.toLowerCase().includes('county')) {
      return countyName;
    } else {
      return countyName + ' County';
    }
  };

  // Create page name
  const countyState =
    pageContext.isCounty == true
      ? countyClean(pageContext.name) + ', ' + pageContext.parentState.name
      : pageContext.isCostCode == true
      ? pageContext.cost_code_name + ', ' + pageContext.parentState.name
      : pageContext.name;

  return (
    <CourseHeroContentStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <h1>
        <span className="h2">
          <span className="inline">Explore LEGO® STEM Programs near</span>
        </span>
        <span className="location h2">
          <span className="inline">
            <Icon Name="map-marker-alt" fas />
            {pageContext != undefined ? (
              <span>{countyState}</span>
            ) : (
              <span>Brooklyn, NYC</span>
            )}
          </span>
        </span>
      </h1>
      <SearchBar geoData={geoData} />
    </CourseHeroContentStyle>
  );
};

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
}) => (
  <CourseHeroStyle bg={bg}>
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
          <CourseHeroContent
            geoData={geoData}
            mapZedIndex={mapZedIndex}
            mapWidth={mapWidth}
            pageContext={pageContext}
          />
        </Box>
      </Flex>
    </HeroContainer>
  </CourseHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

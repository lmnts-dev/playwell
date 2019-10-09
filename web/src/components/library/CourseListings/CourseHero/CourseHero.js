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
      filteredResults: [],
      resultsActive: false,
    };

    // Bind our functions
    // this.searchWrapperRef = this.searchWrapperRef.bind(this);
    this.handleSearchResultsToggle = this.handleSearchResultsToggle.bind(this);
  }

  // Mounted state
  componentDidMount() {
    // Listen for click events to show/hide results
    document.addEventListener('mousedown', this.handleSearchResultsToggle);

    // Assign State
    this.state = {
      filteredResults: [],
      resultsActive: false,
    };
  }

  // Unmounted state
  componentWillUnmount() {
    // Remove listener for click events to show/hide results
    document.removeEventListener('mousedown', this.handleSearchResultsToggle);

    // De-assign State
    this.state = {
      filteredResults: [],
      resultsActive: false,
    };
  }

  // Assign Ref to search bar
  // searchWrapperRef(node) {
  //   this.searchWrapperRef = node;
  // }

  // Function to listen for mouse clicks to show/hide results bar
  handleSearchResultsToggle(event) {
    // If the click is outside of the input, hide results
    if (this.refs.inputField && !this.refs.inputField.contains(event.target)) {
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

  render() {
    const results = this.props.geoData.edges;

    return (
      <SearchBarStyle>
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
              ref="inputField"
              placeholder="Or search by another location..."
            />
            <Icon Name="search" fas />
          </div>
        </div>

        {this.state.resultsActive == true ? (
          <SearchBarResults
            className="search-results-wrapper"
            results={results}
          />
        ) : (
          false
        )}
      </SearchBarStyle>
    );
  }
}

// Our Search Bar Results
const SearchBarResults = ({ results, resultsActive }) => {
  return (
    <div className={'search-results'}>
      <ul className="search-results-inner">
        {/* Map all availabe locations */}
        {results.map((result, idx) => {
          // Build our slugified strings for pretty URLs.
          const rootSlug = '/programs/';
          const stateSlug = slugify(result.node.name);
          const slugString = rootSlug + stateSlug + '/';

          return (
            <ResultRow slugString={slugString} key={idx} result={result} />
          );
        })}
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
      rowExpanded: false,
    };

    // Bind expanding function
    this.toggleRow = this.toggleRow.bind(this);
  }

  // Mounted State
  componentDidMount() {
    this.state = {
      rowExpanded: false,
    };
  }

  // Card expanding function
  toggleRow() {
    if (this.state.rowExpanded == false) {
      this.setState({
        rowExpanded: true,
      });
    } else {
      this.setState({
        rowExpanded: false,
      });
    }
  }

  render() {
    const result = this.props.result;
    const slugString = this.props.slugString;

    return (
      <li>
        <div
          className={
            this.state.rowExpanded == false
              ? 'results-row'
              : 'results-row results-sub-visible'
          }
        >
          <Link to={slugString}>
            <span>{result.node.name}</span>
          </Link>

          {/* Show/hide action button if counties available */}
          {result.node.counties.length > 0 ? (
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
        {result.node.counties.length > 0 ? (
          <ul
            className={
              this.state.rowExpanded == false
                ? 'results-sub results-sub-hidden'
                : 'results-sub'
            }
          >
            {/* Map Counties */}
            {result.node.counties.map((county, idxx) => {
              // Build our slugified strings for pretty URLs.
              let countySlug = slugify(county.name);
              let countySlugString = slugString + countySlug + '/';

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

const CourseHeroContent = ({ mapWidth, mapZedIndex, geoData }) => {
  return (
    <CourseHeroContentStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <h1>
        <span className="h2">
          <span className="inline">Explore LEGO® STEM Programs near</span>
        </span>
        <span className="location h2">
          <span className="inline">
            <Icon Name="map-marker-alt" fas />
            <span>Brooklyn, NYC</span>
          </span>
        </span>
      </h1>
      <SearchBar geoData={geoData} />
    </CourseHeroContentStyle>
  );
};

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
          />
        </Box>
      </Flex>
    </HeroContainer>
  </CourseHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

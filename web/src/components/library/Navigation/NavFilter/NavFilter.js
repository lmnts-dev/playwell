// <NavFilter /> Component:
// Navigation location search
// todo: Componentize for reuse

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
import _ from 'lodash';
import slugify from 'helpers/slugify';
import hexToRGB from 'helpers/hexToRGB';

// Styles
import { LocationFilterStyle, SearchBarStyle, ArrowLink } from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import { Btn } from 'components/library/Btn/';

// Constants
import { Theme, Root } from 'constants/Theme';

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

    const stateEdges = this.props.data.allPlayWellStates.edges;
    const navOverlayToggle = this.props.navOverlayToggle;

    // Create our Results array
    const results = stateEdges.filter(location => {
      // Clean our Location's name
      const searchSafeName = location.node.name.toLowerCase();

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
      } else if (isCostCodeMatch.length > 0) {
        return location;
      }
    });

    // console.log('results:');
    // console.log(results);
    // console.log('navToggle:');
    // console.log(navOverlayToggle);

    return (
      <SearchBarStyle ref="searchInputWrapper">
        <div
          className={
            this.state.resultsActive == true
              ? 'search-bar results-visible'
              : 'search-bar'
          }
        >
          {/* <Btn
            Label="Brooklyn, NYC"
            Destination="/"
            onClick={this.handleInputChange}
            onFocus={this.handleInputChange}
            BorderStyle="solid"
            BorderWidth="1px"
            BorderColor={Theme.Color.Primary}
            TextColor={Theme.Color.Primary}
            IconClass="map-marker-alt"
            IconPosition="left"
            IconFas
          /> */}
          <SearchBarStyle.Item>
            <span className="filter-inner">
              <Icon Name="pin" />
              <span>Brooklyn, NYC</span>
              <Icon Name="carat" className="ico-carat" />
            </span>
            <SearchBarStyle.FilterList className="list">
              {this.state.resultsActive == true ? (
                <ul className="search-results">
                  <div className="inner">
                    <Icon Name="search" fas />
                    <input
                      placeholder="Enter State..."
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <SearchBarResults
                    className="search-results-wrapper"
                    results={results}
                  />
                </ul>
              ) : (
                false
              )}
            </SearchBarStyle.FilterList>
          </SearchBarStyle.Item>
        </div>
      </SearchBarStyle>
    );
  }
}

// Our Search Bar Results
const SearchBarResults = ({ results }) => {
  return (
    <>
      {/* Map all availabe locations */}
      {results.length > 0 ? (
        results.map((result, idx) => {
          return (
            <li key={idx}>
              <Link
                to={'/locations/' + slugify(result.node.name.toLowerCase())}
              >
                <span>{result.node.name}</span>
              </Link>
            </li>
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
    </>
  );
};

// Simple Course Hero Display Component
const LocationFilterSearchBar = ({ data }) => {
  return <SearchBar data={data} />;
};

// Full Wrapper
export const NavFilter = ({
  BgMatch,
  BgQuery,
  BgAlt,
  color,
  px,
  bg,
  data,
  navOverlayToggle,
}) => {
  // Use our hook's data as source
  const fetchedData = DataFetch();
  // console.log('fetchedData:');
  // console.log(fetchedData);

  return (
    <LocationFilterStyle bg={bg}>
      <LocationFilterSearchBar data={fetchedData} />
    </LocationFilterStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

// <NavFilter /> Component:
// Navigation location search
// todo: Componentize for reuse, naming/cleanup for <SearchBarStyle.Button>

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
import _ from 'lodash';
import slugify from 'helpers/slugify';

// Styles
import { NavFilterStyle, SearchBarStyle } from './styles.scss';

// Components
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

// Constants
import { Theme } from 'constants/Theme';

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
      resultsActive: true,
      queryActive: false,
    };

    // Bind our functions
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchResultsToggle = this.handleSearchResultsToggle.bind(this);
  }

  // Mounted state
  componentDidMount() {
    // Assign State
    this.state = {
      query: '',
      resultsActive: false,
      queryActive: false,
    };
  }

  // Unmounted state
  componentWillUnmount() {
    // De-assign State
    this.state = {
      query: '',
      resultsActive: true,
      queryActive: true,
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

    // document.addEventListener('mouseover', this.handleSearchResultsToggle);
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

    return (
      <SearchBarStyle ref="searchInputWrapper">
        <div
          className={
            this.state.resultsActive == true
              ? 'search-bar results-visible'
              : 'search-bar'
          }
        >
          <SearchBarStyle.Button className="btn">
            {/* <Btn
              Label="Brooklyn, NYC"
              Destination="/"
              BorderStyle="solid"
              BorderWidth="1px"
              BorderColor={Theme.Color.White}
              TextColor={Theme.Color.White}
              IconClass="map-marker-alt"
              IconPosition="left"
              IconFas
            /> */}
            {this.props.hero ? (
              <span className="filter-inner">
                <Icon Name="pin" />
                <span>Brooklyn, NYC</span>
                <Icon Name="carat" className="ico-carat" />
              </span>
            ) : (
              <div className="btn-inner btn-border">
                <Icon Name="map-marker-alt" fas />
                <span className="location">Brooklyn, NYC</span>
                <span className="ico-carat">
                  <Icon Name="carat" />
                </span>
              </div>
            )}
            <SearchBarStyle.FilterList className="list">
              <div className="carat">
                <div className="arrow-up" />
              </div>
              {this.state.resultsActive == true ? (
                <div className="search-container">
                  <div className="inner">
                    <Icon Name="search" fas />
                    <input
                      placeholder="Enter State..."
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <ul className="search-results">
                    <SearchBarResults
                      className="search-results-wrapper"
                      results={results}
                    />
                  </ul>
                </div>
              ) : (
                false
              )}
            </SearchBarStyle.FilterList>
          </SearchBarStyle.Button>
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
            <li>
              <Link
                to={'/locations/' + slugify(result.node.name.toLowerCase())}
                key={idx}
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
const NavFilterSearchBar = ({ data, hero }) => {
  return <SearchBar data={data} hero={hero} />;
};

// Full Wrapper
export const NavFilter = ({ bg, hero }) => {
  // Use our hook's data as source
  const fetchedData = DataFetch();

  return (
    <NavFilterStyle bg={bg}>
      <NavFilterSearchBar data={fetchedData} hero={hero} />
    </NavFilterStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

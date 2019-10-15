// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
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
    const results = this.props.states.edges.filter(location => {
      // Clean our Location's name
      const searchSafeName = location.node.name.toLowerCase();

      /*
      // Return our filtered results
      */

      if (searchSafeName.includes(searchSafeQuery)) {
        return location;
      }
      

      // For Debugging only.
      // console.log('searchSafeCounties:');
      // console.log(searchSafeCounties);

      // console.log(isCostCodeMatch.length > 0 ? true : false);
      // console.log(isCostCodeMatch);

      // console.log('isCountyMatch:');
      // console.log(isCountyMatch);

      console.log('searchSafeName: ' + searchSafeName);
      console.log('searchSafeQuery: ' + searchSafeQuery);
      console.log('filteredManagers:');
    });

    // For Debugging only.
    console.log('results:');
    console.log(results);
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

        {/* {this.state.resultsActive == true ? (
          <SearchBarResults
            className="search-results-wrapper"
            results={results}
            searchSafeQuery={searchSafeQuery}
            queryActive={this.state.queryActive}
          />
        ) : (
          false
        )} */}
      </SearchBarStyle>
    );
  }
}

// Simple Course Hero Display Component
const CourseHeroContent = ({ states, managers }) => {
  return <SearchBar states={states} managers={managers} />;
};

// Full Wrapper
export const ContactManager = ({
  BgMatch,
  BgQuery,
  BgAlt,
  color,
  px,
  bg,
  states,
  managers,
}) => (
  <CourseHeroStyle bg={bg}>
    <CourseHeroContent states={states} managers={managers} />
  </CourseHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

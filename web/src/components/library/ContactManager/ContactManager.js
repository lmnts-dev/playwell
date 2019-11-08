// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Helpers
import _ from 'lodash';
import locationMatch from 'helpers/LocationMatch';

// Styles
import {
  CourseHeroStyle,
  SearchBarStyle,
  CourseHeroContentStyle,
  Article,
} from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import Accordion from 'components/library/Accordion';
import ImgMatch from 'components/core/ImgMatch';

// Helpers
import slugify from 'helpers/slugify';
import hexToRGB from 'helpers/hexToRGB';

// Constants
import { Theme, Root } from 'constants/Theme';

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
    document.addEventListener('keypress', this.handleSearchResultsToggle);

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
    document.removeEventListener('keypress', this.handleSearchResultsToggle);

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

    document.addEventListener('keypress', this.handleSearchResultsToggle);
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

    const managerEdges = this.props.data.allPlayWellManagers.edges;
    const stateEdges = this.props.data.allPlayWellStates.edges;

    // Create our Results array
    const results = managerEdges.filter(location => {
      // Clean our Location's name
      const searchSafeName = location.node.state.toLowerCase();

      /*
      // Clean our county names, make them iterable. and
      // return true if it is inside of the new array
      */

      // // Create empty array
      // const searchSafeCounties = [];

      // // Iterate through Counties and add to said array
      // const cleanCountyNames = () => {
      //   //  Convert each county name to lowercase
      //   location.node.counties.forEach((county, idx) => {
      //     searchSafeCounties.push(county.name.toLowerCase());
      //   });
      // };

      // // Run above function synchronously
      // cleanCountyNames();

      // // Iterate through cleaned array with clean query and return truthy
      // // or falsy if it exists
      // const isCountyMatch = searchSafeCounties.filter(county => {
      //   if (county.includes(searchSafeQuery)) {
      //     return true;
      //   }
      // });

      /*
      // Clean our Cost Code Names, make them iterable. and
      // return true if it is inside of the new array
      */

      // Create empty array
      const searchSafeCostCodes = [];

      // Iterate through Counties and add to said array
      const cleanCostCodes = () => {
        //  Convert each county name to lowercase
        searchSafeCostCodes.push(location.node.cost_code_name.toLowerCase());
      };

      // Run above function synchronously
      cleanCostCodes();

      // Iterate through cleaned array with clean query and return truthy
      // or falsy if it exists
      const isCostCodeMatch = searchSafeCostCodes.filter(costCode =>
        costCode.includes(searchSafeQuery)
      );

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
          <div className="inner">
            {/* <Icon Name="search" fas /> */}
            <input
              placeholder="Enter State..."
              onChange={this.handleInputChange}
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
const SearchBarResults = ({ results }) => {
  return (
    <>
      {/* Map all availabe locations */}
      {results.length > 0 ? (
        results.map((result, idx) => {
          return (
            <Accordion
              key={idx}
              title={result.node.cost_code_name}
              chevronColor={Theme.Color.White}
              color={hexToRGB(Theme.Color.White, 0.7)}
              colorActive={Theme.Color.Whtie}
              borderColor={Theme.Color.Galaxy}
            >
              <Box pl={40}>
                <Article>
                  <Article.Figure>
                    <ImgMatch
                      src="avatar-yoda.jpg"
                      AltText="PlayWell program state coordinator"
                    />
                  </Article.Figure>
                  <Article.Info>
                    <Flex flexWrap="wrap">
                      <Article.Info.Details>
                        {result.node.state} <span>{result.node.cost_code}</span>
                      </Article.Info.Details>
                      <Article.Info.Name fontSize="1.6rem">
                        {result.node.manager}
                      </Article.Info.Name>
                      <Article.Info.Contact>
                        <span>
                          <a href={'mailto:' + result.node.email}>
                            {result.node.email}
                          </a>
                        </span>
                        {/* <span>
                          <a href={'tel:' + result.node.cell_number}>
                            {result.node.cell_number}
                          </a>
                        </span> */}
                        {/* <span>
                          <a href="/">More</a>
                        </span> */}
                      </Article.Info.Contact>
                    </Flex>
                  </Article.Info>
                </Article>
              </Box>
            </Accordion>
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
const CourseHeroContent = ({ data }) => {
  return <SearchBar data={data} />;
};

// Full Wrapper
export const ContactManager = ({
  BgMatch,
  BgQuery,
  BgAlt,
  color,
  px,
  bg,
  data,
}) => (
  <CourseHeroStyle bg={bg}>
    <CourseHeroContent data={data} />
  </CourseHeroStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

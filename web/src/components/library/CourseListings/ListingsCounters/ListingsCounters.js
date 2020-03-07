// Lisiting Counters Component:
// This is component to count the number of course types available, as well
// as return boolean values for filtering the list by it's respective counter.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Constants
// import { Base } from 'constants/styles/Base';
// import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';
import { Box, Flex } from 'components/library/Elements';

// Helpers
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Styles
import { ListingsCountersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// { courseData, setListingFilter }

export class ListingsCounters extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    this.state = {
      active: false,
      activeContext: '',
    };

    // Bind toggleActiveCategory function
    this.toggleActiveCategory = this.toggleActiveCategory.bind(this);
  }

  // Toggle Active Category State
  toggleActiveCategory(context) {
    if (context == this.state.activeContext) {
      this.setState({
        activeContext: '',
        active: false,
      });

      // Run our parent function from CourseListings.js to filter categories.
      this.props.setListingFilter('categoryFilter', context);

      // console.log('this.state.activeContext: ' + this.state.activeContext);
      // console.log('this.state.active: ' + this.state.active);
    } else {
      this.setState({
        activeContext: context,
        active: true,
      });

      // Run our parent function from CourseListings.js to filter categories.
      this.props.setListingFilter('categoryFilter', context);

      // console.log('this.state.activeContext: ' + this.state.activeContext);
      // console.log('this.state.active: ' + this.state.active);
    }
  }

  render() {
    const courseData = this.props.courseData;
    const categoryFilter = this.props.categoryFilter;

    // console.log('this.state.activeContext: ' + this.state.activeContext);
    // console.log('this.state.active: ' + this.state.active);

    // Re-map all program data to reduce (count) the data easier.

    const allProgramsMapTransformer = data => {
      // If there's data
      if (data) {
        // Define the empty array
        const allPrograms = [];

        // Loop through all clients.
        let clientProgramsMap = data.map((client, idx) => {
          // Map the individual courses in the Client's data.
          let clientPrograms = client.node.courses.map((program, idxx) => {
            // Return the new array.
            return program;
          });

          // Return the new array.
          return clientPrograms;
        }, this);

        // Concatenate and return only an array of courses.
        return allPrograms.concat.apply([], clientProgramsMap);
      }

      // Else, throw an error message that the data doesn't exist.
      else {
        return; // Add error message
      }
    };

    // Reduce Program Data to Get Proper Counts
    const programReducer = data => {
      // If there's data
      if (data) {
        // Let's reduce it
        let programCounts = data.reduce(
          // Establish an accumulator, i.e., something that gets
          // incremented as this reducer runs. Also define your callback.
          // ('client' in this case)
          function(acc, client) {
            acc[client.category_group_name] =
              (acc[client.category_group_name] || 0) + 1;

            // Return the new array.
            return acc;
          },

          // This is your accumulator's starting value, kind of like a schema.
          {}
        );

        // Return your reducer function.
        return programCounts;
      }
      // Else, throw an error message that the data doesn't exist.
      else {
        return; // Add error message
      }
    };

    // Assign our newly counted data variables.
    const allProgramsMap = allProgramsMapTransformer(courseData);
    const reducedPrograms = programReducer(allProgramsMap);
    const reducedProgramsEntries = Object.entries(reducedPrograms);

    // The Items
    const ListingsCountersItem = ({
      count,
      context,
      categoryFilter,
      btnTheme,
    }) => {

      /**
       *
       * For Debugging Only
       *
       */
      // console.log('categoryFilter:');
      // console.log(categoryFilter);
      // console.log('context:');
      // console.log(context);

      /**
       *
       * Return counters
       *
       */
      return (
        <ListingsCountersStyle.Item
          btnTheme={btnTheme}
          // Pass our toggle function from the CourseListings component
          onClick={() => this.toggleActiveCategory(context)}
          // These are eslint errors for accessibility below.
          onKeyPress={() => this.toggleActiveCategory(context)}
          role="button"
          tabIndex="0"
          className={
            categoryFilter == context
              ? 'filter-item active-item'
              : 'filter-item'
          }
        >
          <span className="counter-inner">
            <span>{count + ' '}</span>
            <span>{context == 'Course' ? 'Classes' : context + 's'}</span>
          </span>
        </ListingsCountersStyle.Item>
      );
    };

    return (
      <ListingsCountersStyle
        className={
          categoryFilter != '' || this.state.active ? 'active-filter' : false
        }
      >
        {/* Remap our entries into an array and spit out the counts and appropriate
        CategoryMetaMatch for their theme. */}
        {reducedProgramsEntries.map((entry, idx) => {
          // console.log(reducedProgramsEntries) to see these array values.
          let count = entry[1];
          let programContext = entry[0];

          // Return the items.
          return (
            <ListingsCountersItem
              count={count}
              categoryFilter={categoryFilter}
              label={programContext}
              context={programContext}
              key={idx}
              btnTheme={{
                bgColor: CategoryMetaMatch(programContext).theme.bgColor,
                txtColor: CategoryMetaMatch(programContext).theme.primaryColor,
              }}
            />
          );
        }, this)}
      </ListingsCountersStyle>
    );
  }
}

//////////////////////////////////////////////////////////////////////
// End Component

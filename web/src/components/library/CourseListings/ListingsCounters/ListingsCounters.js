// Lisiting Counters Component:
// This is component to count the number of course types available, as well
// as return boolean values for filtering the list by it's respective counter.

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
import { Box, Flex } from 'components/library/Elements';

// Helpers
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Styles
import { ListingsCountersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ListingsCounters = ({ courseData }) => {
  // Re-map all program data to reduce (count) the data easier.

  function allProgramsMapTransformer(data) {
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
  }

  // Reduce Program Data to Get Proper Counts
  function programReducer(data) {
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
  }

  // Assign our newly counted data variables.
  const allProgramsMap = allProgramsMapTransformer(
    courseData.allPlayWellClient.edges
  );
  const reducedPrograms = programReducer(allProgramsMap);
  const reducedProgramsEntries = Object.entries(reducedPrograms);

  // The Items
  const ListingsCountersItem = ({ count, label, context, btnTheme }) => {
    return (
      <ListingsCountersStyle.Item
        btnTheme={btnTheme}
        onClick={() => console.log(context)}
      >
        <span class="counter-inner">
          <span>{count + ' '}</span>
          <span>{label + 's'}</span>
        </span>
      </ListingsCountersStyle.Item>
    );
  };
  return (
    <ListingsCountersStyle>
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
};

//////////////////////////////////////////////////////////////////////
// End Component

// costCodesAdapter.js

// This is our adapter to produce a list of cost codes and their associated
// states. Use with /hooks/DataFetch.

// Example usage:
//
// import { DataFetch } from 'hooks/DataFetch';
// let dataFetch = DataFetch();
// console.log(costCodesAdapter());

import React, { PureComponent } from 'react';

// Begin Helper
//////////////////////////////////////////////////////////////////////

export const costCodesAdapter = (data, verified) => {
  // Grab the right data depending if we are using verified locations.

  let statesEdges =
    verified == true ? data.edges : data.allPlayWellStates.edges;

  let allCountiesArrays = statesEdges.map((state, idx) => {
    // Create empty Counties Array
    let countyArray = [];

    // Push each County Array from all States into a new array of arrays.
    // We don't want an array of arrays - so we'll flatten it below.
    countyArray.push(state.node.counties);

    // Return our flattened array.
    return countyArray;
  });

  // Flatten our arrays.
  // Thanks to https://www.freecodecamp.org/news/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f/
  let allCountiesData = [].concat.apply([], allCountiesArrays);
  let allCountiesFlattened = [].concat.apply([], allCountiesData);

  // Utilize Set() & .map to return only unique values - which is all of our
  // cost codes.
  let costCodesSet = new Set(
    allCountiesFlattened.map((county, idx) => {
      return {
        code: parseInt(county.cost_code),
        name: county.cost_code_name,
      };
    })
  );

  let allCostCodes = [...costCodesSet];

  // Get all of our Unique Cost Codes & remove duplicates
  let uniqueCostCodes = {};
  let allCostCodesFiltered = allCostCodes.filter(
    costCode =>
      !uniqueCostCodes[costCode.name] && (uniqueCostCodes[costCode.name] = true)
  );

  // Function to sort our cost codes by value
  const sortCostCodes = (a, b) => {
    if (a.code < b.code) {
      return -1;
    }
    if (a.code > b.code) {
      return 1;
    }
    return 0;
  };

  // Sort our cost codes
  let allCostCodesSorted = allCostCodesFiltered.sort(sortCostCodes);

  // Add matching States to our cost codes.
  let allCostCodesWithStates = allCostCodesSorted.map((costCode, idx) => {
    // Check if State has Cost Code
    let costCodeWithState = statesEdges.map((state, idxx) => {
      // Check if County has Cost Code
      let countyHasCostCode = state.node.counties.filter(
        county => parseInt(county.cost_code) == parseInt(costCode.code)
      );

      // Return truthy or false if Counties have the Cost Code.
      if (countyHasCostCode.length > 0) {
        return {
          state_id: state.node.playwell_state_id,
          name: state.node.name,
          counties: state.node.counties
            .map((county, idxxxx) => {
              return {
                county_id: parseInt(county.county_id),
                name: county.name,

                // For Debugging:
                cost_code_name: county.cost_code_name,
                cost_code: parseInt(county.cost_code),
              };
            })
            .filter(
              county => parseInt(county.cost_code) == parseInt(costCode.code)
            ),
        };
      } else {
        return false;
      }
    });

    // Return truthy or false if Counties have the Cost Code.
    if (costCodeWithState != false) {
      let statesGroup = costCodeWithState.filter(entry => entry != false);

      return {
        code: costCode.code,
        name: costCode.name,
        states: statesGroup,
      };
    } else {
      return {
        code: costCode.code,
        name: costCode.name,
        states: [],
      };
    }
  });

  return allCostCodesWithStates;

  /**
   *
   * For Debugging Only.
   *
   */

  // console.log('statesEdges:');
  // console.log(statesEdges);
  // console.log('allCountiesArrays:');
  // console.log(allCountiesArrays);
  // console.log('allCountiesFlattened:');
  // console.log(allCountiesFlattened);
  // console.log('costCodesSet:');
  // console.log(costCodesSet);
  // console.log('allCostCodes:');
  // console.log(allCostCodes);
  // console.log('allCostCodesFiltered:');
  // console.log(allCostCodesFiltered);
  // console.log('allCostCodesSorted:');
  // console.log(allCostCodesSorted);
  console.log('allCostCodesWithStates:', allCostCodesWithStates);
};

// GraphQL Transformer for the PlayWell Coursefinder API.
// By Peter Laxalt

const axios = require('axios');
const crypto = require('crypto');

// Our API Routes:
// Contact Steve Halford at PlayWell for more information.
const CLIENT_API_URI = 'https://course-finder.play-well.org/webservice/courses';
const MANAGER_API_URI =
  'https://course-finder.play-well.org/webservice/managers';
const LOCATION_STATES_API_URI =
  'https://course-finder.play-well.org/webservice/states';

// Create our GraphQL Architecture
exports.sourceNodes = async ({ actions }) => {
  // `createNode` action is to create GraphQL nodes that we can query.
  const { createNode } = actions;

  // Client API Route to GraphQL Architecture:
  // This is to return PlayWell Clients & Courses.
  const client_results = await axios.get(CLIENT_API_URI);

  for (const client of client_results.data) {
    await createNode({
      children: [],
      id: client.client_location_id.toString(),
      display_address: client.display_address,
      geocode_address: client.geocode_address,
      public_note: client.public_note,
      location_lng: client.location_lng,
      location_lat: client.location_lat,
      state_id: client.state_id,
      county_id: client.county_id,
      client_location_name: client.client_location_name,
      courses: client.courses,
      parent: null,
      internal: {
        type: 'PlayWellClient',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(client))
          .digest(`hex`),
      },
    });
  }

  // Manager API Route to GraphQL Architecture:
  // This is to return all PlayWell Managers.
  const manager_results = await axios.get(MANAGER_API_URI);

  // Create our GraphQL index of managers.
  // Create an index so we can have an ID per manager.
  let manager_index = 0;

  for (const manager of manager_results.data) {
    // Create an index so we can have an ID per manager.
    manager_index = manager_index + 1;

    await createNode({
      children: [],
      id: manager_index.toString(),
      manager: manager.manager,
      email: manager.email,
      cell_number: manager.cell_number,
      cost_code: manager.cost_code,
      cost_code_name: manager.cost_code_name,
      state: manager.state,
      state_id: manager.state_id,
      counties: manager_results.counties,
      parent: null,
      internal: {
        type: 'PlayWellManagers',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(manager))
          .digest(`hex`),
      },
    });
  }

  // States API Route to GraphQL Architecture:
  // This is to return all PlayWell States & Counties.
  const location_states_results = await axios.get(LOCATION_STATES_API_URI);

  // Create internal index of states. For internal use only.
  let state_index = 0;

  // Create our GraphQL index of states & their respective counties.
  for (const state of location_states_results.data) {
    // Create an index so we can have an ID per State.
    state_index = state_index + 1;

    // Our function to loop through the county data.

    let counties = [];
    const COUNTIES_API_URI = supplied_id =>
      'https://course-finder.play-well.org/webservice/state/' +
      supplied_id +
      '/counties';

    const getCountiesData = async state_id => {
      // create a new promise inside of the async function
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 2000); // resolve
      });

      try {
        counties[0] = await axios.get(COUNTIES_API_URI(state_id)).then(res => {
          counties.push(res);
        });
      } catch (err) {
        console.log(err);
      }

      let result = await promise;

      return counties[0];
    };

    const countiesDataResults = state_id => {
      let results = getCountiesData(state_id);
    };

    console.log('Node for ' + state.name + ' Created');
    console.log(state.name + "'s query for counties: ");
    console.log(countiesDataResults(state.state_id));
    console.log(counties);

    await createNode({
      children: [],
      id: state_index.toString(),
      playwell_state_id: state.state_id.toString(),
      name: state.name,
      abbrev: state.abbrev,
      parent: null,
      counties: getCountiesData(state.state_id),
      internal: {
        type: 'PlayWellStates',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(state))
          .digest(`hex`),
      },
    });
  }
};

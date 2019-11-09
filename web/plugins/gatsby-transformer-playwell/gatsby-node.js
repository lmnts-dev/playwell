// GraphQL Transformer for the PlayWell Coursefinder API.
// By Peter Laxalt 2019
// Contact Steve Halford at PlayWell for more information about the backend
// of course-finder.play-well.org/.

const axios = require('axios');
const crypto = require('crypto');

// Our Client API Route:
const CLIENT_API_URI = 'https://course-finder.play-well.org/webservice/courses';

// Create our Client GraphQL Architecture
exports.sourceNodes = async ({ actions }) => {
  // `createNode` action is to create GraphQL nodes that we can query.
  const { createNode } = actions;

  // Client API Route to GraphQL Architecture:
  // This is to return PlayWell Clients & Courses.
  const client_results = await axios.get(CLIENT_API_URI);

  client_results.data.forEach(async (client, idx) => {
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
  });

  // Manager API Route to GraphQL Architecture:
  const MANAGER_API_URI =
    'https://course-finder.play-well.org/webservice/managers';

  // This is to return all PlayWell Managers.
  const manager_results = await axios.get(MANAGER_API_URI);

  // Create our GraphQL index of Managers.
  manager_results.data.forEach(async (manager, idx) => {
    await createNode({
      children: [],
      id: idx.toString(),
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
  });

  // States API Route to GraphQL Architecture:
  // This is to return all PlayWell States & Counties.
  const LOCATION_STATES_API_URI =
    'https://course-finder.play-well.org/webservice/states';

  // Get our results from the API above.
  const location_states_results = await axios.get(LOCATION_STATES_API_URI);

  // Initialize our counties URI builder.
  const COUNTIES_API_URI = supplied_id =>
    'https://course-finder.play-well.org/webservice/state/' +
    supplied_id +
    '/counties';

  // Our function to loop through the appropriate county + state ID combination
  // and add the results to our counties array.
  const getCountiesData = state_id => {
    return axios
      .get(COUNTIES_API_URI(state_id))
      .catch(error => console.error(error));
  };

  // Create Promises array of Counties with same indexes as their respective States.
  // We'll later use this below in Promise.all to resolve them into the data we need.
  const locationsPromises = location_states_results.data.map(
    (location, idx) => {
      return getCountiesData(location.state_id);
    }
  );

  //// Resolve County Promises:

  // First establish an empty array
  let countiesArray = [];

  // Don't let any code below run until the Promises have been rsolved
  await Promise.all(locationsPromises).then(res => {
    countiesArray = res;
  });

  // Create our GraphQL index of states & their respective counties.
  location_states_results.data.forEach(async (state, idx) => {
    // For Debugging Purposes Only:
    // console.log('Node for ' + state.name + ' Created');
    // console.log(state.name + "'s query for counties: ");
    // console.log(COUNTIES_API_URI(state.state_id));
    // console.log('countiesArray');
    // console.log(countiesArray[idx].data);

    // Create our nodes.
    await createNode({
      children: [],
      id: idx.toString(),
      playwell_state_id: state.state_id.toString(),
      name: state.name,
      abbrev: state.abbrev,
      parent: null,
      counties: countiesArray[idx].data,
      internal: {
        type: 'PlayWellStates',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(state))
          .digest(`hex`),
      },
    });
  });
};

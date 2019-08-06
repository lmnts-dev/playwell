// GraphQL Transformer for the PlayWell Coursefinder API.
// By Peter Laxalt

const axios = require('axios');
const crypto = require('crypto');

// Our API Routes:
// Contact Steve Halford at PlayWell for more information.
const CLIENT_API_URI = 'https://course-finder.play-well.org/webservice/courses';
const MANAGER_API_URI =
  'https://course-finder.play-well.org/webservice/managers';

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

};

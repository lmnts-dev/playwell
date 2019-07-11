// GraphQL Transformer for the PlayWell Coursefinder API.
// By Peter Laxalt

const axios = require('axios');
const crypto = require('crypto');

const API_URI =
  'https://course-finder.play-well.org/webservice/courses';

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const result = await axios.get(API_URI);
  for (const client of result.data) {
    await createNode({
      children: [],
      id: client.client_location_id.toString(),
      display_address: client.display_address,
      geocode_address: client.geocode_address,
      public_note: client.public_note,
      location_lng: client.location_lng,
      location_lat: client.location_lat,
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
};

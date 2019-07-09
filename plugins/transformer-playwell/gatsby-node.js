// Transformer for the PlayWell Coursefinder API.

const axios = require('axios');
const crypto = require('crypto');

const API_URI =
  'https://course-finder.play-well.org/webservice/search-bounds?southwest_lat=47.52238165054658&southwest_lng=-122.79864642255859&northeast_lat=47.689970088583664&northeast_lng=-121.8654951774414';

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

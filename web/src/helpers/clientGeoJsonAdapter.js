// clientGeoJsonAdapter.js

// This is our adapter to convert our Client data into usable Geo Json data for Mapbox.
// Read more: https://geojson.org/

// Example usage:
//
// import { DataFetch } from 'hooks/DataFetch';
// let dataFetch = DataFetch();
// console.log(clientGeoJsonAdapter(dataFetch.allPlayWellClient.edges));

import React, { PureComponent } from 'react';

// Begin Helper
//////////////////////////////////////////////////////////////////////

export const clientGeoJsonAdapter = data => {
  // Remap our data to abide by GeoJson syntax
  let allPlayWellClientGeoFeatures = data.map(client => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [client.node.location_lat, client.node.location_lng],
      },
      properties: {
        title: client.node.client_location_name,
        icon: 'monument',
      },
    };
  });

  return allPlayWellClientGeoFeatures;

  /**
   *
   * For Debugging Only.
   *
   */
};

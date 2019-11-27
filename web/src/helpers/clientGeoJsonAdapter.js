// clientGeoJsonAdapter.js

// This is our adapter to convert our Client data into usable Geo Json data for Mapbox.
// Read more: https://geojson.org/

// Example usage:
//
// import { DataFetch } from 'hooks/DataFetch';
// let dataFetch = DataFetch();
// console.log(clientGeoJsonAdapter(dataFetch.allPlayWellClient.edges));

import React, { PureComponent } from 'react';

// Helpers
import slugify from 'helpers/slugify';

// Begin Helper
//////////////////////////////////////////////////////////////////////

export const clientGeoJsonAdapter = data => {
  // Remap our data to abide by GeoJson syntax
  let allPlayWellClientGeoFeatures = data.map(client => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [client.node.location_lng, client.node.location_lat],
      },
      properties: {
        title: client.node.client_location_name,
        locationHash: slugify(client.node.client_location_name),
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

/**
 *
 * Return Client Lat / Long Listings based on State ID
 * @param state_id = A number correlating to the allPlayWellState playwell_state_id
 * @param clientEdges = All the client edges from allPlayWellClients.edges
 *
 */

export const clientsByLatLong = (state_id, clientEdges) => {
  const clientEdgesByGeo = clientEdges
    .filter(client => parseInt(client.node.state_id) === parseInt(state_id))
    .map((client, idx) => {
      return new Array(client.node.location_lng, client.node.location_lat);
    });

  /**
   *
   * Return Client Edges if > 0. Else return all edges
   *
   */
  console.log('clientEdgesByGeo', clientEdgesByGeo);
  if (clientEdgesByGeo.length > 0) {
    return clientEdgesByGeo;
  } else {
    const clientEdgesByGeo = clientEdges.map((client, idx) => {
      return new Array(client.node.location_lng, client.node.location_lat);
    });
    return clientEdgesByGeo;
  }

  /**
   *
   * For Debugging only.
   *
   */
};

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
        id: client.node.id,
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

export const clientsByLatLong = (
  state_id,
  county_id,
  cost_code,
  clientEdges
) => {
  /**
   * Our initial clientEdgesByGeo
   */
  let clients = clientEdges;
  let filteredClients = clientEdges;

  /**
   * Check for State Id
   */
  if (state_id != null || state_id != undefined) {
    filteredClients = filteredClients.filter(
      client => parseInt(client.node.state_id) === parseInt(state_id)
    );
  }

  /**
   * Check for County Id
   */
  if (county_id != null || county_id != undefined) {
    filteredClients = filteredClients.filter(
      client => parseInt(client.node.county_id) === parseInt(county_id)
    );
  }

  /**
   * Check for Cost Code
   */
  if (cost_code != null || cost_code != undefined) {
    filteredClients = filteredClients.filter(
      client => parseInt(client.node.state_id) === parseInt(state_id)
    );
  }

  /**
   *
   * Return Filtered Client Edges if > 0. Else return all edges
   *
   */
  if (filteredClients.length > 0) {
    let filteredClientEdgesByGeo = filteredClients.map((client, idx) => {
      return new Array(client.node.location_lng, client.node.location_lat);
    });

    return filteredClientEdgesByGeo;
  } else {
    let allClientEdgesByGeo = clients.map((client, idx) => {
      return new Array(client.node.location_lng, client.node.location_lat);
    });

    return allClientEdgesByGeo;
  }

  /**
   *
   * For Debugging only.
   *
   */
};

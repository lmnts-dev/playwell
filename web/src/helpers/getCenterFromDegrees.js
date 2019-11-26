/**
 * Get a center latitude,longitude from an array of like geopoints
 *
 * @param array data 2 dimensional array of latitudes and longitudes
 * For Example:
 * $data = array
 * (
 *   0 = > array(45.849382, 76.322333),
 *   1 = > array(45.843543, 75.324143),
 *   2 = > array(45.765744, 76.543223),
 *   3 = > array(45.784234, 74.542335)
 * );
 *
 * @returns [35.98435017623634, -120.23374149125071]
 */

export const getCenterFromDegrees = data => {
  if (!(data.length > 0)) {
    return false;
  }

  let num_coords = data.length;

  let X = 0.0;
  let Y = 0.0;
  let Z = 0.0;

  data.forEach((coordinates, idx) => {
    let lat = (coordinates[1] * Math.PI) / 180;
    let lon = (coordinates[0] * Math.PI) / 180;

    let a = Math.cos(lat) * Math.cos(lon);
    let b = Math.cos(lat) * Math.sin(lon);
    let c = Math.sin(lat);

    X += a;
    Y += b;
    Z += c;
  });

  X /= num_coords;
  Y /= num_coords;
  Z /= num_coords;

  let lon = Math.atan2(Y, X);
  let hyp = Math.sqrt(X * X + Y * Y);
  let lat = Math.atan2(Z, hyp);

  let newX = (lat * 180) / Math.PI;
  let newY = (lon * 180) / Math.PI;

  return new Array(newY.toFixed(4), newX.toFixed(4));
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

  console.log('clientEdgesByGeo', clientEdgesByGeo);
  return clientEdgesByGeo;
};

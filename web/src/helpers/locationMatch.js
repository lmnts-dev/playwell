// LocationMatch Helper
// This is to generate the State & County metadata
// Useful for slugs, etc.
const locationMatch = (edges, countyId, stateId) => {
  // Props:
  // edges: Should always be allPlayWellStates.edges
  // countyId: source.node.county_id,
  // stateId: source.node.state_id

  // Filter by State
  const matchState = edges.filter(
    state => state.node.playwell_state_id == stateId
  );

  // Filter the matchState's Counties for the matching County
  const matchCounty = matchState[0].node.counties
    ? matchState[0].node.counties.filter(county => county.county_id == countyId)
    : false;

  return {
    state: matchState[0].node,
    county: matchCounty[0],
  };
};

export default locationMatch;

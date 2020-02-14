const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'on977l64',
  dataset: 'production',
  useCdn: true
})

const getSiteSettings = async () => {
  const siteSettings = await client.getDocument('f7eab51d-96c0-495a-a2cb-364c9a6d7295')
  return siteSettings
}

const transformPlaywellStates = (state, counties) => {
  const countiesRef = counties.map(county => {
    return {
      _type: 'reference',
      _ref: `playwellCounty-${county.county_id.toString()}`,
      _key: `playwellCounty-${county.county_id.toString()}`
    }
  })
  const sanityState = {
    _id: `playwellState-${state.state_id.toString()}`,
    stateId: state.state_id.toString(),
    _type: `state`,
    name: state.name,
    counties: countiesRef
  }
  return sanityState
}

const transformPlaywellCounties = (county) => {
  const sanityCounty = {
    _id: `playwellCounty-${county.county_id.toString()}`,
    countyId: county.county_id.toString(),
    _type: `county`,
    name: county.name,
    costCode: {_type: 'reference', _ref: `playwellCostCode-${county.cost_code.toString()}`}
  }
  const sanityCostCode = {
    _id: `playwellCostCode-${county.cost_code.toString()}`,
    costCodeId: county.cost_code.toString(),
    _type: `costCode`,
    name: county.cost_code_name,
  }
  return [sanityCostCode, sanityCounty]
}

module.exports.getSiteSettings = getSiteSettings
module.exports.transformPlaywellStates = transformPlaywellStates
module.exports.transformPlaywellCounties = transformPlaywellCounties
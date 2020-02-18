// Get access to env vars
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

const getSiteSettings = async () => {
  const siteSettings = await client.getDocument(process.env.GATSBY_SANITY_SITE_SETTINGS_DOCUMENT_ID)
  return siteSettings
}

const createDocuments = async (documents) => {
  let transaction = client.transaction()
  documents.forEach(document => {
    transaction.createIfNotExists(document).patch(document._id, p => p.set(document))
  })
  return transaction.commit()
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
module.exports.createDocuments = createDocuments
module.exports.transformPlaywellStates = transformPlaywellStates
module.exports.transformPlaywellCounties = transformPlaywellCounties
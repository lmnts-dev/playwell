// Get access to env vars
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  useCdn: true
})

const getSiteSettings = async () => {
  const siteSettings = await client.getDocument(process.env.GATSBY_SANITY_SITE_SETTINGS_DOCUMENT_ID)
  return siteSettings
}

module.exports.getSiteSettings = getSiteSettings
const sanityClient = require('@sanity/client')
const clientConfig = require('../client-config')

const client = sanityClient({
  projectId: clientConfig.sanity.projectId,
  dataset: clientConfig.sanity.dataset,
  useCdn: true
})

const getSiteSettings = async () => {
  const siteSettings = await client.getDocument(clientConfig.sanity.siteSettingsId)
  return siteSettings
}

module.exports.getSiteSettings = getSiteSettings
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

module.exports.getSiteSettings = getSiteSettings
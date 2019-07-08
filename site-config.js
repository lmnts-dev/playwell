/* eslint-disable */

// site-config.js:
// This is the sitewide information that is used throughout the entire
// build of the site. This goes from SEO to headings and also into the
// core Gatsby config files as well.

const path = require('path');

module.exports = {
  siteTitle: `Be. | A new kind of Cannabis Store.`,
  siteTitleShort: `Be.`,
  siteDescription: `Dedicated to making medical and recreational marijuana approachable. Our dispensary locations in Northern Nevada provide exceptional service and quality medicinal cannabis to the Reno, Sparks, and Carson City areas.`,
  siteBaseKeywords: `medical, cannabis, marijuana, dispensary, reno, sparks, carson city, gardnerville, tahoe, service, quality, recreational, pot, weed`,
  siteUrl: `https://reverent-noyce-352111.netlify.com`,
  themeColor: `#ed652b`,
  secondaryColor: `#FFFFFF`,
  backgroundColor: `#FFFFFF`,
  pathPrefix: '/',
  logo: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoLight: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoDark: path.resolve(__dirname, 'src/assets/images/icon.png'),
  social: {
    twitter: `laxaltandmciver`,
    facebook: `laxaltandmciver`,
    instagram: `laxaltandmciver`,
    fbAppId: `966242223397117`,
  },
};

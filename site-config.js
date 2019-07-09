/* eslint-disable */

// site-config.js:
// This is the sitewide information that is used throughout the entire
// build of the site. This goes from SEO to headings and also into the
// core Gatsby config files as well.

const path = require('path');

module.exports = {
  siteTitle: `Play-Well | LEGO®-inspired engineering classes for kids K-8.`,
  siteTitleShort: `Play-Well`,
  siteDescription: `Kids are natural engineers. We help them realize it.`,
  siteBaseKeywords: `lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge`,
  siteUrl: `https://modest-noether-8f137a.netlify.com/`,
  themeColor: `#ed652b`,
  secondaryColor: `#FFFFFF`,
  backgroundColor: `#520589`,
  pathPrefix: '/',
  logo: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoLight: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoDark: path.resolve(__dirname, 'src/assets/images/icon.png'),
  social: {
    twitter: `PlayWell_TEK`,
    facebook: `PlayWellTEK`,
    instagram: `playwellteknologies`,
    fbAppId: `566393390202813`,
  },
};

/* eslint-disable */

// Settings.js:
// This is the sitewide information that is used throughout the entire
// build of the site. This goes from SEO to headings and also into the
// core Gatsby config files as well.

import * as Config from '../../../site-config';

export const Settings = {
  Title: Config.siteTitle,
  TitleShort: Config.siteTitleShort,
  Description: Config.siteDescription,
  BaseKeywords: Config.siteBaseKeywords,
  Url: Config.siteUrl,
  PathPrefix: Config.pathPrefix,
  Logo: Config.logo,
  LogoLight: Config.logoLight,
  LogoDark: Config.logoDark,
  Social: {
    Twitter: Config.twitter,
    Facebook: Config.facebook,
    Instagram: Config.instagram,
    FbAppId: Config.fbAppId,
  },

  // I hate that these are here. Future fix possible.
  ThemeColor: Config.themeColor,
  SecondaryColor: Config.secondaryColor,
  BackgroundColor: Config.backgroundColor,
};

// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Location } from '@reach/router';
import { StaticQuery, graphql } from 'gatsby';

// Vendor
import { ThemeProvider } from 'styled-components';

//  Components
import Head from 'components/core/Head';
import PageTheme from 'components/core/PageTheme';
import Footer from 'components/library/Footer';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import { GlobalStyle } from 'constants/styles/Global';
import SiteGrid from './styles.scss';

// Data
import { NavQuery } from 'hooks/NavQuery/';
import { navDataTransformer } from 'components/library/Navigation/Data/';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Check for window to avoid breaking server
// side rendering.

// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }

// Core Layout component structure.

const Layout = ({
  data,
  children,
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
  TransparentFooter,
}) => {
  // Use our hook's data as source for Navigation
  let navData = NavQuery();

  return (
    <ThemeProvider theme={Theme}>
      <SiteGrid className="site-grid">
        <GlobalStyle />
        <div id="content-overlay" />
        <div id="hamburger-overlay" />
        <PageTheme
          BgColor={BgColor}
          PrimaryColor={PrimaryColor}
          SecondaryColor={SecondaryColor}
          TertiaryColor={TertiaryColor}
        />
        <Head />
        <SiteGrid.Inner>{children}</SiteGrid.Inner>
      </SiteGrid>
      <Footer navQuery={navDataTransformer(navData)} />
    </ThemeProvider>
  );
};

// This is our Layout component with
// the site metadata query available.

const LayoutWithMetadata = props => {
  // Pass our data into our Layout component.
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              siteTitle
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  );
};

export default LayoutWithMetadata;

//////////////////////////////////////////////////////////////////////
// End Component

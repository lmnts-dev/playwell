// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Vendor
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

//  Components
import Head from 'components/core/Head';
import PageTheme from 'components/core/PageTheme';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import { GlobalStyle } from 'constants/styles/Global';
import SiteGrid from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Layout = ({
  data,
  children,
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
}) => (
  <ThemeProvider theme={Theme}>
    <SiteGrid>
      <GlobalStyle />
      <PageTheme
        BgColor={BgColor}
        PrimaryColor={PrimaryColor}
        SecondaryColor={SecondaryColor}
        TertiaryColor={TertiaryColor}
      />
      <Head />
      <SiteGrid.Inner>{children}</SiteGrid.Inner>
    </SiteGrid>
  </ThemeProvider>
);

const LayoutWithQuery = props => (
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

export default LayoutWithQuery;

//////////////////////////////////////////////////////////////////////
// End Component

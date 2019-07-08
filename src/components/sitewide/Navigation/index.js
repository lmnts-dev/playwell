// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Device from './../../core/DeviceQuery';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Navigation Component
class Navigation extends PureComponent {
  render() {
    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <nav
        style={{
          width: '100%',
          background: 'black',
          color: 'pink',
          height: Root.Nav.Size,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <strong>navigation</strong>
      </nav>
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component

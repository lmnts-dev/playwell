// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Device from './../../core/DeviceQuery';

// Styles
import { NavigationStyle, NavigationBodyPadding } from './styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import Brandmark from 'components/core/Branding/Brandmark';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Navigation Component
class Navigation extends PureComponent {
  render() {
    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <NavigationStyle>
        <NavigationBodyPadding />
        <NavigationStyle.Inner>
          <NavigationStyle.Primary>
            <Brandmark />
            <strong>Primary Navigation</strong>
          </NavigationStyle.Primary>
          <NavigationStyle.Secondary>
            Secondary Navigation
          </NavigationStyle.Secondary>
        </NavigationStyle.Inner>
      </NavigationStyle>
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component

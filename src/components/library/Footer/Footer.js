// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Device from '../../core/DeviceQuery';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Footer = () => {
  return (
    // Query our Navigation data so we can adjust our Footer styles
    // based on Top Level Pages vs Sub Level Pages.
    <footer>
      <strong>footer</strong>
    </footer>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

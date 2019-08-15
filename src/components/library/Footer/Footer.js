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

// Styles
import { FooterStyle } from './styles.scss';

// Components
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Footer = () => {
  return (
    // Query our Navigation data so we can adjust our Footer styles
    // based on Top Level Pages vs Sub Level Pages.
    <FooterStyle>
      <FooterCurveSlice bgColor={Theme.Color.Black} />
      <FooterAngleSlice />
    </FooterStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

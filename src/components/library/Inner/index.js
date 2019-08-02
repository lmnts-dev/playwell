// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import InnerStyle from 'elements/Inner/styles.scss';

const Inner = ({ children, FullWidth }) => (
  <InnerStyle FullWidth={FullWidth}>{children}</InnerStyle>
);

export default Inner;

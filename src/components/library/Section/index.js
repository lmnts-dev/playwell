// Section Component:
// This is a helper component containing base
// Section styles shared across all Section components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { SectionInnerStyle, SectionContentStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SectionInner = ({ children }) => (
  <SectionInnerStyle>
    <SectionContentStyle>{children}</SectionContentStyle>
  </SectionInnerStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component

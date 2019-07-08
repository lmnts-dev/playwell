// SplitSection Component:
// This is a basic component for sections with.
// fullwidth 50% areas compensating for the
// left gutter sidebar.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import SplitSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SplitSection = ({ children, Flex }) => (
  <SplitSectionStyle>
    <SplitSectionStyle.Inner Flex={Flex}>{children}</SplitSectionStyle.Inner>
  </SplitSectionStyle>
);

export default SplitSection;

//////////////////////////////////////////////////////////////////////
// End Component

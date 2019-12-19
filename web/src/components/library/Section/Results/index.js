// Article Card component

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import ResultsStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Results = ({
  children,
  Link,
}) => (
  <ResultsStyle>
    <div className="no-results">
      <Icon Name="sad-cry" fas />
      <span className="label">No results found.</span>
      {children}
    </div>
  </ResultsStyle>
);

export default Results;

//////////////////////////////////////////////////////////////////////
// End Component

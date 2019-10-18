// CenteredTitle Component:
// This is an element for a large centered title/headline

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants

// Styles
import CenteredTitleStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CenteredTitle = ({
  Title,
  Class,
  TextColor,
  MaxWidth,
  children,
}) => (
  <CenteredTitleStyle TextColor={TextColor} MaxWidth={MaxWidth}>
    <div className={Class}>{Title}</div>
    {children}
  </CenteredTitleStyle>
);

export default CenteredTitle;

//////////////////////////////////////////////////////////////////////
// End Component

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
  PaddingBottom,
  className,
  children,
}) => (
  <CenteredTitleStyle className={className} TextColor={TextColor} MaxWidth={MaxWidth} PaddingBottom={PaddingBottom}>
    <div className={Class + ' title'}>{Title}</div>
    {children}
  </CenteredTitleStyle>
);

export default CenteredTitle;

//////////////////////////////////////////////////////////////////////
// End Component

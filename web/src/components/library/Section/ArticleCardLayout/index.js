// Article Card Layout section

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
import ArticleCardLayoutStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ArticleCardLayout = ({
  children,
}) => (
  <ArticleCardLayoutStyle>
    {children}
  </ArticleCardLayoutStyle>
);

export default ArticleCardLayout;

//////////////////////////////////////////////////////////////////////
// End Component

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
import ArticleCardStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ArticleCard = ({
  Image,
  Date,
  Title,
  Excerpt,
  Link,
}) => (
  <ArticleCardStyle to={Link} className="card">
    <ImgMatch src={Image} className="image"/>
    <p as="div" className="date">{Date}</p>
    <h3 as="h6" className="title">{Title}</h3>
    <p className="excerpt">{Excerpt}</p>
  </ArticleCardStyle>
);

export default ArticleCard;

//////////////////////////////////////////////////////////////////////
// End Component

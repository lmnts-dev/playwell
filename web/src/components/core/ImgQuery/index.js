// ImgQuery.js:
// For blazin' fast and optimized images.

// Core
import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ImgQuery = ({
  data,
  src,
  AltText,
  className,
  objectFit,
  objectPosition,
}) => (
  <Img
    fluid={src}
    objectFit={objectFit ? objectFit : 'cover'}
    objectPosition={objectPosition ? objectPosition : '50% 50%'}
    AltText={AltText}
    className={className ? className : 'img'}
    fadeIn={true}
  />
);

export default ImgQuery;

// Our fragment for consistent querying of the right
// sized images.

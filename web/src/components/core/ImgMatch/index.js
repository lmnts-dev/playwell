// Dynamic query variables in GraphQl queries for Gatsby-Image
// Learn more: https://github.com/gatsbyjs/gatsby/issues/10482#issuecomment-485349612

import React, { useContext } from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import useImages from './use-images'
import ImgMatchContext from './context'

const Image = ({ AltText, objectFit, objectPosition, src, maxWidth, ...props }) => {
  const data = useContext(ImgMatchContext)

  let fluid = null

  // Logic to handle assets in local file system vs those coming from Sanity CMS
  if (src.asset && src.asset._id) {
    fluid = src.asset.fluid
  } else {
    const found = data.allFile.edges.find(({ node }) => src === node.relativePath)
    fluid = found.node.childImageSharp.fluid
  }

  return (
    <Img
      className="img"
      objectFit={objectFit ? objectFit : 'cover'}
      objectPosition={objectPosition ? objectPosition : '50% 50%'}
      alt={AltText ? AltText : null}
      fluid={fluid}
      {...props}
    />
  );
};

export default Image;
export {useImages, ImgMatchContext}

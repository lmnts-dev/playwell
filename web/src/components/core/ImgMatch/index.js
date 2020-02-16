// Dynamic query variables in GraphQl queries for Gatsby-Image
// Learn more: https://github.com/gatsbyjs/gatsby/issues/10482#issuecomment-485349612

import React, { useContext } from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import useImages from './use-images'
import ImgMatchContext from './context'

const Image = ({ AltText, objectFit, objectPosition, src, maxWidth, ...props }) => {
  const data = useContext(ImgMatchContext)
    }
  `);

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  return (
    <Img
      className="img"
      objectFit={objectFit ? objectFit : 'cover'}
      objectPosition={objectPosition ? objectPosition : '50% 50%'}
      alt={AltText ? AltText : null}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  );
};

export default Image;
export {useImages, ImgMatchContext}

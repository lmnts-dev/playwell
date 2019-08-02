// Dynamic query variables in GraphQl queries for Gatsby-Image
// Learn more: https://github.com/gatsbyjs/gatsby/issues/10482#issuecomment-485349612

import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const Image = ({ AltText, src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Img
      className="img"
      objectFit="cover"
      objectPosition="50% 50%"
      alt={AltText ? AltText : null}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  );
};

export default Image;


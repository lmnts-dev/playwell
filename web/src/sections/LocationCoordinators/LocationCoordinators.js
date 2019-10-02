// HomeIntro.js:
// Homepage introduction

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Accordion from 'components/library/Accordion';

// Sections

// Styles
import { Article } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationCoordinators = ({ cities }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placeholder.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // Render Page
  return (
    <>
      {cities.map(city => (
        <Accordion location={city.city}>
          <Article key={city.id}>
            <Article.Figure>
              <Img
                fluid={data.file.childImageSharp.fluid}
                objectFit="contain"
                alt="STEM Education &amp; Engineering in"
              />
            </Article.Figure>
            <Article.Info>
              <Flex flexWrap="wrap">
                <Article.Info.Details>
                  {city.state} <span>{city.role}</span>
                </Article.Info.Details>
                <Article.Info.Name fontSize="1.6rem">
                  {city.name}
                </Article.Info.Name>
                <Article.Info.Contact>
                  <span>
                    <a href={'mailto:' + city.email}>{city.email}</a>
                  </span>
                  <span><a href={'tel:' + city.phone}>{city.phone}</a></span>
                  <span>
                    <a href="/">More</a>
                  </span>
                </Article.Info.Contact>
              </Flex>
            </Article.Info>
          </Article>
        </Accordion>
      ))}
    </>
  );
};

export default LocationCoordinators;

//////////////////////////////////////////////////////////////////////
// End Component

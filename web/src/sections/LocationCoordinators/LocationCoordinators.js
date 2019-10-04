// <LocationCoordinators /> section:
// Location detail template coordinator accordion

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import Accordion from 'components/library/Accordion';

// Styles
import { Article } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationCoordinators = ({ cities }) => (
  <Section textAlign="left">
    {/* todo: make styled components */}
    <Flex flexWrap="wrap">
      <Box width={[1, 1, 1 / 2, 4 / 10]} pr={[0, 0, 0, 12]} pb={'var(--Size)'}>
        <Text as="h2" color="Dino">
          Coordinators in Arizona
        </Text>
      </Box>
      <Box width={[1, 1, 1 / 2, 6 / 10]}>
        {cities.map(city => (
          <Accordion title={city.city}>
            <Article key={city.id}>
              <Article.Figure>
                <ImgMatch
                  src="placeholder.jpeg"
                  AltText="STEM Education &amp; Engineering in"
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
                    <span>
                      <a href={'tel:' + city.phone}>{city.phone}</a>
                    </span>
                    <span>
                      <a href="/">More</a>
                    </span>
                  </Article.Info.Contact>
                </Flex>
              </Article.Info>
            </Article>
          </Accordion>
        ))}
      </Box>
    </Flex>
  </Section>
);

export default LocationCoordinators;

//////////////////////////////////////////////////////////////////////
// End Component

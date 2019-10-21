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
import { Title, Article } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationCoordinators = ({ pageContext }) => {
  // County / State conditional
  const countyState = pageContext.isCounty
    ? pageContext.name + ', ' + pageContext.parentState.name
    : pageContext.name;

  return (
    <Section textAlign="left">
      {/* todo: make styled components */}
      <Flex flexWrap="wrap">
        <Title
          width={[1, 1, 1 / 2, 4 / 10]}
          pr={[0, 0, 0, 'calc(var(--Size) * 2)']}
          pb={'var(--Size)'}
        >
          <span className="h2">
            Coordinators in {countyState}
          </span>
        </Title>
        <Box width={[1, 1, 1 / 2, 6 / 10]}>
          {pageContext.managers.map(manager => (
            <Accordion key={manager.node.id} title={manager.node.cost_code_name}>
              <Article>
                <Article.Figure>
                  <ImgMatch
                    src="avatar-yoda.jpg"
                    AltText="PlayWell program state coordinator"
                  />
                </Article.Figure>
                <Article.Info>
                  <Flex flexWrap="wrap">
                    <Article.Info.Details>
                      {manager.node.state} <span>{manager.node.cost_code}</span>
                    </Article.Info.Details>
                    <Article.Info.Name fontSize="1.6rem">
                      {manager.node.manager}
                    </Article.Info.Name>
                    <Article.Info.Contact>
                      <span>
                        <a href={'mailto:' + manager.node.email}>{manager.node.email}</a>
                      </span>
                      {/* <span>
                        <a href={'tel:' + manager.node.cell_number}>{manager.node.cell_number}</a>
                      </span>
                      <span>
                        <a href="/">More</a>
                      </span> */}
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
};

export default LocationCoordinators;

//////////////////////////////////////////////////////////////////////
// End Component

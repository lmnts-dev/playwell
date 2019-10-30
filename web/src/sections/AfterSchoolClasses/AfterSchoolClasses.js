// <AfterSchoolClasses /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Styles
import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AfterSchoolClasses = () => {
  return (
    <Section bg="White" textAlign="center" pt={0}>
      <Container>
        <span className="headline">Our Classes</span>
        <span className="h3 lead">Explore concepts in</span>
        <ul>
          <li>
            <Link to={'/'}>Physics Architecture</Link>
          </li>
          <li>
            <Link to={'/'}>Mechanical &amp; Structural Engineering</Link>
          </li>
        </ul>
        <span className="h3 lead">
          Find inventive solutions in a fun-filled context that supports the
          growth of young minds through hands-on, minds-on learning.
        </span>
      </Container>
    </Section>
  );
};

export default AfterSchoolClasses;

//////////////////////////////////////////////////////////////////////
// End Component

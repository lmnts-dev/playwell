// SubNav Component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container, Nav } from './styles.scss';

// Data
import { data } from './data';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SubNav = () => (
  <Container width={1} px={1}>
    <Box width={[1, 1, 1, 6 / 10]} pr={[0, 0, 2, 4, 10]} pl={[0, 0, 2, 6, 9]}>
      <Nav as="nav">
        {data.testNav.map(link => (
          <Nav.Link
            to={link.route}
            key={link.label}
            activeClassName="subnav--active"
          >
            {link.label}
          </Nav.Link>
        ))}
      </Nav>
    </Box>
  </Container>
);

SubNav.defaultProps = {};

export default SubNav;

//////////////////////////////////////////////////////////////////////
// End Component

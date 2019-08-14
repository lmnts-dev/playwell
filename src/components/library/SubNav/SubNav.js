// SubNav Component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container, Nav } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SubNav = ({ bg }) => (
  <Container width={1} px={1} py={3}>
    <Nav as="nav">
      <Link>Link one</Link>
      <Link>Link one</Link>
      <Link>Link one</Link>
      <Link>Link one</Link>
      {/* {data.navigation.edges.map(({ node: item }) => (
        <Link to={item.link} key={item.name} activeClassName="nav--active">
          {item.name}
        </Link>
      ))} */}
    </Nav>
  </Container>
);

SubNav.defaultProps = {};

export default SubNav;

//////////////////////////////////////////////////////////////////////
// End Component

// <SplitLinks /> component:
// Pre-footer animated arrow split links
// todo: naming, stroke color prop

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';

// Styles
import { CourseFooter, LinkContainer } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SplitLink = ({ title, message, first, last, to, themeProps }) => (
  <LinkContainer
    width={[1, 1, 1 / 2]}
    first={first}
    last={last}
    borderColor={themeProps.TertiaryColor}
    arrowColor={themeProps.TertiaryColor}
  >
    {first && (
      <div className="arrow">
        <Icon Name="nextArrow" />
      </div>
    )}
    <Link to={to}>
      <Text
        as="span"
        className="h6"
        fontWeight="600"
        lineHeight={[1.2]}
        color={themeProps.SecondaryColor}
      >
        {title}
      </Text>
      <Text
        as="span"
        className="h4"
        fontWeight="600"
        lineHeight={[1.2]}
        pt={`calc(${Root.Size} / 8)`}
        color={themeProps.TertiaryColor}
      >
        {message}
      </Text>
    </Link>
    {last && (
      <div className="arrow">
        <Icon Name="nextArrow" />
      </div>
    )}
  </LinkContainer>
);

const SplitLinks = ({ children }) => (
  <CourseFooter>
    <CourseFooter.Explore as="article" width={1}>
      {children}
    </CourseFooter.Explore>
  </CourseFooter>
);

SplitLink.defaultProps = {
  title: 'Keep exploring',
  message: 'Keep exploring our programs.',
};

export default SplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

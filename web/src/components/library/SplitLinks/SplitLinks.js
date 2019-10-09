// <SplitLinks /> component:
// Pre-footer animated arrow split links
// todo: arrow height for cleaner central rotation

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
  <LinkContainer width={[1, 1, 1 / 2]} px={[1, 1, 3, 8]} pb={[2, 2, 0]}>
    {first && (
      <LinkContainer.Arrow>
        <Icon Name="nextArrow" />
      </LinkContainer.Arrow>
    )}
    <Link to={to}>
      <Text as="span" fontSize={2} mt={1} fontWeight="600" color={themeProps.SecondaryColor}>
        {title}
      </Text>
      <Text as="span" className="h4" fontWeight="600" mt={1} color={themeProps.PrimaryColor}>
        {message}
      </Text>
    </Link>
    {last && (
      <LinkContainer.Arrow>
        <Icon Name="nextArrow" />
      </LinkContainer.Arrow>
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

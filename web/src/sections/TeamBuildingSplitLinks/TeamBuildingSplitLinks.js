// <TeamBuildingSplitLinks /> section:
// todo: whats new link slug

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Section from 'components/library/Elements/Section';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const TeamBuildingSplitLinks = ({
  pageContext,
  themeProps,
  stateName,
  countyName,
  costCodeName,
}) => {
  return (
    <Section bg={themeProps.BgColor} pb={0}>
      <SplitLinks>
        <SplitLink
          title="Want to throw a Play-Well birthday?"
          message="Learn about our birthday parties"
          // message={'Keep exploring programs in ' + countyStateString + '.'}
          to={'/parties/birthday-parties'}
          themeProps={themeProps}
          first
        />
        <SplitLink
          title="Need help with a special event?"
          message="Learn about what we do and request an event"
          to={'/parties/special-events'}
          themeProps={themeProps}
          last
        />
      </SplitLinks>
    </Section>
  );
};

export default TeamBuildingSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

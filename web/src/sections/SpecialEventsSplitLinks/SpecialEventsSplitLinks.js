// <CourseSplitLinks /> section:
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

const HostProgramSplitLinks = ({
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
          title="Adults need purposeful play too"
          message="View our team building opportunities"
          // message={'Keep exploring programs in ' + countyStateString + '.'}
          to="/team-building"
          themeProps={themeProps}
          first
        />
        <SplitLink
          title="Want to plan birthday?"
          message="Learn about our birthday parties"
          to="/parties/birthday-parties"
          themeProps={themeProps}
          last
        />
      </SplitLinks>
    </Section>
  );
};

export default HostProgramSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

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
  // // Build our slugified strings for pretty URLs.
  // let stateSlug = slugify(stateName);
  // let countySlug = slugify(countyName);
  // let costCodeSlug = slugify(costCodeName);
  // let programSlug = slugify(pageContext.course_type_name);

  // // Our pretty URL
  // let programsLink = `/programs/${stateSlug}/${costCodeSlug}/${countySlug}`;
  // let locationLink = `/locations/${stateSlug}/${costCodeSlug}/${countySlug}`;

  // // Check our County names if they contain 'County'
  // const countyClean = countyName => {
  //   if (
  //     countyName.toLowerCase().includes('county') ||
  //     countyName.toLowerCase().includes('district')
  //   ) {
  //     return countyName;
  //   } else {
  //     return countyName + ' County';
  //   }
  // };

  // const countyStateString = costCodeName
  //   ? costCodeName + ', ' + pageContext.locationMeta.state.name
  //   : stateName;

  return (
    <Section bg={themeProps.BgColor} pb={0}>
      <SplitLinks>
        <SplitLink
          title="Visit our activity center"
          message="The Play-Well Marin Activity Center"
          // message={'Keep exploring programs in ' + countyStateString + '.'}
          to={'/'}
          themeProps={themeProps}
          first
        />
        <SplitLink
          title="Need help with a special event?"
          message="Learn about what we do and reqest an event"
          to={'/'}
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

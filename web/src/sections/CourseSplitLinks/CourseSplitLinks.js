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

const CourseSplitLinks = ({
  pageContext,
  themeProps,
  stateName,
  countyName,
  costCodeName,
}) => {
  // Build our slugified strings for pretty URLs.
  let stateSlug = slugify(stateName);
  let countySlug = slugify(countyName);
  let costCodeSlug = slugify(costCodeName);
  let programSlug = slugify(pageContext.course_type_name);

  // Our pretty URL
  let programsLink = `/programs/${stateSlug}/${costCodeSlug}/${countySlug}`;
  let locationLink = `/locations/${stateSlug}/${costCodeSlug}/${countySlug}`;

  // Check our County names if they contain 'County'
  const countyClean = countyName => {
    if (
      countyName.toLowerCase().includes('county') ||
      countyName.toLowerCase().includes('district')
    ) {
      return countyName;
    } else {
      return countyName + ' County';
    }
  };

  const countyStateString = costCodeName
    ? costCodeName + ', ' + pageContext.locationMeta.state.name
    : stateName;

  return (
    <Section bg={themeProps.BgColor} pt={0}>
      <SplitLinks>
        <SplitLink
          title="Keep exploring"
          message={'Keep exploring programs in ' + countyStateString + '.'}
          to={programsLink}
          themeProps={themeProps}
          first
        />
        <SplitLink
          title="What's new?"
          message={'See what else is happening in ' + countyStateString + '.'}
          to={locationLink}
          themeProps={themeProps}
          last
        />
      </SplitLinks>
    </Section>
  );
};

export default CourseSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

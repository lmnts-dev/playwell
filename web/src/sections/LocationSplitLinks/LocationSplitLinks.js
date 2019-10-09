// <LocationSplitLinks /> section:
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

const LocationSplitLinks = ({ pageContext, themeProps }) => {
  // Build our slugified strings for pretty URLs.
  let stateSlug = slugify(pageContext.locationMeta.state.name);
  let countySlug = slugify(pageContext.locationMeta.county.name);
  let programSlug = slugify(pageContext.course_type_name);

  // Our pretty URL
  let whatsNewLink = `/programs/${stateSlug}/${countySlug}`;

  const countyState = pageContext.locationMeta.county.name
    ? pageContext.locationMeta.county.name +
      ', ' +
      pageContext.locationMeta.state.name
    : pageContext.locationMeta.state.name;

  return (
    <Section bg={themeProps.BgColor} pt={0}>
      <SplitLinks>
        <SplitLink
          title="Keep exploring"
          message="Keep exploring our programs."
          to="/programs"
          themeProps={themeProps}
          first
        />
        <SplitLink
          title="What's new?"
          message={'See what else is happening in ' + countyState + '.'}
          to={whatsNewLink}
          themeProps={themeProps}
          last
        />
      </SplitLinks>
    </Section>
  );
};

export default LocationSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

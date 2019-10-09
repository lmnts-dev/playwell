// <SplitLinks /> section:
//

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

const LocationSplitLinks = ({ pageContext }) => {
  // Build our slugified strings for pretty URLs.
  let stateSlug = slugify(pageContext.locationMeta.state.name);
  let countySlug = slugify(pageContext.locationMeta.county.name);
  let programSlug = slugify(pageContext.course_type_name);

  let whatsNewLink = `/programs/${stateSlug}/${countySlug}`;

  const countyState = pageContext.locationMeta.county.name
    ? pageContext.locationMeta.county.name +
      ', ' +
      pageContext.locationMeta.state.name
    : pageContext.locationMeta.state.name;

  return (
    <Section bg="Sky">
      <SplitLinks>
        <SplitLink
          title="Keep exploring"
          message="Keep exploring our programs."
          to="/programs"
          first
        />
        <SplitLink
          title="What's new?"
          message={'See what else is happening in ' + countyState + '.'}
          to={whatsNewLink}
          last
        />
      </SplitLinks>
    </Section>
  );
};

export default LocationSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

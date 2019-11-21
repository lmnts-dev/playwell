// <SummerCampsSplitLinks /> section:
// todo: whats new link slug

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SummerCampsSplitLinks = ({
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
    <BasicSection
      BgColor={Theme.Color.Background}
      TextColor={Theme.Color.Dino}
      BorderTop={Theme.Color.Sunset}
      noPaddingBottom
    >
      <BasicInner wideWidth>
        <Box textAlign="center">
          <SplitLinks>
            <SplitLink
              title="Keep exploring"
              message="Learn about what our classes look like"
              // message={'Keep exploring programs in ' + countyStateString + '.'}
              to={'/programs/classes'}
              themeProps={themeProps}
              first
            />
            <SplitLink
              title="What do workshops look like?"
              message="Learn more about our workshops"
              to={'/programs/workshops'}
              themeProps={themeProps}
              last
            />
          </SplitLinks>
        </Box>
      </BasicInner>
    </BasicSection>
  );
};

export default SummerCampsSplitLinks;

//////////////////////////////////////////////////////////////////////
// End Component

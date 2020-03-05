// Location detail template:
// This is the data template for the Locations Detail page
// todo: Use <Spacer in place of <Scroll && add props to <Spacer

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import ImgMatch from 'components/core/ImgMatch';
import Section from 'components/library/Elements/Section';
import { Box, Flex, Text } from 'components/library/Elements';
import SpacerCentered from 'components/library/Spacer/Centered';
import Spacer from 'components/library/Spacer';
import LegoList from 'components/library/Section/LegoList';

// Sections
import LocationHero from 'sections/LocationHero';
import LocationCoordinators from 'sections/LocationCoordinators';
import LocationSplitSection from 'sections/LocationSplitSection';
import LocationPrograms from 'sections/LocationPrograms';
import Quote from 'sections/Quote';
import LocationIntro from 'sections/LocationIntro';
import LocationPlayZone from 'sections/LocationPlayZone';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import TextWithLgLegos from 'components/library/Section/TextWithLgLegos/styles.scss';

// Styles
import { Scroll, Decorator } from './styles.scss';

// Helpers
import slugify from 'helpers/slugify';
import { countyClean } from 'helpers/countyClean';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Dino,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

// Render Page
const LocationDetail = ({ pageContext }) => {
  // For Debugging Purposes only
  // console.log(pageContext);
  // console.log(pageContext.managers.manager);

  // Create page name
  const contextualPageName = () => {
    if (pageContext != false) {
      if (pageContext.isCounty == true) {
        return (
          countyClean(pageContext.name) + ', ' + pageContext.parentState.name
        );
      } else if (pageContext.isCostCode == true) {
        return pageContext.cost_code_name + ', ' + pageContext.parentState.name;
      } else {
        return pageContext.name;
      }
    } else {
      return 'a place near you';
    }
  };

  // Create slugs
  const programsSlug =
    pageContext.isCounty == true
      ? slugify(pageContext.parentState.name.toLowerCase()) +
        '/' +
        slugify(pageContext.cost_code_name.toLowerCase()) +
        '/' +
        slugify(pageContext.name.toLowerCase()) + '/'
      : pageContext.isCostCode == true
      ? slugify(pageContext.parentState.name.toLowerCase()) +
        '/' +
        slugify(pageContext.cost_code_name.toLowerCase()) + '/'
      : slugify(pageContext.name.toLowerCase()) + '/';

  // Build Page
  return (
    <Layout {...ThemeProps}>
      <LocationHero
        programsSlug={programsSlug}
        contextualPageName={contextualPageName()}
        pageContext={pageContext}
      />

      <Section pt={0} pb={0} fullWidth>
        <ImgMatch
          src="locations-hero.jpg"
          AltText="STEM Education &amp; Engineering in"
        />
      </Section>

      <SpacerCentered />

      <LocationIntro pageContext={pageContext} />
      <LocationSplitSection />
      <div id="coordinators" />
      <LocationCoordinators pageContext={pageContext} />

      {/* <LocationEvents /> */}

      <Section bg="White">
        <LegoList
          blocks={[
            {
              title: 'Creative Collaboration',
              text:
                'A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best.',
              legoColor: 'orange',
            },
            {
              title: 'New Perspectives',
              text:
                'A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution.',
              legoColor: 'purple',
            },
            {
              title: 'Staff Morale',
              text:
                'A rejuvenated staff who rediscovers what they find fun about their job and their organization.',
              legoColor: 'blue',
            },
          ]}
        />
      </Section>

      <Quote color="Sunset">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
        enim sed magna vestibulum, nec imperdiet orci egestas. Sed in magna
        sapien.
      </Quote>

      <LocationPrograms
        programsSlug={programsSlug}
        contextualPageName={contextualPageName()}
        pageContext={contextualPageName()}
      />

      <Scroll>
        <Scroll.Positioner>
          <span>Play</span>
          <Scroll.Line />
        </Scroll.Positioner>
      </Scroll>

      <Decorator
        css={css`
          position: relative;
        `}
      >
        <div className="decorator__footer decorator__footer--top">
          <ImgMatch src="cloud-small.png" AltText="Cloud" />
        </div>
      </Decorator>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner noPaddingRight>
          <TextWithLgLegos
            Caption="Well Supplied Fun"
            Header="Let Us Engineer Your Child's Party"
            Paragraph="Some of the most memorable and fun experiences kid's have together are at birthday parties."
            Image="lego-ladder.png"
            className="overflow-image"
            ButtonText="Learn More"
            ButtonDest="/parties/birthday-parties"
          />
        </BasicInner>
      </BasicSection>

      {/* <Decorator>
      <div className="decorator__footer decorator__footer--bottom">
        <ImgMatch src="volcano.png" AltText="Cloud" />
      </div>
    </Decorator> */}
    </Layout>
  );
};

export default LocationDetail;

//////////////////////////////////////////////////////////////////////
// End Component

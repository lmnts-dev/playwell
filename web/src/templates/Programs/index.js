// templates/Programs/index.js:
// This is the templated programs page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';
// import { Link, StaticQuery, useStaticQuery, graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import CourseListings from 'components/library/CourseListings';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import ImageAccordianFeature from 'components/library/Section/ImageAccordianFeature';
import CenteredTitle from 'components/library/Elements/CenteredTitle';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import locationMatch from 'helpers/locationMatch';

// Props
const ThemeProps = {
  BgColor: Theme.Color.Galaxy,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const ProgramsPage = ({ pageContext }) => {
  // Use our hook's data as source
  const fetchedData = DataFetch();

  // For debugging only.
  // console.log(fetchedData);

  return (
    <Layout {...ThemeProps}>
      <CourseListings
        stateId={pageContext.playwell_state_id}
        countyId={pageContext.county_id}
        costCodeId={pageContext.cost_code_id}
        pageContext={pageContext}
        courseData={fetchedData}
        geoData={fetchedData.allPlayWellStates}
        mapWidth={Theme.mapWidth}
        mapZedIndex={Theme.mapZedIndex}
      />

      <div style={{ zIndex: Theme.mapZedIndex + 1 }}>
        <BasicSection BgColor={Theme.Color.Blush}>
          <BasicInner>
            <Centered
              Title="Our Programs"
              TextColor={Theme.Color.Nova}
              Class="h3"
            />
          </BasicInner>
        </BasicSection>
      </div>

      <div style={{ zIndex: Theme.mapZedIndex + 1 }}>
        <BasicSection
          BgColor={Theme.Color.Blush}
          TextColor={Theme.Color.Sunset}
          noPaddingTop
        >
          <ImageAccordianFeature
            Links={[
              { link: '/', label: 'Robotics' },
              { link: '/', label: 'Intro to STEM' },
              { link: '/', label: 'Gaming' },
              { link: '/', label: 'Advanced Engineering' },
              { link: '/', label: 'Engineering Themes' },
            ]}
            Accordians={[
              {
                header: 'Workshops',
                paragraph:
                  'Play-Well LEGO@-inspired programs can be tailored to your needs. We offer workshops for Girl Scouts, Homeschool Groups, Boy Scouts, In-school field trips and more.',
                image: 'girl-3.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/workshops',
              },
              {
                header: 'Classes',
                paragraph:
                  'What can you do with over 20,000 pieces of LEGO®? In our Engineering with LEGO® enrichment programs kids take on real-life engineering challenges allowing them to see STEM in action. Your child will explore concepts in physics, architecture, and mechanical engineering. Our students find inventive solutions in a fun-filled context that supports the growth of young minds through hands-on, minds-on learning.',
                image: 'girl-2.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/classes',
              },
              {
                header: 'Camps',
                paragraph:
                  "We'll help unleash your child's inner engineer in our STEM summer camps. They'll have so much fun in our LEGO-inspired summer camps that they won't even realize how much they're learning!",
                image: 'girl-1.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/summer-camps',
              },
            ]}
          />
        </BasicSection>
      </div>
    </Layout>
  );
};

// Styles
const Centered = styled(CenteredTitle)`
  &.community {
    ~ .gatsby-image-wrapper {
      height: 130%;
      width: 100%;
      position: absolute !important;
      top: -30%;
      left: -5%;
    }
  }
`;

export default ProgramsPage;

//////////////////////////////////////////////////////////////////////
// End Component

// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import { ProgramsHero } from 'components/library/Hero/ProgramsHero';
import { CourseMapNav } from 'components/library/CourseMapNav';
import { CourseListings } from 'components/library/CourseListings';
import { Box, Flex } from 'components/library/Elements';

// Constants
import { Theme, Root } from 'constants/Theme';

let mapWidth = '400px';
let mapZedIndex = 5;

// Begin Component

//////////////////////////////////////////////////////////////////////

// Props
let HeroProps = {
  bg: Theme.Color.Galaxy,
  color: 'White',
  flexDirection: 'row',
  mapWidth: mapWidth,
  mapZedIndex: mapZedIndex,
};

let MapNavProps = {
  mapWidth: mapWidth,
  mapZedIndex: mapZedIndex,
};

// Render Page
const ProgramsPage = props => (
  <Layout>
    <main>
      <ProgramsHero {...HeroProps} />
      <CourseMapNav {...MapNavProps} />

      <StaticQuery
        query={graphql`
          query {
            allPlayWellClient {
              edges {
                node {
                  id
                  display_address
                  geocode_address
                  public_note
                  location_lng
                  location_lat
                  client_location_name
                  courses {
                    course_id
                    is_full
                    start_date
                    end_date
                    course_type_long_description
                    course_type_name
                    course_type_group
                    age_range_start
                    age_range_end
                    age_range_display
                    date_time_display
                    category_group_name
                    days_of_the_week
                    omit_dates
                    omit_dates
                    public_note
                    room
                    course_web_publishing_action_type_id
                    action_url
                    is_restricted_registration
                    email_registration_description
                    phone_registration_description
                    action_url_comment
                    course_web_publishing_action_type
                    action_type
                    action_url_external
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <CourseListings
            courseData={data}
            mapWidth={mapWidth}
            mapZedIndex={mapZedIndex}
          />
        )}
      />
    </main>
  </Layout>
);

export default ProgramsPage;

//////////////////////////////////////////////////////////////////////
// End Component

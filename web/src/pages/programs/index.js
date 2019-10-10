// programs/index.js:
// This is the programs page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import { CourseListings } from 'components/library/CourseListings';

// Constants
import { Theme, Root } from 'constants/Theme';

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
const ProgramsPage = props => {
  return (
    <Layout {...ThemeProps}>
      <StaticQuery
        query={graphql`
          query {
            allPlayWellClient {
              edges {
                node {
                  id
                  display_address
                  geocode_address
                  county_id
                  state_id
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

            allPlayWellStates {
              edges {
                node {
                  id
                  abbrev
                  name
                  playwell_state_id
                  counties {
                    cost_code
                    cost_code_name
                    county_id
                    name
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <CourseListings
            stateId={''}
            countyId={''}
            costCodeId={''}
            courseData={data}
            geoData={data.allPlayWellStates}
            mapWidth={Theme.mapWidth}
            mapZedIndex={Theme.mapZedIndex}
          />
        )}
      />
    </Layout>
  );
};

export default ProgramsPage;

//////////////////////////////////////////////////////////////////////
// End Component

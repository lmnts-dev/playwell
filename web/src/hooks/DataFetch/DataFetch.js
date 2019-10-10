// hooks/DataFetch.js:
// This is our hook to pull data only once on build and access
// it from anywhere. Can also be used to transform data.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const DataFetch = () => {
  const data = useStaticQuery(graphql`
    {
      allPlayWellClient {
        edges {
          node {
            courses {
              action_type
              action_url_comment
              action_url
              action_url_external
              age_range_display
              age_range_end
              age_range_start
              course_id
              category_group_name
              course_type_group
              course_type_long_description
              course_type_name
              course_web_publishing_action_type
              course_web_publishing_action_type_id
              date_time_display
              days_of_the_week
              email_registration_description
              end_date
              is_full
              is_restricted_registration
              omit_dates
              phone_registration_description
              public_note
              registration_begins
              registration_help
              registration_instructions
              room
              start_date
            }
            county_id
            client_location_name
            display_address
            geocode_address
            id
            location_lat
            location_lng
            public_note
            state_id
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
      allPlayWellManagers {
        edges {
          node {
            id
            cost_code
            state_id
            manager
          }
        }
      }
    }
  `);
  return data;
};

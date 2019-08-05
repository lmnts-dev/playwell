// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomePage = props => (
  <Layout>
    <main
      style={{
        padding: '20px',
        backgroundColor: Theme.Color.Background,
        flex: '1',
        color: Theme.Color.Text,
      }}
    >
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
          <div>
            {data.allPlayWellClient.edges.map((client, idx) => {
              return (
                <div key={idx}>
                  <h4 style={{ marginTop: '30px' }}>
                    {client.node.client_location_name}
                  </h4>
                  {client.node.courses.map((course, idx) => {
                    return (
                      <div>
                        <Link
                          to={
                            '/courses/' +
                            client.node.id +
                            '/' +
                            course.course_id
                          }
                        >
                          {client.node.client_location_name} -{' '}
                          {course.course_type_name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      />
    </main>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component
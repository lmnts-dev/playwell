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
const CourseSample = props => (
  <Layout>
    <main
      style={{
        padding: '20px',
        backgroundColor: Theme.Color.Background,
        flex: '1',
        color: Theme.Color.Text,
      }}
    >
      <span>action_type: </span>
      <strong>{props.pageContext.action_type}</strong>
      <br />
      <span>action_url: </span>
      <strong>{props.pageContext.action_url}</strong>
      <br />
      <span>action_url_comment: </span>
      <strong>{props.pageContext.action_url_comment}</strong>
      <br />
      <span>action_url_external: </span>
      <strong>{props.pageContext.action_url_external}</strong>
      <br />
      <span>age_range_display: </span>
      <strong>{props.pageContext.age_range_display}</strong>
      <br />
      <span>age_range_end: </span>
      <strong>{props.pageContext.age_range_end}</strong>
      <br />
      <span>age_range_start: </span>
      <strong>{props.pageContext.age_range_start}</strong>
      <br />
      <span>category_group_name: </span>
      <strong>{props.pageContext.category_group_name}</strong>
      <br />
      <span>client_location_name: </span>
      <strong>{props.pageContext.client_location_name}</strong>
      <br />
      <span>course_id: </span>
      <strong>{props.pageContext.course_id}</strong>
      <br />
      <span>course_type_group: </span>
      <strong>{props.pageContext.course_type_group}</strong>
      <br />
      <span>course_type_long_description: </span>
      <strong>{props.pageContext.course_type_long_description}</strong>
      <br />
      <span>course_type_name: </span>
      <strong>{props.pageContext.course_type_name}</strong>
      <br />
      <span>course_web_publishing_action_type: </span>
      <strong>{props.pageContext.course_web_publishing_action_type}</strong>
      <br />
      <span>course_web_publishing_action_type_id: </span>
      <strong>{props.pageContext.course_web_publishing_action_type_id}</strong>
      <br />
      <span>date_time_display: </span>
      <strong>{props.pageContext.date_time_display}</strong>
      <br />
      <span>days_of_the_week: </span>
      <strong>{props.pageContext.days_of_the_week}</strong>
      <br />
      <span>display_address: </span>
      <strong>{props.pageContext.display_address}</strong>
      <br />
      <span>email_registration_description: </span>
      <strong>{props.pageContext.email_registration_description}</strong>
      <br />
      <span>end_date: </span>
      <strong>{props.pageContext.end_date}</strong>
      <br />
      <span>geocode_address: </span>
      <strong>{props.pageContext.geocode_address}</strong>
      <br />
      <span>id: </span>
      <strong>{props.pageContext.id}</strong>
      <br />
      <span>isCreatedByStatefulCreatePages: </span>
      <strong>{props.pageContext.isCreatedByStatefulCreatePages}</strong>
      <br />
      <span>is_full: </span>
      <strong>{props.pageContext.is_full}</strong>
      <br />
      <span>is_restricted_registration: </span>
      <strong>{props.pageContext.is_restricted_registration}</strong>
      <br />
      <span>location_lat: </span>
      <strong>{props.pageContext.location_lat}</strong>
      <br />
      <span>location_lng: </span>
      <strong>{props.pageContext.location_lng}</strong>
      <br />
      <span>omit_dates: </span>
      <strong>{props.pageContext.omit_dates}</strong>
      <br />
      <span>phone_registration_description: </span>
      <strong>{props.pageContext.phone_registration_description}</strong>
      <br />
      <span>public_note: </span>
      <strong>{props.pageContext.public_note}</strong>
      <br />
      <span>room: </span>
      <strong>{props.pageContext.room}</strong>
      <br />
      <span>start_date: </span>
      <strong>{props.pageContext.start_date}</strong>
      <br />
      <br />
      <br />
      <br />
      <Link to="/dir-sample">
        <h2>
        Back to Directory
        </h2>
      </Link>
      {console.log(props)}
    </main>
  </Layout>
);

export default CourseSample;

//////////////////////////////////////////////////////////////////////
// End Component

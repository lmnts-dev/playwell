// templates/Programs/index.js:
// This is the templated programs page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
// import { Link, StaticQuery, useStaticQuery, graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import { CourseListings } from 'components/library/CourseListings';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import locationMatch from 'helpers/LocationMatch';

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
    </Layout>
  );
};

export default ProgramsPage;

//////////////////////////////////////////////////////////////////////
// End Component

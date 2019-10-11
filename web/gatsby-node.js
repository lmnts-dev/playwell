////////////////////////////////////////////////////////////////////////////////////
// Universal Helpers
////////////////////////////////////////////////////////////////////////////////////

const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

// Gatsby uses Redux to manage its internal state.
// Plugins and sites can use functions like "createPage"
// to interact with Gatsby.
// We are using 'lodash' above for the _.each function. Read more:
// https://lodash.com/docs/4.17.11#forEach

// Use Gatsby's createPage() function. Read more:
// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
// createPage({
//   // Each page is required to have a `path` as well
//   // as a template component. The `context` is
//   // optional but is often necessary so the template
//   // can query data specific to each page.
//   path: `/${edge.node.uid}/`,
//   component: slash(topLevelPageTemplate),
//   context: {
//     Id: edge.node.id,
//   },
// });

// Slugify Helper

function slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

////////////////////////////////////////////////////////////////////////////////////
// Begin Exports
////////////////////////////////////////////////////////////////////////////////////

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });

  // Fix MapBoxGL Build Error
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: ['null-loader'],
          },
        ],
      },
    });
  }
};

////////////////////////////////////////////////////////////////////////////////////
// Create Pages
////////////////////////////////////////////////////////////////////////////////////
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

// This code is based on GatsbyGram's implementation of createPages():
// Learn more: https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js
////////////////////////////////////////////////////////////////////////////////////

// Get our Data
// Check out https://localhost:8000/___graphql to see what is getting spit out here.

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // The “graphql” function allows us to run arbitrary
  // queries against this Gatsbygram's graphql schema. Think of
  // it like Gatsbygram has a built-in database constructed
  // from static data that you can run queries against.
  //
  // Post is a data node type derived from data/posts.json
  // which is created when scraping Instagram. “allPostsJson”
  // is a "connection" (a GraphQL convention for accessing
  // a list of nodes) gives us an easy way to query all
  // Post nodes.
  return graphql(
    `
      {
        allPlayWellClient {
          edges {
            node {
              id
              display_address
              geocode_address
              public_note
              location_lng
              location_lat
              state_id
              county_id
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

        allPlayWellManagers {
          edges {
            node {
              id
              cell_number
              cost_code
              cost_code_name
              email
              manager
              state
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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // Create Course (Client) Pages
    ////////////////////////////////////////////////////////////////////////////////////

    // Helper Functions

    // Match State ID + Client ID

    // LocationMatch Helper
    const locationMatch = (edges, countyId, stateId) => {
      // Props:
      // edges: Should always be allPlayWellStates.edges
      // countyId: source.node.county_id,
      // stateId: source.node.state_id

      // Filter by State
      const matchState = edges.filter(
        state => state.node.playwell_state_id == stateId
      );

      // Filter the matchState's Counties for the matching County
      const matchCounty = matchState[0].node.counties
        ? matchState[0].node.counties.filter(
            county => county.county_id == countyId
          )
        : false;

      return {
        state: matchState[0].node,
        county: matchCounty[0],
      };
    };

    // Define Our Course Template
    const courseTemplate = path.resolve(`src/templates/Course/index.js`);

    // Create Pages
    _.each(result.data.allPlayWellClient.edges, client => {
      // Get our Location Meta Data
      let locationMetaResults = locationMatch(
        result.data.allPlayWellStates.edges,
        client.node.county_id,
        client.node.state_id
      );

      // Build our slugified strings for pretty URLs.
      let stateSlug = slugify(locationMetaResults.state.name);
      let countySlug = slugify(locationMetaResults.county.name);

      //  Create our Course Pages
      _.each(client.node.courses, course => {
        // Build our slugified strings for pretty URLs.
        let programSlug = slugify(course.course_type_name);

        createPage({
          path: `/programs/${stateSlug}/${countySlug}/${programSlug}-${course.course_id}`,
          component: slash(courseTemplate),
          context: {
            // Location Data
            state_id: client.node.state_id,
            county_id: client.node.county_id,
            locationMeta: locationMetaResults,

            // Additional Data
            id: client.node.id,
            display_address: client.node.display_address,
            geocode_address: client.node.geocode_address,
            public_note: client.node.public_note,
            location_lng: client.node.location_lng,
            location_lat: client.node.location_lat,
            client_location_name: client.node.client_location_name,
            client_id: client.state_id,
            course_id: course.course_id,
            is_full: course.is_full,
            start_date: course.start_date,
            end_date: course.end_date,
            course_type_long_description: course.course_type_long_description,
            course_type_name: course.course_type_name,
            course_type_group: course.course_type_group,
            age_range_start: course.age_range_start,
            age_range_end: course.age_range_end,
            age_range_display: course.age_range_display,
            date_time_display: course.date_time_display,
            category_group_name: course.category_group_name,
            days_of_the_week: course.days_of_the_week,
            omit_dates: course.omit_dates,
            omit_dates: course.omit_dates,
            public_note: course.public_note,
            room: course.room,
            course_web_publishing_action_type_id:
              course.course_web_publishing_action_type_id,
            action_url: course.action_url,
            is_restricted_registration: course.is_restricted_registration,
            email_registration_description:
              course.email_registration_description,
            phone_registration_description:
              course.phone_registration_description,
            action_url_comment: course.action_url_comment,
            course_web_publishing_action_type:
              course.course_web_publishing_action_type,
            action_type: course.action_type,
            action_url_external: course.action_url_external,
            theme: course.course_type_group,
          },
        });
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////
    // Create Location Landing Pages
    ////////////////////////////////////////////////////////////////////////////////////

    // Define Our Locations Template
    const locationsTemplate = path.resolve(`src/templates/Location/index.js`);

    // Create Pages
    _.each(result.data.allPlayWellStates.edges, state => {
      // Build our slugified strings for pretty URLs.
      let stateSlug = slugify(state.node.name);

      // Pass Filtered State Manager Array
      const filteredStateManagers = state_id => {
        let filteredManagers = result.data.allPlayWellManagers.edges.filter(
          manager => manager.node.state_id == state_id
        );

        return filteredManagers;
      };

      //  Create our State Pages
      createPage({
        path: `/locations/${stateSlug}`,
        component: slash(locationsTemplate),
        context: {
          isCounty: false,
          isCostCode: false,
          id: state.node.state_id,
          abbrev: state.node.abbrev,
          name: state.node.name,
          playwell_state_id: state.node.playwell_state_id,
          counties: state.node.counties,
          managers: filteredStateManagers(state.node.playwell_state_id),
        },
      });

      // Loop through each state's respective Counties data
      _.each(state.node.counties, county => {
        // Build our slugified strings for pretty URLs.
        let countySlug = slugify(county.name);
        let costCodeSlug = slugify(county.cost_code_name);

        // Pass Filtered County Manager Array
        const filteredCountyManagers = cost_code => {
          let filteredManagers = result.data.allPlayWellManagers.edges.filter(
            manager => manager.node.cost_code == cost_code
          );

          return filteredManagers;
        };

        //  Create our Counties Pages
        createPage({
          path: `/locations/${stateSlug}/${costCodeSlug}/${countySlug}`,
          component: slash(locationsTemplate),
          context: {
            isCounty: true,
            isCostCode: false,
            cost_code: county.cost_code,
            cost_code_name: county.cost_code_name,
            county_id: county.county_id,
            name: county.name,
            managers: filteredCountyManagers(county.cost_code),
            parentState: {
              id: state.node.state_id,
              abbrev: state.node.abbrev,
              name: state.node.name,
              playwell_state_id: state.node.playwell_state_id,
              counties: state.node.counties,
              managers: filteredStateManagers(state.node.playwell_state_id),
            },
          },
        });

        //  Create our Cost Code Pages
        createPage({
          path: `/locations/${stateSlug}/${costCodeSlug}`,
          component: slash(locationsTemplate),
          context: {
            isCounty: false,
            isCostCode: true,
            cost_code: county.cost_code,
            cost_code_name: county.cost_code_name,
            county_id: county.county_id,
            name: county.name,
            managers: filteredCountyManagers(county.cost_code),
            parentState: {
              id: state.node.state_id,
              abbrev: state.node.abbrev,
              name: state.node.name,
              playwell_state_id: state.node.playwell_state_id,
              counties: state.node.counties,
              managers: filteredStateManagers(state.node.playwell_state_id),
            },
          },
        });
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////
    // Create Program Landing Pages
    ////////////////////////////////////////////////////////////////////////////////////

    // Define Our Programs Template
    const programsTemplate = path.resolve(`src/templates/Programs/index.js`);

    // Create Pages
    _.each(result.data.allPlayWellStates.edges, state => {
      // Build our slugified strings for pretty URLs.
      let stateSlug = slugify(state.node.name);

      // Pass Filtered State Manager Array
      const filteredStateManagers = state_id => {
        let filteredManagers = result.data.allPlayWellManagers.edges.filter(
          manager => manager.node.state_id == state_id
        );

        return filteredManagers;
      };

      //  Create our State Pages
      createPage({
        path: `/programs/${stateSlug}`,
        component: slash(programsTemplate),
        context: {
          isCounty: false,
          isCostCode: false,
          abbrev: state.node.abbrev,
          name: state.node.name,
          playwell_state_id: state.node.playwell_state_id,
          counties: state.node.counties,
          managers: filteredStateManagers(state.node.playwell_state_id),
        },
      });

      // Loop through each state's respective Counties data
      _.each(state.node.counties, county => {
        // Build our slugified strings for pretty URLs.
        let countySlug = slugify(county.name);
        let costCodeSlug = slugify(county.cost_code_name);

        // Pass Filtered County Manager Array
        const filteredCountyManagers = cost_code => {
          let filteredManagers = result.data.allPlayWellManagers.edges.filter(
            manager => manager.node.cost_code == cost_code
          );

          return filteredManagers;
        };

        //  Create our Counties Pages
        createPage({
          path: `/programs/${stateSlug}/${costCodeSlug}/${countySlug}`,
          component: slash(programsTemplate),
          context: {
            isCounty: true,
            isCostCode: false,
            cost_code: county.cost_code,
            cost_code_name: county.cost_code_name,
            county_id: county.county_id,
            name: county.name,
            managers: filteredCountyManagers(county.cost_code),
            parentState: {
              id: state.node.state_id,
              abbrev: state.node.abbrev,
              name: state.node.name,
              playwell_state_id: state.node.playwell_state_id,
              counties: state.node.counties,
              managers: filteredStateManagers(state.node.playwell_state_id),
            },
          },
        });

        //  Create our Cost Code Pages
        createPage({
          path: `/programs/${stateSlug}/${costCodeSlug}`,
          component: slash(programsTemplate),
          context: {
            isCounty: false,
            isCostCode: true,
            cost_code: county.cost_code,
            cost_code_name: county.cost_code_name,
            county_id: county.county_id,
            name: county.name,
            managers: filteredCountyManagers(county.cost_code),
            parentState: {
              id: state.node.state_id,
              abbrev: state.node.abbrev,
              name: state.node.name,
              playwell_state_id: state.node.playwell_state_id,
              counties: state.node.counties,
              managers: filteredStateManagers(state.node.playwell_state_id),
            },
          },
        });
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////
  });
};

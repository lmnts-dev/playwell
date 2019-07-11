// Helpers
const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

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

// Begin Exports

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
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

// This code is based on GatsbyGram's implementation of createPages():
// Learn more: https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js

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
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////

    const courseSample = path.resolve(`src/templates/course-sample.js`);

    // Create Client Pages
    _.each(result.data.allPlayWellClient.edges, client => {
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

      //  Create our Course Pages
      _.each(client.node.courses, course => {
        createPage({
          path: `/courses/${client.node.id}/${course.course_id}`,
          component: slash(courseSample),
          context: {
            id: client.node.id,
            display_address: client.node.display_address,
            geocode_address: client.node.geocode_address,
            public_note: client.node.public_note,
            location_lng: client.node.location_lng,
            location_lat: client.node.location_lat,
            client_location_name: client.node.client_location_name,
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
          },
        });
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////
  });
};

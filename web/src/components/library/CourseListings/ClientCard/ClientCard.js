// Client Card Component:
// This is component to show a client & it's group of courses.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';
import { Box, Flex } from 'components/library/Elements';
import { CourseCard } from '../CourseCard';
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Styles
import { ClientCardStyle } from './styles.scss';

// Helpers
import slugify from 'helpers/slugify';

// Begin Component
//////////////////////////////////////////////////////////////////////

export class ClientCard extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      cardExpanded: false,
    };

    // Bind expanding function
    this.toggleCard = this.toggleCard.bind(this);
    this.focusCard = this.focusCard.bind(this);
  }

  // Mounted State
  componentDidMount() {
    this.state = {
      cardExpanded: false,
    };
  }

  // Card expanding function
  toggleCard() {
    if (this.state.cardExpanded == false) {
      this.setState({
        cardExpanded: true,
      });
    } else {
      this.setState({
        cardExpanded: false,
      });
    }
  }

  // Check if we are focusing the card from courseMapNav via location.hash
  focusCard(currentClient) {
    // if (typeof window !== 'undefined') {
    //   if (
    //     window.location.hash ===
    //     slugify(currentClient.node.client_location_name)
    //   ) {
    //     this.setState({
    //       cardExpanded: true,
    //     });
    //     console.log('expanded');
    //     return;
    //   } else {
    //     return;
    //   }
    // } else {
    //   return;
    // }
  }

  render() {
    // Define our data
    let clientData = this.props.clientData;
    let stateSlug = this.props.stateSlug;
    let countySlug = this.props.countySlug;
    let locationMetaResults = this.props.locationMetaResults;

    // Initial programCounts object
    let programCounts = {};

    // Reduce our Programs to get some summarized counts
    // of what's in each listing.
    const programMap = data => {
      if (data) {
        let programCounts = data.reduce(function(course, value) {
          // increment or set the property
          // `(course[value.category_group_name] || 0)` returns the property value if defined
          // or 0 ( since `undefined` is a falsy value
          course[value.category_group_name] =
            (course[value.category_group_name] || 0) + 1;
          // return the updated object
          return course;
          // set the initial value as an object
        }, {});

        return programCounts;
      } else {
        return;
      }
    };

    let reducedPrograms = programMap(clientData.node.courses);
    let reducedProgramsEntries = Object.entries(reducedPrograms);

    // Check our County names if they contain 'County'
    const countyClean = countyName => {
      if (countyName.toLowerCase().includes('county')) {
        return countyName;
      } else {
        return countyName + ' County';
      }
    };

    /**
     * For Debugging Purposes Only
     */
    // console.log(reducedProgramsEntries);
    // console.log(locationMetaResults);

    // Render Cards
    return (
      <ClientCardStyle
        onClick={this.toggleCard}
        cardExpanded={this.state.cardExpanded}
        // className={
        //   typeof window !== 'undefined'
        //     ? window.location.hash ===
        //       `#${slugify(clientData.node.client_location_name)}`
        //       ? 'focus'
        //       : false
        //     : false
        // }
      >
        <span
          className="anchor"
          id={slugify(clientData.node.client_location_name)}
        ></span>
        <ClientCardStyle.ClientName cardExpanded={this.state.cardExpanded}>
          <div className="client-name">
            <div className="subtitle-list">
              <span>{locationMetaResults.county.cost_code_name}</span>
              <span>{countyClean(locationMetaResults.county.name)}</span>
            </div>
            <span>{clientData.node.client_location_name}</span>
          </div>

          <div className="client-counts">
            {/* Remap our entries into an array and spit out the counts and appropriate
      CategoryMetaMatch for their theme. */}
            {reducedProgramsEntries.map((entry, idx) => {
              // console.log(reducedProgramsEntries) to see these array values.
              let count = entry[1];
              let programContext = entry[0];

              // Return the items.
              return (
                <ClientCardStyle.CourseCount
                  bgColor={CategoryMetaMatch(programContext).theme.bgColor}
                  textColor={
                    CategoryMetaMatch(programContext).theme.primaryColor
                  }
                  key={idx}
                >
                  {count}
                </ClientCardStyle.CourseCount>
              );
            }, this)}

            <Icon Name="carat" />
          </div>
        </ClientCardStyle.ClientName>
        {clientData.node.courses.map((course, idx) => {
          // Build our slugified strings for pretty URLs.
          let programSlug = slugify(course.course_type_name);

          return (
            <CourseCard
              courseLabel={{
                name: course.category_group_name,
                bgColor: Theme.Color.Primary,
                textColor: Theme.Color.White,
              }}
              courseData={course}
              locationMetaResults={locationMetaResults}
              stateSlug={stateSlug}
              countySlug={countySlug}
              programSlug={programSlug}
              clientData={clientData}
              key={idx}
            />
          );
        })}
      </ClientCardStyle>
    );
  }
}

//////////////////////////////////////////////////////////////////////
// End Component

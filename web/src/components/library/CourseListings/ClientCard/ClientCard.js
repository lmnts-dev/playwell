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

  render() {
    // Define clientDate
    const clientData = this.props.clientData;
    const programCounts = {};

    function programMap(data) {
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
    }

    const reducedPrograms = programMap(clientData.node.courses);
    const reducedProgramsEntries = Object.entries(reducedPrograms);

    // console.log(reducedProgramsEntries);

    // Render Cards
    return (
      <ClientCardStyle
        onClick={this.toggleCard}
        cardExpanded={this.state.cardExpanded}
      >
        <ClientCardStyle.ClientName cardExpanded={this.state.cardExpanded}>
          <div className="client-name">{clientData.node.client_location_name}</div>

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
          return (
            <CourseCard
              courseLabel={{
                name: course.category_group_name,
                bgColor: Theme.Color.Primary,
                textColor: Theme.Color.White,
              }}
              courseData={course}
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

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

// Styles
import { ClientCardStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export class ClientCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardExpanded: false,
    };

    this.toggleCard = this.toggleCard.bind(this);
  }

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

    // Render Cards
    return (
      <ClientCardStyle
        onClick={this.toggleCard}
        cardExpanded={this.state.cardExpanded}
        key={this.props.idx}
      >
        <ClientCardStyle.ClientName cardExpanded={this.state.cardExpanded}>
          <span>{clientData.node.client_location_name}</span>
          <Icon Name="carat" />
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

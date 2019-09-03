// Course Map Nav Component:
// This is component to browse courses on the Programs page.

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

export const ClientCard = ({ clientData, idx }) => {
  return (
    <ClientCardStyle expanded={true} key={idx}>
      <ClientCardStyle.ClientName>
        {clientData.node.client_location_name}
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
};

//////////////////////////////////////////////////////////////////////
// End Component

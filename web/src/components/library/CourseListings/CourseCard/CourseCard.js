// Course Card Component:
// This is an individual course listing component.
// Data is passed from the PlayWell Client api.

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

// Styles
import { CourseCardStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CourseCard = ({ courseData, clientData, courseLabel, key }) => {
  return (
    <CourseCardStyle key={key}>
      <Link to={'/courses/' + clientData.node.id + '/' + courseData.course_id}>
        <CourseCardStyle.Title>
          {courseData.course_type_name}
        </CourseCardStyle.Title>
        <CourseCardStyle.Details>
          <span>
            {courseData.start_date} - {courseData.end_date}
          </span>
        </CourseCardStyle.Details>

        <CourseCardStyle.Label
          bgColor={courseLabel.bgColor ? courseLabel.bgColor : Theme.Color.Nova}
          textColor={
            courseLabel.textColor ? courseLabel.textColor : Theme.Color.White
          }
        >
          <span>
            <strong>{courseLabel.name}</strong>
          </span>
        </CourseCardStyle.Label>
      </Link>
    </CourseCardStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

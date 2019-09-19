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

// Helpers
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Components
import { Icon } from 'components/library/Icons';
import { Box, Flex } from 'components/library/Elements';

// Styles
import { CourseCardStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CourseCard = ({ courseData, clientData, courseLabel, key }) => {
  const categoryMeta = CategoryMetaMatch(courseData.category_group_name);

  return (
    <CourseCardStyle className="row" key={key}>
      <Link to={'/courses/' + clientData.node.id + '/' + courseData.course_id}>
        <CourseCardStyle.Title className="course-title">
          <span>{courseData.course_type_name}</span>
          <Icon Name="carat" />
        </CourseCardStyle.Title>
        <CourseCardStyle.Details>
          <div class="details-major">
            <span>
              {courseData.start_date} - {courseData.end_date}
            </span>
            <span>{courseData.days_of_the_week}</span>
          </div>
          <div class="details-minor">
            <span>{courseData.age_range_display}</span>
            <span>{courseData.course_type_group}</span>
          </div>
        </CourseCardStyle.Details>

        <CourseCardStyle.Label
          bgColor={categoryMeta ? categoryMeta.theme.bgColor : Theme.Color.Nova}
          textColor={
            categoryMeta ? categoryMeta.theme.primaryColor : Theme.Color.White
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

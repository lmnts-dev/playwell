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

// Styles
import {
  CourseListingsStyle,
  ListingsResultsStyle,
  ListingsFiltersStyle,
  ListingsCountersStyle,
} from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ListingsFilters = ({ courseData }) => {
  // The Items
  const ListingsFiltersItem = ({ label, items }) => {
    return (
      <ListingsFiltersStyle.Item onClick={() => console.log(items)}>
        <span class="filter-inner">
          <span>{label}</span>
          <Icon Name="carat" />
        </span>
        <ListingsFiltersStyle.FilterList className="list">
          <ul>
            {items.map((item, idx) => {
              return (
                <li key={idx}>
                  {item.name} - {item.value} - {idx}
                </li>
              );
            })}
          </ul>
        </ListingsFiltersStyle.FilterList>
      </ListingsFiltersStyle.Item>
    );
  };

  // Show the bar
  return (
    <ListingsFiltersStyle>
      <ListingsFiltersItem
        label="Any Age"
        items={[
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
        ]}
      />
      <ListingsFiltersItem
        label="Start Date"
        items={[
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
        ]}
      />
      <ListingsFiltersItem
        label="Course Type"
        items={[
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
          { name: 'Filter Name', value: 10 },
        ]}
      />
    </ListingsFiltersStyle>
  );
};

const ListingsCounters = ({ courseData }) => {
  // The Items
  const ListingsCountersItem = ({ count, label, context, btnTheme }) => {
    return (
      <ListingsCountersStyle.Item
        btnTheme={btnTheme}
        onClick={() => console.log(context)}
      >
        <span class="counter-inner">
          <span>{count} </span>
          <span>{label}</span>
        </span>
      </ListingsCountersStyle.Item>
    );
  };
  return (
    <ListingsCountersStyle>
      <ListingsCountersItem
        count={5}
        label="Camps"
        context="camps"
        btnTheme={{
          bgColor: Theme.Color.Sunlight,
          txtColor: Theme.Color.White,
        }}
      />
      <ListingsCountersItem
        count={5}
        label="Classes"
        context="classes"
        btnTheme={{ bgColor: Theme.Color.Ocean, txtColor: Theme.Color.White }}
      />
      <ListingsCountersItem
        count={5}
        label="Workshops"
        context="workshops"
        btnTheme={{ bgColor: Theme.Color.Nova, txtColor: Theme.Color.White }}
      />
    </ListingsCountersStyle>
  );
};

const ListingsResults = ({ courseData }) => {
  return (
    <ListingsResultsStyle>
      {courseData.allPlayWellClient.edges.map((client, idx) => {
        if (idx < 20) {
          return (
            <div key={idx}>
              <h4 style={{ marginTop: '30px' }}>
                {client.node.client_location_name}
              </h4>
              {client.node.courses.map((course, idx) => {
                return (
                  <div key={idx}>
                    <Link
                      to={'/courses/' + client.node.id + '/' + course.course_id}
                    >
                      {client.node.client_location_name} -{' '}
                      {course.course_type_name}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </ListingsResultsStyle>
  );
};

const ListingsWrapper = ({ courseData, mapWidth, mapZedIndex, children }) => {
  return (
    <CourseListingsStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div class="listings-inner">
        <Flex
          width={1}
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            width={[1, 1, 1, 1]}
            pr={[0, 0, 0, 0, 3]}
            pl={[0, 0, 2, 6, 9]}
            pb={[2, 2, 0, 0]}
          >
            <div className="listings">{children}</div>
          </Box>
        </Flex>
      </div>
    </CourseListingsStyle>
  );
};

export const CourseListings = ({ courseData, mapWidth, mapZedIndex }) => {
  return (
    <ListingsWrapper mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <ListingsFilters courseData={courseData} />
      <ListingsCounters courseData={courseData} />
      <ListingsResults courseData={courseData} />
    </ListingsWrapper>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

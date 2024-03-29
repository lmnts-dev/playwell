// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, {useState} from 'react';
import { Link } from 'gatsby';
import { range, uniqWith, isEqual, flatten } from 'lodash'
import { addMonths, addYears, startOfMonth, endOfMonth, isWithinInterval, isSameMonth } from 'date-fns'

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';

// Styles
import { ListingsFiltersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ListingsFilters = ({ courseData, setListingFilter, ageFilter, dateFilter, courseTypeFilter }) => {

  // The Items
  const ListingsFiltersItem = ({ label, items, filterName, updateLabel, setListingFilter }) => {
    return (
      <ListingsFiltersStyle.Item>
        <span className="filter-inner">
          <span>{label}</span>
          <Icon Name="carat" />
        </span>
        <ListingsFiltersStyle.FilterList className="list">
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>
                  <div onClick={() => {
                      setListingFilter(filterName, item.value)
                    }}
                    onKeyDown={() => {
                      setListingFilter(filterName, item.value)
                    }}
                    role="button"
                    tabIndex="0">
                    {item.name}
                  </div>
                </li>
              ))}
          </ul>
        </ListingsFiltersStyle.FilterList>
      </ListingsFiltersStyle.Item>
    );
  };

  // Function to get the list of all ages for the given array of courses
  const getAllAges = (courses => {
    const ageList = courses.map(course => (
      range(course.age_range_start, course.age_range_end + 1)
  ));
    const mergedAgeList = flatten(ageList);
    const sortedAges = mergedAgeList.sort((a,b) => (a-b));
    return sortedAges
  })

  // Function to generate the drop down list for age filter
  const createAgeFilterItems = courses => {
    const ageList = getAllAges(courses)
    const ageFilterItems = uniqWith(ageList
      .map(age => {
        if (age < 5) {
          return { name: `Under 5`, value: { ageMin: 0, ageMax: 5 } }
        } else if ( age >= 10) {
          return { name: `10 and over`, value: { ageMin: 10, ageMax: 14 } }
        } else {
          return { name: `Age ${age}`, value: { ageMin: age, ageMax: age} }
        }
      }), isEqual)
      return ageFilterItems
  }

  // Function to generate date filter drop down items
  const createDateFilterItems = courses => {
    const today = new Date()

    const dateFilterItems = uniqWith(courses
      .map(course => {
        const startDate = new Date(course.start_date)

        if (isWithinInterval(startDate, { start: today, end: endOfMonth(today)})) {
          return { order: 1, name: 'This Month', value: { startDate: today, endDate: endOfMonth(today)} }
        }
        else if (isWithinInterval(startDate, { start: startOfMonth(addMonths(today, 1)), end: endOfMonth(addMonths(today, 1))})) {
          return { order: 2, name: 'Next Month', value: { startDate: startOfMonth(addMonths(today, 1)), endDate: endOfMonth(addMonths(today, 1))} }
        }
        else if (startDate <= endOfMonth(addMonths(today, 6))) {
          return { order: 3, name: 'Next 6 Months', value: { startDate: today, endDate: endOfMonth(addMonths(today, 6))} }
        }
        else if (startDate <= endOfMonth(addYears(today, 1))) {
          return { order: 4, name: 'Next Year', value: { startDate: today, endDate: endOfMonth(addYears(today, 1))}}
        }
      }), isEqual).filter(item => item !== undefined).sort((a,b) => (a.order - b.order))

      return dateFilterItems
  }

  const createCourseTypeFilterItems = courses => {
    const courseTypeFilterItems = uniqWith(courses
      .map(course => {
        if (course.course_type_group === 'Basic Lego') {
          return { order: 1, name: 'LEGO®: Basic', value: course.course_type_group }
        }
        else if (course.course_type_group === 'Advanced') {
          return { order: 2, name: 'LEGO®: Advanced', value: course.course_type_group }
        }
        else if (course.course_type_group === 'Ninjago') {
          return { order: 3, name: course.course_type_group, value: course.course_type_group }
        }
        else if (course.course_type_group === 'Star Wars') {
          return { order: 4, name: course.course_type_group, value: course.course_type_group }
        }
        else if (course.course_type_group === 'Super Heroes') {
          return { order: 5, name: course.course_type_group, value: course.course_type_group }
        }
        else if (course.course_type_group === 'Lego Robotics') {
          return { order: 6, name: 'LEGO® Robotics', value: course.course_type_group }
        }
        else if (course.course_type_group === 'Pre School') {
          return { order: 7, name: 'Pre-School', value: course.course_type_group }
        }
        else if (course.course_type_group === 'Minecraft') {
          return { order: 8, name: 'Minecraft Theme', value: course.course_type_group }
        }
        else if (course.course_type_group === 'Other') {
          return { order: 9, name: course.course_type_group, value: course.course_type_group }
        }
      }), isEqual).sort((a,b) => (a.order - b.order))
      return courseTypeFilterItems
  }

  const createLabel = (filterName) => {
    switch (filterName) {
      case 'ageFilter':
        if (ageFilter.ageMin === 0 && ageFilter.ageMax === 0) {
          return 'Any Age'
        } else if (ageFilter.ageMin === 0) {
          return 'Under 5'
        } else if (ageFilter.ageMin === 10) {
          return '10 and over'
        } else {
          return `Age ${ageFilter.ageMin}`
        }
      case 'dateFilter':
        const today = new Date()
        if (dateFilter.startDate === '' && dateFilter.endDate === '') {
          return 'Any Date'
        } else if (isSameMonth(dateFilter.endDate, endOfMonth(today))) {
          return 'This Month'
        } else if (isSameMonth(dateFilter.endDate, endOfMonth(addMonths(today, 1)))) {
          return 'Next Month'
        } else if (isSameMonth(dateFilter.endDate, endOfMonth(addMonths(today, 6)))) {
          return 'Next 6 Months'
        } else if (isSameMonth(dateFilter.endDate, endOfMonth(addYears(today, 1)))) {
          return 'Next Year'
        }
        break
      case 'courseTypeFilter':
        if (courseTypeFilter === '') {
          return 'Course Type'
        } else {
          return courseTypeFilter
        }
    }
  }

  const courses = flatten(courseData.map(data => data.node.courses))

  // Show the bar
  return (
    <ListingsFiltersStyle>
      <ListingsFiltersItem
        label={createLabel('ageFilter')}
        items={createAgeFilterItems(courses)}
        filterName="ageFilter"
        setListingFilter={setListingFilter}
      />

      <ListingsFiltersItem
        label={createLabel('dateFilter')}
        filterName="dateFilter"
        setListingFilter={setListingFilter}
        items={createDateFilterItems(courses)}
      />
      <ListingsFiltersItem
        label={createLabel('courseTypeFilter')}
        filterName="courseTypeFilter"
        setListingFilter={setListingFilter}
        items={createCourseTypeFilterItems(courses)}
      />
    </ListingsFiltersStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import { range, uniqWith, isEqual, flatten } from 'lodash'
import {getMonth, getYear, addMonths, addYears, endOfMonth, startOfMonth, startOfYear, endOfYear} from 'date-fns'

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';

// Styles
import { ListingsFiltersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ListingsFilters = ({ courseData, setListingFilter }) => {
  // The Items
  const ListingsFiltersItem = ({ label, items, filterName }) => {
    return (
      <ListingsFiltersStyle.Item>
        <span className="filter-inner">
          <span>{label}</span>
          <Icon Name="carat" />
        </span>
        <ListingsFiltersStyle.FilterList className="list">
          {items.length > 1 &&
          <ul>
            {items.map((item, idx) => (
              <div key={idx} onClick={() => setListingFilter(filterName, item.value)} onKeyDown={() => setListingFilter(filterName, item.value)} role="presentation">
                <li>{item.name}</li>
              </div>
            ))}
          </ul>
         }
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
          return { name: `Under 5`, value: { ageMin: 0, ageMax: 5} }
        } else if ( age >= 10) {
          return { name: `10 and over`, value: { ageMin: 10, ageMax: 14 } }
        } else {
          return { name: `Age ${age}`, value: { ageMin: age, ageMax: age} }
        }
      }), isEqual)
      return ageFilterItems
  }

  const createDateFilterItems = courses => {
    const today = new Date()
    const currentMonth = getMonth(today)
    const nextMonth = getMonth(addMonths(today, 1))
    const sixMonths = getMonth(addMonths(today, 6))
    const nextYear = getYear(addYears(today, 1))
    const dateFilterItems = uniqWith(courses
      .map(course => {

        const startMonth = getMonth(new Date(course.start_date))
        const startYear = getYear(new Date(course.start_date))

        if (startMonth === currentMonth) {
          return { name: 'This Month', value: { startDate: today, endDate: endOfMonth(today)} }
        } else if (startMonth === nextMonth) {
          return { name: 'Next Month', value: { startDate: startOfMonth(addMonths(today, 1)), endDate: endOfMonth(addMonths(today, 1))} }
        } else if (startMonth > nextMonth && startMonth <= sixMonths) {
          return { name: 'Next 6 Months', value: { startDate: startOfMonth(addMonths(today, 2)), endDate: endOfMonth(addMonths(today, 6))} }
        } else if (startYear === nextYear) {
          return { name: 'Next Year', value: { startDate: startOfYear(addYears(today, 1)), endDate: endOfYear(addYears(today, 1))}}
        }
      }), isEqual).filter(item => item !== undefined)

      return dateFilterItems.filter(item => item !== undefined)
  }

  const courses = flatten(courseData.map(data => data.node.courses))

  // Show the bar
  return (
    <ListingsFiltersStyle>
      <ListingsFiltersItem
        label="Any Age"
        items={createAgeFilterItems(courses)}
        filterName="ageFilter"
        setListingFilter={setListingFilter}
      />

      <ListingsFiltersItem
        label="Any Date"
        filterName="dateFilter"
        setListingFilter={setListingFilter}
        items={createDateFilterItems(courses)}
      />
      <ListingsFiltersItem
        label="Course Type"
        items={[
          { name: 'LEGO®: Basic', value: 'Basic Lego' },
          { name: 'LEGO®: Advanced', value: 'Advanced' },
          { name: 'Ninjago', value: 'Ninjago' },
          { name: 'Star Wars', value: 'Star Wars' },
          { name: 'Super Heroes', value: 'Super Heroes' },
          { name: 'LEGO® Robotics', value: 'Lego Robotics' },
          { name: 'Pre-School', value: 'Pre School' },
          { name: 'Minecraft Theme', value: 'Minecraft' },
          { name: 'Other', value: 'Other' },
        ]}
      />
    </ListingsFiltersStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import { range, uniqWith, isEqual, flatten } from 'lodash'

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

  const getAllAges = (courses => {
    const ageList = courses.map(course => (
      range(course.age_range_start, course.age_range_end + 1)
    ));
    const mergedAgeList = flatten(ageList);
    const sortedAges = mergedAgeList.sort((a,b) => (a-b));
    return sortedAges
  })

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
        items={[
          { name: 'This Month', value: 10 },
          { name: 'Next Month', value: 10 },
          { name: 'Next 6 Months', value: 10 },
          { name: 'Next Year', value: 10 },
        ]}
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

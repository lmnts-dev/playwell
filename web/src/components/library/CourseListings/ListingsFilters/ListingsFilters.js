// Course Map Nav Component:
// This is component to browse courses on the Programs page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';

// Styles
import { ListingsFiltersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ListingsFilters = ({ courseData }) => {
  // The Items
  const ListingsFiltersItem = ({ label, items }) => {
    return (
      <ListingsFiltersStyle.Item onClick={() => console.log(items)}>
        <span className="filter-inner">
          <span>{label}</span>
          <Icon Name="carat" />
        </span>
        <ListingsFiltersStyle.FilterList className="list">
          <ul>
            {items.map((item, idx) => {
              return <li key={idx}>{item.name}</li>;
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
          { name: 'Under 5', value: 5 },
          { name: 'Age 5', value: 5 },
          { name: 'Age 6', value: 6 },
          { name: 'Age 7', value: 7 },
          { name: 'Age 8', value: 8 },
          { name: 'Age 9', value: 9 },
          { name: '10 and over', value: 10 },
        ]}
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

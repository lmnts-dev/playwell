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

export const LocationFilter = ({ courseData }) => {
  // The Items
  const ListingsFiltersItem = ({ label, items }) => {
    return (
      <ListingsFiltersStyle.Item>
        <span className="filter-inner">
          <Icon Name="pin" />
          <span>{label}</span>
          <Icon Name="carat" className="ico-carat" />
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
        label="Brooklyn, NYC"
        items={[
          { name: 'State', value: 'Arizona' },
          { name: 'State', value: 'Arizona' },
          { name: 'State', value: 'Arizona' },
          { name: 'State', value: 'Arizona' },
        ]}
      />
    </ListingsFiltersStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

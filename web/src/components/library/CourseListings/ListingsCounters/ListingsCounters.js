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
import { ListingsCountersStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ListingsCounters = ({ courseData }) => {
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

//////////////////////////////////////////////////////////////////////
// End Component

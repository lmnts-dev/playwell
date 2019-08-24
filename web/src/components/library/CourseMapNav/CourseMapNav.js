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

// Styles
import { CourseMapNavStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CourseMapNav = ({ mapWidth, mapZedIndex }) => {
  return (
    <CourseMapNavStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div class="inner">
        <div class="map-col">
          <div class="map-container">Map Nav</div>
        </div>
      </div>
    </CourseMapNavStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

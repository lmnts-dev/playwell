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

// Styles
import { CourseMapNavStyle, ToggleMapBtnStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ToggleMapBtn = () => {
  return (
    <ToggleMapBtnStyle>
      <Icon Name="expand" fas />
      <span>Expand Map</span>
    </ToggleMapBtnStyle>
  );
};

export const CourseMapNav = ({ mapWidth, mapZedIndex }) => {
  return (
    <CourseMapNavStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div class="inner">
        <div class="map-col">
          <div class="map-container">
            <ToggleMapBtn />
            <div class="map-container-inner">Map Nav</div>
          </div>
        </div>
      </div>
    </CourseMapNavStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

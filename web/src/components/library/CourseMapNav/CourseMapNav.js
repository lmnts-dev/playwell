// Course Map Nav Component:
// This is component to browse courses on the Programs page. It exports latitude and
// longitude coordinates.

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

export const CourseMapNavContainer = ({
  lat,
  lng,
  zoom,
  courseData,
  mapWidth,
  mapZedIndex,
  stateId,
  countyId,
  costCodeId,
  pageContext,
  mapBoxRef,
}) => {
  return (
    <CourseMapNavStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
      <div className="inner">
        <div className="map-col">
          <div className="map-container">
            <ToggleMapBtn />
            <div className="map-container-inner">
              <div
                ref={mapBoxRef}
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  top: '0',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </CourseMapNavStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component

// WidgetSection Component:
// For displaying inline Widgets on Subpages.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Widgets Container
import WidgetContainer from 'components/library/Widgets/Container/';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import WidgetSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const WidgetSection = ({ BgColor, Widgets, Slider, Gutter }) => (
  <WidgetSectionStyle BgColor={BgColor}>
    <WidgetSectionStyle.Inner Gutter={Gutter}>
      <WidgetSectionStyle.Content className="widget-section">
        {/* Map our Widgets data. */}
        {Widgets.map((Widget, index) => {
          // Pass our Widgets data to our WidgetContainers
          return (
            <WidgetContainer
              key={index}
              WidgetContent={Widget.WidgetContent}
              Flex={Widget.Flex ? Widget.Flex : null}
            />
          );
        })}
      </WidgetSectionStyle.Content>
    </WidgetSectionStyle.Inner>
  </WidgetSectionStyle>
);

export default WidgetSection;

//////////////////////////////////////////////////////////////////////
// End Component

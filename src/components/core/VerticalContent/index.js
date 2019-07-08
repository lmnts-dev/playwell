// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Styles
import { createGlobalStyle } from 'styled-components';
import VerticalContentStyle from './styles.scss';

// Assets
import BgPlaceholder from '../../../assets/images/placeholder_bg.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Content Itself
const VerticalContent = ({ children }) => {
  if (children) {
    return (
      <VerticalContentStyle>
        <VerticalContentStyle.Inner>{children}</VerticalContentStyle.Inner>
      </VerticalContentStyle>
    );
  } else {
    return (
      <VerticalContentStyle>
        <VerticalContentStyle.Inner>
          <h1>Hello World</h1>
        </VerticalContentStyle.Inner>
      </VerticalContentStyle>
    );
  }
};

export default VerticalContent;

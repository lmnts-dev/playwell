// <HomeBetterFuture /> component:
// Building a better future homepage section

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Styles
import { OverflowHidden } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomeBetterFuture = ({ themeProps }) => {
  return (
    <OverflowHidden>
      <BasicSection
        noPaddingRight
        BgColor={Theme.Color.Ocean}
        TextColor={Theme.Color.White}
      >
        <BasicInner noPaddingLeft>
          <EdgeImageWithText
            Caption="The Importance of STEM Education"
            CaptionColor={Theme.Color.White}
            Header="Building a Better Future"
            Image="sailboat.png"
            Paragraph="STEM education creates critical thinkers, increases science literacy, and enables the next generation of innovators. Innovation leads to new products and processes that sustain our economy in an ever increasing technologically driven society. <br /><br /> Having activities that show real-life implication of STEM can pull together the ideas presented in school and help to show how they benefit our society and even our world as a whole"
            ButtonText="Programs"
            ButtonDest="/"
            Reverse
          />
        </BasicInner>
      </BasicSection>
    </OverflowHidden>
  );
};

export default HomeBetterFuture;

//////////////////////////////////////////////////////////////////////
// End Component

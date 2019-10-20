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
            Caption="Tremendous learning mediums"
            CaptionColor={Theme.Color.White}
            Header="Inspiring Play Since 1997"
            Image="sailboat.png"
            Paragraph="Play-Well TEKnologies was founded by Tim Bowen in 1997.
              Introduced to the LEGO® building system in 1996 and recognizing
              it to be both a popular play medium and a tremendous learning
              medium, Tim began to develop projects which drew on his
              professional experience and combined the elements of fun,
              challenge, and learning."
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

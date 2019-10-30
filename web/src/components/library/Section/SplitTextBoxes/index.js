// Giant Text Block Component:
// This is a section for giant text sandwiched by smaller text, an optional button and an optional number

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { BasicInner } from 'components/library/Section/BasicSection';

// Styles
import { SplitTextBoxesStyle, BlockNumber } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SplitTextBoxes = ({ FirstBlock, SecondBlock }) => (
  <SplitTextBoxesStyle>
    <BasicInner>
      <div className="container">
        <div className="h6">{FirstBlock.caption}</div>
        <div className="h3">{FirstBlock.header}</div>
        <p className="p-lg">{FirstBlock.paragraph}</p>
        {FirstBlock.buttonDest && FirstBlock.buttonText && (
          <Btn
            Label={FirstBlock.buttonText}
            BgColor={Theme.Color.Nova}
            TextColor={Theme.Color.White}
            Destination={FirstBlock.buttonDest}
          />
        )}
      </div>
      <div className="container">
        <div className="h6">{SecondBlock.caption}</div>
        <div className="h3">{SecondBlock.header}</div>
        <p className="p-lg">{SecondBlock.paragraph}</p>
        {SecondBlock.buttonDest && SecondBlock.buttonText && (
          <Btn
            Label={SecondBlock.buttonText}
            BgColor={Theme.Color.Nova}
            TextColor={Theme.Color.White}
            Destination={SecondBlock.buttonDest}
          />
        )}
      </div>
    </BasicInner>
  </SplitTextBoxesStyle>
);

export default SplitTextBoxes;

//////////////////////////////////////////////////////////////////////
// End Component

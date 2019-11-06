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

// Styles
import { GiantTextBlockStyle, BlockNumber } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const GiantTextBlock = ({
  giantText,
  topText,
  bottomText,
  buttonText,
  buttonDest,
  headerText,
  Number,
  className,
  children,
  External,
}) => (
  <GiantTextBlockStyle className={className}>
    {children}
    {Number && <BlockNumber className="h1">{Number}</BlockNumber>}
    {headerText && <BlockNumber className="h1-alt">{headerText}</BlockNumber>}
    {topText && <div className="h4">{topText}</div>}
    {giantText && <div className="headline txt-clr-eggplant">{giantText}</div>}
    {bottomText && <div className="h4">{bottomText}</div>}
    {buttonText && buttonDest && (
      <Btn
        Label={buttonText}
        BgColor={Theme.Color.Dino}
        TextColor={Theme.Color.White}
        Destination={buttonDest}
        External={External}
      />
    )}
  </GiantTextBlockStyle>
);

export default GiantTextBlock;

//////////////////////////////////////////////////////////////////////
// End Component

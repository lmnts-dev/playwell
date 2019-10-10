// Text Over Image Section Component:
// This is a section for centered text on a fullwidth background image that
// has an overlay over it

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants
import { BasicInner } from 'components/library/Section/BasicSection';
import Btn from 'components/library/Btn';
import { Theme, Root } from 'constants/Theme';

// Styles
import { TextOverImageStyle, BlockNumber } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const TextOverImage = ({
  Image,
  ButtonText,
  ButtonDest,
  Header,
}) => (
  <TextOverImageStyle>
    <div className="background-image">
      <ImgMatch src={Image} />
    </div>
    <BasicInner>
      <div className="h3">{Header}</div>
      {(ButtonText && ButtonDest) &&
        <Btn
          Label={ButtonText}
          BgColor={Theme.Color.Sky}
          TextColor={Theme.Color.White}
          Destination={ButtonDest}
        />
      }
    </BasicInner>
  </TextOverImageStyle>
);

export default TextOverImage;

//////////////////////////////////////////////////////////////////////
// End Component

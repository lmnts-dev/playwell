// Image With Text Card Component:
// This is a section for two half width components within a white card, one of a
// rectangular image, with settings for optional absolute image behind card
// adding it by including it as a child

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';

// Constants
import Btn from 'components/library/Btn';
import { Theme, Root } from 'constants/Theme';

// Styles
import { ImageWithTextCardStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ImageWithTextCard = ({
  Image,
  Caption,
  Header,
  Paragraph,
  ButtonText,
  ButtonDest,
  children,
}) => (
  <ImageWithTextCardStyle>
    {children}
    <div className="image">
      <ImgMatch src={Image} />
    </div>
    <div className="text">
      <div className="h6">{Caption}</div>
      <div className="h2">{Header}</div>
      <p className="p-lg">{Paragraph}</p>
      {(ButtonText && ButtonDest) &&
        <Btn
          Label={ButtonText}
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination={ButtonDest}
        />
      }
    </div>
  </ImageWithTextCardStyle>
);

export default ImageWithTextCard;

//////////////////////////////////////////////////////////////////////
// End Component

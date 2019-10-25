// Text With Image Section Block Component:
// This is a section for two half width components, one of a rectangular
// image and the other of a number, headline and text

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
import { ImageWithTextBlockStyles, BlockNumber } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ImageWithTextBlock = ({
  reversedOrder,
  Image,
  Number,
  Header,
  Paragraph,
  children,
  ButtonText,
  ButtonDest
}) => (
  <ImageWithTextBlockStyles reversedOrder={reversedOrder}>
    {children}
    <div className="image">
      <ImgMatch src={Image} />
    </div>
    <div className="text">
      <div className="container">
        <BlockNumber className="h1">{Number}</BlockNumber>
        <div className="h3">{Header}</div>
        <p className="p-lg">{Paragraph}</p>
      </div>
      {/*(ButtonText && ButtonDest) &&
        <Btn
          Label={ButtonText}
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination={ButtonDest}
        />
      */}
    </div>
  </ImageWithTextBlockStyles>
);

export default ImageWithTextBlock;

//////////////////////////////////////////////////////////////////////
// End Component

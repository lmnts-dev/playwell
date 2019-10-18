// Simple Text With Iamge Section Component:
// This is a section for two half width components, one of a png
// image and the other of a block of text elements

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
import SimpleTextWithImageStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SimpleTextWithImage = ({
  Image,
  Caption,
  Header,
  Paragraph,
  ButtonText,
  ButtonDest,
}) => (
  <SimpleTextWithImageStyle>
    <div className="text">
      <div className="h6">{Caption}</div>
      <div className="h2">{Header}</div>
      <p className="p-lg">
        {Paragraph}
      </p>
      {(ButtonText && ButtonDest) &&
        <Btn
          Label={ButtonText}
          BgColor={Theme.Color.Eggplant}
          TextColor={Theme.Color.White}
          Destination={ButtonDest}
        />
      }
    </div>
    <div className="image">
      <ImgMatch src={Image} />
    </div>
  </SimpleTextWithImageStyle>
);

export default SimpleTextWithImage;

//////////////////////////////////////////////////////////////////////
// End Component

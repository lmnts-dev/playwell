// Edge Image with Text Section Component:
// This is a section for two half width components, one of a png
// image (with an svg behind it that touches the edge) and the other of a block of text elements

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
import EdgeImageWithTextStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const EdgeImageWithText = ({
  Image,
  Caption,
  CaptionColor,
  Header,
  Paragraph,
  ButtonText,
  ButtonDest,
  Reverse,
}) => (
  <EdgeImageWithTextStyle Reverse={Reverse} CaptionColor={CaptionColor}>
    <Icon Name="swoop" />
    <div className="text">
      <div className="h6">{Caption}</div>
      <div className="h2">{Header}</div>
      <p className="p-lg">{Paragraph}</p>
      {ButtonText && ButtonDest && (
        <Btn
          Label={ButtonText}
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination={ButtonDest}
        />
      )}
    </div>
    <div className="image">
      <ImgMatch objectFit="contain" objectPosition="100% 50%" src={Image} />
      <Icon Name="swoop" />
    </div>
  </EdgeImageWithTextStyle>
);

EdgeImageWithText.defaultProps = {
  CaptionColor: Theme.Color.Nova,
}

export default EdgeImageWithText;

//////////////////////////////////////////////////////////////////////
// End Component

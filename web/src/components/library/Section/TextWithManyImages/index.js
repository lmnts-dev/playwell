// Text With Many Images Section Component:
// This is a section for two half width components, one of three square
// imaged and the other of text

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants

// Styles
import { TextWithManyImagesStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const TextWithManyImages = ({ Images, Text, Reversed }) => (
  <TextWithManyImagesStyle Reversed={Reversed}>
    <div className="text h4">{Text}</div>
    <div className="images">
      <ImgMatch src={Images[0]} />
      <div className="column">
        <ImgMatch src={Images[1]} />
        <ImgMatch src={Images[2]} />
      </div>
    </div>
  </TextWithManyImagesStyle>
);

export default TextWithManyImages;

//////////////////////////////////////////////////////////////////////
// End Component

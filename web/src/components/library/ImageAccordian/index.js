// Image Accordian Component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

//Components
import { Icon } from 'components/library/Icons';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import ImageAccordianStyle from './styles.scss';

const ImageAccordian = ({ Header, Paragraph, Image }) => (
  <ImageAccordianStyle className="image-accordian">
    <div className="text">
      <input type="checkbox" />
      <Icon Name="carat" className="ico ico-carat" />
      <div className="h5">{Header}</div>
      <p>{Paragraph}</p>
    </div>
    <div className="image">
      <ImgMatch src={Image} />
    </div>
  </ImageAccordianStyle>
);

export default ImageAccordian;

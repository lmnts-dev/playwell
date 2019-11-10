// Image Accordian Component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

//Components
import { Icon } from 'components/library/Icons';
import ImgMatch from 'components/core/ImgMatch';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import ImageAccordianStyle from './styles.scss';

const ImageAccordian = ({
  Header,
  Paragraph,
  Image,
  buttonText,
  buttonLink,
}) => (
  <ImageAccordianStyle className="image-accordian">
    <div className="text">
      <input type="checkbox" />
      <Icon Name="carat" className="ico ico-carat" />
      <div className="h5">{Header}</div>
      <div className="content">
        <p>{Paragraph}</p>
        <Btn
          Label={buttonText}
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nova}
          Destination={buttonLink}
        />
      </div>
    </div>
    <div className="image">
      <ImgMatch src={Image} />
    </div>
  </ImageAccordianStyle>
);

export default ImageAccordian;

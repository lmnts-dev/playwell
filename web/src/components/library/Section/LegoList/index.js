// LegoList Component:
// This is a section for three components of lego, headline and text
// with the option to add custom images to replace the logos

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants

// Styles
import LegoListStyles from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const LegoList = ({
  TitleOne,
  TitleTwo,
  TitleThree,
  TextOne,
  TextTwo,
  TextThree,
  ImageOne,
  ImageTwo,
  ImageThree,
}) => (
  <LegoListStyles>
    <div className="item">
      {ImageOne && <ImgMatch src={ImageOne} />}
      {!ImageOne && <Icon Name="basicLego" Color="orange" />}
      <div className="h6">{TitleOne}</div>
      <p>{TextOne}</p>
    </div>
    <div className="item">
      {ImageTwo && <ImgMatch src={ImageTwo} />}
      {!ImageTwo && <Icon Name="basicLego" Color="purple" />}
      <div className="h6">{TitleTwo}</div>
      <p>{TextTwo}</p>
    </div>
    <div className="item">
      {ImageThree && <ImgMatch src={ImageThree} />}
      {!ImageThree && <Icon Name="basicLego" Color="blue" />}
      <div className="h6">{TitleThree}</div>
      <p>{TextThree}</p>
    </div>
  </LegoListStyles>
);

export default LegoList;

//////////////////////////////////////////////////////////////////////
// End Component

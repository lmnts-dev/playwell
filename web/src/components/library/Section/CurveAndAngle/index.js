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
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Styles
import { CurveAndAngleStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CurveAndAngle = ({
  CurveColor,
  AngleColor,
  Clouds,
  AbsoluteImages,
  children
}) => (
  <CurveAndAngleStyle>
    {children}
    <FooterCurveSlice bgColor={CurveColor} />
    <FooterAngleSlice bgColor={AngleColor} />
    {AbsoluteImages && 
      AbsoluteImages.map((image, index) => {
        return (
          <div className="absolute-image" width={image.width} right={image.right} bottom={image.bottom}>
            <ImgMatch src={image.src} />
          </div>
        )
      })
    }
    {Clouds &&
      <div className="clouds">
        <ImgMatch src="clouds.png" />
      </div>
    }
  </CurveAndAngleStyle>
);

export default CurveAndAngle;

//////////////////////////////////////////////////////////////////////
// End Component

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
import { CurveAndAngleStyle, AbsoluteImage, CloudStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CurveAndAngle = ({
  CurveColor,
  AngleColor,
  Clouds,
  Tall,
  className,
  AbsoluteImages,
  children
}) => (
  <CurveAndAngleStyle Tall={Tall} className={className}>
    {children}
    <FooterCurveSlice bgColor={CurveColor} />
    <FooterAngleSlice bgColor={AngleColor} />
    {AbsoluteImages && 
      AbsoluteImages.map((image, index) => {
        return (
          <AbsoluteImage width={image.width} right={image.right} bottom={image.bottom} rotate={image.rotate} flip={image.flip}>
            <ImgMatch src={image.src} />
          </AbsoluteImage>
        )
      })
    }
    {Clouds &&
      <CloudStyle className="clouds" Clouds={Clouds}>
        <ImgMatch src="clouds.png" />
      </CloudStyle>
    }
  </CurveAndAngleStyle>
);

export default CurveAndAngle;

//////////////////////////////////////////////////////////////////////
// End Component

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
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import ImageAccordian from 'components/library/ImageAccordian';

// Styles
import ImageAccordianFeatureStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ImageAccordianFeature = ({ Links, Accordians }) => (
  <ImageAccordianFeatureStyle>
    <BasicInner wideWidth>
      <ul>
        {Links.map((link, index) => {
          return (
            <li key={index}>
              <Link className="h6" to={link.dest ? link.dest : '/'}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="container">
        {Accordians.map((accordian, index) => {
          return (
            <ImageAccordian
              Header={accordian.header}
              Paragraph={accordian.paragraph}
              Image={accordian.image}
              key={index}
              buttonText={accordian.buttonText}
              buttonLink={accordian.buttonLink}
            />
          );
        })}
      </div>
    </BasicInner>
    <FooterAngleSlice bgColor={Theme.Color.Background} />
  </ImageAccordianFeatureStyle>
);

export default ImageAccordianFeature;

//////////////////////////////////////////////////////////////////////
// End Component

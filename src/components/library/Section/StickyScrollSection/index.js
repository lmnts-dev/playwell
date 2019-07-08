// StickyScrollSection Component:
// Desired outcome: https://www.dropbox.com/s/brll80qg306ywmk/Screenshot%202019-05-06%2015.01.12.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import Block from 'components/library/Block';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { SectionContent } from './../../Section';

// Styles
import StickyScrollSectionStyle from './styles.scss';
import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Enable Overflows
export const ReleaseOverflow = createGlobalStyle`
  html, body {
    overflow: visible;
  }

  .wrapper {
    overflow: visible;
  }
`;

// Render Element
const StickyScrollSection = ({
  BgColor,
  Style,
  TextColor,
  Content,
  Gallery,
  GalleryQueries,
  Gutter,
  Flex,
  Button,
}) => (
  <StickyScrollSectionStyle
    Style={Style}
    BgColor={BgColor}
    TextColor={TextColor}
  >
    <ReleaseOverflow />
    <StickyScrollSectionStyle.Inner Gutter={Gutter}>
      <StickyScrollSectionStyle.Content Flex={Flex} className="sticky-section">
        <Block Padding={[0, 1, 0, 1]} className="sticky-block">
          <span className="txt-caption">{Content.Subheadline}</span>
          <h2>{Content.Headline}</h2>
          <p className="p-md">{Content.Body}</p>

          {/* Check if a Btn exists, display if so. */}
          {Button ? (
            <Btn
              Label={Button.Label}
              BgColor={Button.BgColor}
              TextColor={Button.TextColor}
              Destination={Button.Destination}
              IconPosition="left"
              IconClass={Button.IconClass ? Button.IconClass : null}
              IconFas
            />
          ) : null}
        </Block>
        <Block Padding={[0, 1, 0, 1]}>
          {Gallery
            ? Gallery.map((Img, index) => {
                return (
                  <div key="index" className="gallery-img">
                    <ImgMatch src={Img.Src} AltText={Img.Alt} />
                  </div>
                );
              })
            : null}
          {GalleryQueries
            ? GalleryQueries.map((query, index) => {
                return (
                  <div key="index" className="gallery-img">
                    <ImgQuery src={query.Fluid} AltText={query.Alt} />
                  </div>
                );
              })
            : null}
        </Block>
      </StickyScrollSectionStyle.Content>
    </StickyScrollSectionStyle.Inner>
  </StickyScrollSectionStyle>
);

export default StickyScrollSection;

//////////////////////////////////////////////////////////////////////
// End Component

// <Block> Component:
// This is the sitewide block style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';

// Styles
import BlockStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Block = ({
  children,
  className,
  Style,
  maxWidth,
  Width,
  Padding,
  AlignItems,
  BgMatch,
  BgQuery,
  BgAlt,
  BgTint,
  BgColor,
  TextColor,
  JustifyContent,
  Flex,
}) => (
  <BlockStyle
    className={className ? className + ' block' : 'block'}
    Width={Width}
    maxWidth={maxWidth}
    Style={Style}
    Padding={Padding}
    AlignItems={AlignItems ? AlignItems : false}
    JustifyContent={JustifyContent ? JustifyContent : false}
    BgTint={BgTint}
    BgColor={BgColor}
    TextColor={TextColor}
    Flex={Flex}
  >
    {/* Block Content */}
    {children ? <div className="block-content">{children}</div> : null}

    {/* For Background Images */}
    {BgMatch ? (
      <div className="block-img-wrap">
        <div className="block-img">
          <ImgMatch src={BgMatch} AltText={BgAlt} />
        </div>
      </div>
    ) : null}

    {/* For Background Images with ImgQuery */}
    {BgQuery ? (
      <div className="block-img-wrap">
        <div className="block-img">
          <ImgQuery src={BgQuery} AltText={BgAlt} />
        </div>
      </div>
    ) : null}
  </BlockStyle>
);

export default Block;

//////////////////////////////////////////////////////////////////////
// End Component

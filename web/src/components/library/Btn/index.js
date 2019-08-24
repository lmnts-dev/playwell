// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Icon } from 'components/library/Icons';

// Styles
import BtnStyle, { BtnStyleExternal, BtnStylePseudo } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const BtnInner = ({
  BgColor,
  TextColor,
  Size,
  IconPosition,
  Label,
  IconFas,
  IconClass,
  BorderColor,
  BorderWidth,
  BorderStyle,
}) => (
  <BtnStyle.Inner
    className="btn-inner"
    BgColor={BgColor}
    TextColor={TextColor}
    Size={Size}
    IconPosition={IconPosition ? IconPosition : null}
    BorderColor={BorderColor}
    BorderWidth={BorderWidth}
    BorderStyle={BorderStyle}
  >
    <span>{Label}</span>
    {IconClass ? <Icon fas={IconFas} Name={IconClass} /> : null}
  </BtnStyle.Inner>
);

const Btn = ({
  Label,
  Destination,
  IconClass,
  IconPosition,
  IconFas,
  BgColor,
  TextColor,
  BorderColor,
  BorderWidth,
  BorderStyle,
  Size,
  AddClass,
  External,
  Pseudo,
}) => {
  if (External) {
    return (
      <BtnStyleExternal
        className={AddClass ? 'btn ' + AddClass : 'btn'}
        href={Destination ? Destination : '/'}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <BtnInner
          BgColor={BgColor}
          TextColor={TextColor}
          Size={Size}
          IconPosition={IconPosition}
          Label={Label}
          IconFas={IconFas}
          IconClass={IconClass}
          BorderColor={BorderColor}
          BorderWidth={BorderWidth}
          BorderStyle={BorderStyle}
        />
      </BtnStyleExternal>
    );
  } else {
    if (Pseudo) {
      return (
        <BtnStylePseudo className={AddClass ? 'btn ' + AddClass : 'btn'}>
          <BtnInner
            BgColor={BgColor}
            TextColor={TextColor}
            Size={Size}
            IconPosition={IconPosition}
            Label={Label}
            IconFas={IconFas}
            IconClass={IconClass}
            BorderColor={BorderColor}
            BorderWidth={BorderWidth}
            BorderStyle={BorderStyle}
          />
        </BtnStylePseudo>
      );
    } else {
      return (
        <BtnStyle
          className={AddClass ? 'btn ' + AddClass : 'btn'}
          to={Destination ? Destination : '/'}
        >
          <BtnInner
            BgColor={BgColor}
            TextColor={TextColor}
            Size={Size}
            IconPosition={IconPosition}
            Label={Label}
            IconFas={IconFas}
            IconClass={IconClass}
            BorderColor={BorderColor}
            BorderWidth={BorderWidth}
            BorderStyle={BorderStyle}
          />
        </BtnStyle>
      );
    }
  }
};

export default Btn;

//////////////////////////////////////////////////////////////////////
// End Component

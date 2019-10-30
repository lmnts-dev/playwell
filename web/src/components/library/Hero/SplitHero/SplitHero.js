// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { GearContainer, SplitHeroStyle } from './styles.scss';

// Components
import GearRotator from 'components/library/GearRotator';
import PlayButton from 'components/library/Hero/PlayButton';
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import HeroContainer from '../HeroContainer';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SplitHero = ({
  arrow,
  arrowColor,
  bg,
  bgMatch,
  children,
  color,
  gear,
  gearFill,
  gearStroke,
  wideImage,
  playButtonBg,
  subNavColor,
  subNav,
  reversed,
  playButton,
}) => (
  <BasicSection BgColor={bg} TextColor={color}>
    <BasicInner noPaddingRight={!reversed} noPaddingLeft={reversed}>
      <SplitHeroStyle subNavColor={subNavColor} arrowColor={arrowColor} reversed={reversed} wideImage={wideImage}>
        <div className="text">
          <div className="flex-spacer"></div>
          <div className="children">{children}</div>
          {arrow && <div className="arrow"></div>}
          {(subNav && !reversed) &&
            <div className="sub-nav">
              {subNav.map((nav, index) => {
                return (
                  <a className={"h5 " + (nav.active ? 'link-active' : '')} href={nav.link} key={index}>
                    {nav.label}
                  </a>
                );
              })}
            </div>
          }
        </div>
        <div className="imagery">
          <ImgMatch src={bgMatch} />
          {gear ? (
            <GearContainer>
              <GearRotator strokeColor={gearStroke ? gearStroke : 'transparent'} fill={gearFill}/>
            </GearContainer>
          ) : null}
          {playButton && <PlayButton bg={playButtonBg} reversed={reversed}/>}
        </div>
      </SplitHeroStyle>
        {(subNav && reversed) &&
          <div className="sub-nav padding-left">
            {subNav.map((nav, index) => {
              return (
                <a className={"h5 " + (nav.active ? 'link-active' : '')} href={nav.link} key={index}>
                  {nav.label}
                </a>
              );
            })}
          </div>
        }
    </BasicInner>
  </BasicSection>
);

SplitHero.defaultProps = {
  flexDirection: 'row',
  playButtonBg: 'Nova',
  bgMatch: 'intro-smiles.jpg',
  arrow: true,
  arrowColor: Theme.Color.White,
};

export default SplitHero;

//////////////////////////////////////////////////////////////////////
// End Component

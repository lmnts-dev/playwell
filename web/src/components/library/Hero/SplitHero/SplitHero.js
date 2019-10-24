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
  arrowColor,
  bg,
  bgMatch,
  bgQuery,
  bgAlt,
  children,
  color,
  flexDirection,
  gear,
  playButtonBg,
  subNavColor,
  subNav,
  px,
  textAlign,
  withMask,
  heroHeight,
  playButton,
}) => (
  <BasicSection BgColor={bg} TextColor={color}>
    <BasicInner noPaddingRight>
      <SplitHeroStyle subNavColor={subNavColor} arrowColor={arrowColor}>
        <div className="text">
          <div className="flex-spacer"></div>
          <div className="children">{children}</div>
          <div className="arrow"></div>
          {subNav &&
            <div className="sub-nav">
              {subNav.map((nav, index) => {
                return (
                  <a className="h5" href={"/who-we-are/" + nav } key={index}>
                    {nav}
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
              <GearRotator strokeColor={props => props.theme.Color.White} />
            </GearContainer>
          ) : null}
          {playButton == true ? <PlayButton bg={playButtonBg} /> : false}
        </div>
      </SplitHeroStyle>
    </BasicInner>
  </BasicSection>
);

SplitHero.defaultProps = {
  flexDirection: 'row',
  playButtonBg: 'Nova',
  bgMatch: 'intro-smiles.jpg',
  arrowColor: Theme.Color.White,
};

export default SplitHero;

//////////////////////////////////////////////////////////////////////
// End Component

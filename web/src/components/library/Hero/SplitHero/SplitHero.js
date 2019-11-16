// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';



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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => this.setState({ isOpen: false })}
        />
        <button onClick={this.openModal}>Open</button>
      </div>
    );
  }
}


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
  noPaddingBottom,
}) => (
  <BasicSection
    BgColor={bg}
    TextColor={color}
    noPaddingBottom={noPaddingBottom}
    className="split-hero"
  >
    <BasicInner noPaddingRight={!reversed} noPaddingLeft={reversed}>
      <SplitHeroStyle
        subNavColor={subNavColor}
        arrowColor={arrowColor}
        reversed={reversed}
        wideImage={wideImage}
      >
        <div className="text">
          <div className="flex-spacer"></div>
          <div className="children">{children}</div>
          {arrow && <div className="arrow"></div>}
          {subNav && !reversed && (
            <div className="sub-nav">
              {subNav.map((nav, index) => {
                return (
                  <Link
                    smooth
                    className={'h5 ' + (nav.active ? 'link-active' : '')}
                    to={nav.link}
                    key={index}
                  >
                    {nav.label}
                  </Link>
                );
              })}
            </div>
          )}
          {/* THIS IS AN UGLY TEMPORARY DUPLICATION */}
          {subNav && reversed && !wideImage && (
            <div className="sub-nav">
              {subNav.map((nav, index) => {
                return (
                  <Link
                    className={'h5 ' + (nav.active ? 'link-active' : '')}
                    to={nav.link}
                    key={index}
                  >
                    {nav.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="imagery">
          {/*<App/>*/}
          <ImgMatch src={bgMatch} />
          {gear ? (
            <GearContainer>
              <GearRotator
                strokeColor={gearStroke ? gearStroke : 'transparent'}
                fill={gearFill}
              />
            </GearContainer>
          ) : null}
          {playButton && <PlayButton bg={playButtonBg} reversed={reversed} />}
        </div>
      </SplitHeroStyle>
      {subNav && reversed && wideImage && (
        <div className="sub-nav padding-left">
          {subNav.map((nav, index) => {
            return (
              <Link
                className={'h5 ' + (nav.active ? 'link-active' : '')}
                href={nav.link}
                key={index}
              >
                {nav.label}
              </Link>
            );
          })}
        </div>
      )}
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

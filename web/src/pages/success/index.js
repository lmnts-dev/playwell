// Index.js:
// This is the landing page of the who section of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import Marquee from 'components/library/Section/Marquee';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import ImgMatch from 'components/core/ImgMatch';
import LegoList from 'components/library/Section/LegoList';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import TeamBuildingHero from 'sections/TeamBuildingHero';
import TeamBuildingCulture from 'sections/TeamBuildingCulture';
import TeamBuildingSplitLinks from 'sections/TeamBuildingSplitLinks';
import AfterSchoolContact from 'sections/AfterSchoolContact';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Props
const HeroProps = {
  bg: Theme.Color.White,
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const ThemeProps = {
  BgColor: Theme.Color.Ocean,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////

export const AbsoluteDecor = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 0 !important;
  padding-top: 100%;
  bottom: 0;
  left: 0;
  pointer-events: none;
  max-width: ${Root.Site.Width};
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    padding-top: ${Root.Site.Width};
    margin: 0 calc(50vw - calc(${Root.Site.Width} / 2));
  }

  .decor-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: auto;
    

    .ico {
      width: 100%;
      height: auto;
    }


    &.absolute-sailboat {
      width: 45%;
      left: auto;
      right: -12%;
      bottom: 3%;
    }
  }
`;

export const OverflowHidden = styled.div`
  overflow: hidden;
`;

// Render Page
const Success = () => {
  return (
    <Layout {...ThemeProps}>

      <OverflowHidden>
        <BasicSection 
          noPaddingBottom 
          BgColor={Theme.Color.Background} 
          TextColor={Theme.Color.Eggplant}
        >
          <BasicInner>
            <Box textAlign="center" width={'90%'} m={'0 auto'}>
              <h3>
                Thank you for submitting your request!
              </h3>
              <Text as="p" className="h3" fontWeight={600}>
                We'll be in touch.
              </Text>
            </Box>
          </BasicInner>
          <CurveAndAngle
            AngleColor={Theme.Color.White}
            CurveColor={Theme.Color.Ocean}
          >
            <AbsoluteDecor>
              <div className="decor-container absolute-sailboat">
                <ImgMatch src="sailboat.png" />
              </div>
            </AbsoluteDecor>
          </CurveAndAngle>
        </BasicSection>
      </OverflowHidden>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
          <TextWithManyImages
            Reversed
            Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
            Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
          />
      </BasicSection>

      <SplitLinks themeProps={ThemeProps} />
    </Layout>
  );
};

export default Success;

//////////////////////////////////////////////////////////////////////
// End Component

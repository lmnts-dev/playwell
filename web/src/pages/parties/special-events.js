// special-events.js:
// This is the birthday parties page of parties

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';
import ImgMatch from 'components/core/ImgMatch';
import Marquee from 'components/library/Section/Marquee';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import GiantTextBlock from 'components/library/Section/GiantTextBlock';
import LegoList from 'components/library/Section/LegoList';
import ImageWithTextBlock from 'components/library/Section/ImageWithTextBlock';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import { Box, Flex } from 'components/library/Elements';
import SubNav from 'components/library/SubNav';
import SplitHero from 'components/library/Hero/SplitHero';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Props
const HeroProps = {
  bg: Theme.Color.Ocean,
  color: Theme.Color.White,
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  textAlign: 'left',
  withMask: false,
  heroHeight: 'auto',
  bgMatch: 'team.jpg',
};

const ThemeProps = {
  BgColor: Theme.Color.Cream,
  PrimaryColor: 'unset',
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

// Begin Component
//////////////////////////////////////////////////////////////////////


// Render Page
const WhoWhyPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps}>
        <h2>Helping Kids and Adults Understand Through Play</h2>
        <h6>For the past 10 years, we have introduced play into Fortune 500 Companies Take Your Kids to Work Days.</h6>
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>

      <BasicSection BgColor={Theme.Color.White}>
        <BasicInner>
          <CenteredTitle
            Title="Special Events"
            Class="headline"
          >
          </CenteredTitle>
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Sunset}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner noPaddingLeft noPaddingRight noPaddingBottom>
          <ImageWithTextBlock
            Image="intro-smiles.jpg"
            Header="Play at work"
            Paragraph="We have run our LEGO-Inspired STEM Activations for companies around the country, giving kids a chance to experience a fun-filled day at their parents' workplace."
          />
          <ImageWithTextBlock
            reversedOrder
            Image="intro-smiles.jpg"
            Header="Engineers at heart"
            Paragraph="We are play engineers at heart, so we love helping kids to understand through play what their parents do at work, or enabling families to build something out of LEGO® materials that they once thought impossible."
          >
          </ImageWithTextBlock>
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
      >
        <BasicInner>
            <CenteredTitle
                Title="Our Special Events Partners"
                Class="h3"
                TextColor={Theme.Color.Sunset}
            />
        </BasicInner>
        <Marquee
          images={[
            'brandmark.png',
            'brandmark.png',
            'brandmark.png',
            'brandmark.png',
            'brandmark.png',
            'brandmark.png',
          ]}
          SquareFormat
          Shadow
        />
      </BasicSection>


    </Layout>
  );
};

export default WhoWhyPage;

//////////////////////////////////////////////////////////////////////
// End Component

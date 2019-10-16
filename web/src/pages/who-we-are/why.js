// Why.js:
// This is why portion of the who section of the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Icon } from 'components/library/Icons';
import ImgMatch from 'components/core/ImgMatch';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';
import Marquee from 'components/library/Section/Marquee';
import TextOverImage from 'components/library/Section/TextOverImage';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import GiantText from 'components/library/Section/GiantTextBlock';
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
  bg: Theme.Color.Cream,
  color: Theme.Color.Primary,
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

const OverflowHidden = styled.div`
  width: 100vw;
  overflow: hidden;
`

const GiantTextBlock = styled(GiantText)`
  &.wide-word {
    .headline {
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        font-size: 12vw;
    }
  }
`

// Render Page
const WhoWhyPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps}>
        <h2>We provide opportunities for creative expression</h2>
        <h6>We are passionate specialists in STEM Education.</h6>
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
        noPaddingTop
        noPaddingBottom
        BorderBottomVertical
      >
        <TextOverImage
          Image="intro-smiles.jpg"
          Header="Combining the elements of fun, challenge, and learning since 1997"
          ButtonText="Our Story"
          ButtonDest="/"
        />
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} BorderTopVertical>
        <BasicInner>
          <CenteredTitle Title="Our Values" Class="headline">
            <div className="absolute-image">
              <Icon Name="swoop" />
              <ImgMatch src="gears.png" />
            </div>
          </CenteredTitle>
        </BasicInner>
      </BasicSection>

      <OverflowHidden>
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
          noPaddingTop
          noPaddingBottom
        >
          <BasicInner noPaddingLeft noPaddingRight>
            <ImageWithTextBlock
              Image="intro-smiles.jpg"
              Header="Build problem-solving skills"
              Number="01"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                egestas. Sed in magna sapien."
            />
            <ImageWithTextBlock
              reversedOrder
              Image="intro-smiles.jpg"
              Header="Provide an opportunity for creative expression"
              Number="06"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                egestas. Sed in magna sapien."
            >
              <Icon Name="gear" />
            </ImageWithTextBlock>
            <ImageWithTextBlock
              Image="intro-smiles.jpg"
              Header="Foster a greater appreciation of how things work"
              Number="03"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                egestas. Sed in magna sapien."
            />
          </BasicInner>
        </BasicSection>
      </OverflowHidden>

      <OverflowHidden>
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
        >
          <BasicInner wideWidth>
            <GiantTextBlock
              className="wide-word"
              Number="04"
              topText="Encourage the qualities of"
              giantText="Inquisitiveness Self Reliance &amp; Self Confidence"
              bottomText="in children &amp; in everybody."
            />
            <div className="absolute-image">
              <ImgMatch src="gears.png" />
            </div>
          </BasicInner>
        </BasicSection>
      </OverflowHidden>

      <BasicSection BgColor={Theme.Color.Background} BorderMiddle>
        <Marquee
          images={[
            'intro-smiles.jpg',
            'intro-smiles.jpg',
            'intro-smiles.jpg',
            'intro-smiles.jpg',
            'intro-smiles.jpg',
            'intro-smiles.jpg',
            'intro-smiles.jpg',
          ]}
          Shadow
        />
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <LegoList
            blocks={[
              {
                title: 'Creative Collaboration',
                text:
                  'A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best.',
                legoColor: 'orange',
              },
              {
                title: 'New Perspectives',
                text:
                  'A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution.',
                legoColor: 'purple',
              },
              {
                title: 'Staff Morale',
                text:
                  'A rejuvenated staff who rediscovers what they find fun about their job and their organization.',
                legoColor: 'blue',
              },
            ]}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner noPaddingRight>
          <TextWithManyImages
            Text="We do this in the context of fun-filled engineering and
              architectural projects, activities that both the children and the
              instructors enjoy."
            Images={[
              'intro-smiles.jpg',
              'intro-smiles.jpg',
              'intro-smiles.jpg',
            ]}
          />
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default WhoWhyPage;

//////////////////////////////////////////////////////////////////////
// End Component

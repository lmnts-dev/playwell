// Careers.js:
// This is careers portion of the who section of the site.

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
import CenterSlider from 'components/library/Section/CenterSlider';
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

const TextWithManyImages = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .text {
    font-weight: 700;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${Root.Size} ${Root.Size} ${Root.Size} 0;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: calc(${Root.Size} / 2) calc(${Root.Size} / 2)
        calc(${Root.Size} / 2) 0;
      &.h4 {
        font-size: 1.75rem;
      }
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: calc(${Root.Size}) calc(${Root.Size}) calc(${Root.Size}) 0;
    }
  }

  .images {
    flex: 3;
    display: flex;
    flex-direction: row;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: 50vw;
      max-height: calc(${Root.Size} * 6);
    }

    > .gatsby-image-wrapper {
      display: inline-block;
      padding-top: 66.66%;
      width: 66.66%;
      height: 100%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-top: 0;
      }

      > div {
        position: absolute;
        padding-bottom: 0 !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .column {
      width: 33.33%;
      padding-top: 66.66%;
      margin-left: 4px;
      height: 100%;
      position: relative;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-top: 0;
      }

      .gatsby-image-wrapper {
        width: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
        height: 50%;

        &:first-of-type {
          margin-bottom: 4px;
        }

        &:last-of-type {
          margin-top: 4px;
          top: 50%;
        }
      }
    }
  }
`;

const CenteredTitle = styled.div`
  text-align: center;
  color: ${Theme.Color.Blush};
  font-weight: 700;

  > div {
    position: relative;
  }

  .absolute-image {
    position: absolute;
    bottom: calc(${Root.Size} * -4);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: scaleX(-1);

    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      left: calc(${Root.Size} * -0.5);
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      bottom: 0;
    }

    .ico-swoop {
      width: 100%;
      display: block;

      svg {
        transform: rotate(180deg) scaleX(-1)
          translateY(calc(${Root.Size} * 1.5));
        @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
          transform: rotate(-90deg) scaleX(-1)
            translateX(calc(${Root.Size} * 2));
        }
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          transform: translate(calc(${Root.Size} / -2), calc(${Root.Size}));
        }

        path {
          fill: ${Theme.Color.Dino};
        }
      }
    }
  }
`;

const Carousel = styled.div`
  padding-top: calc(${Root.Size});
  position: relative;
`;



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

      <BasicSection BgColor={Theme.Color.Background}>
        <CenteredTitle>
          <BasicInner>
            <div className="headline">Our Team</div>
          </BasicInner>
        </CenteredTitle>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Eggplant}
      >
        <BasicInner>
          <div className="h3">Testimonials</div>
          <CenterSlider
            testimonials={[
              {
                name: 'Alisha',
                quote: 'I like Play-Well’s core belief in personal authenticity. There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Binh',
                quote:'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Kylie',
                quote:'Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Matt',
                quote: 'I like Play-Well’s core belief in personal authenticity. There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Pete',
                quote: 'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
            ]}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        noPaddingBottom
      >
        <BasicInner wideWidth>
          <GiantTextBlock
            headerText="Core Values"
            topText="We believe in a culture of"
            giantText="Inquisitiveness Self Reliance &amp; Self Confidence"
            bottomText="in children &amp; in everybody."
            buttonText="View Listings"
            buttonDest="/"
          />
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} noPaddingTop>
        <Carousel>
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
        </Carousel>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        BorderTop={Theme.Color.Clay}
      >
        <BasicInner>
          <LegoList
            TitleOne="Creative Collaboration"
            TitleTwo="New Perspectives"
            TitleThree="Staff Morale"
            TextOne="A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best."
            TextTwo="A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution."
            TextThree="A rejuvenated staff who rediscovers what they find fun about their job and their organization."
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
          <TextWithManyImages>
            <div className="text h4">
              We do this in the context of fun-filled engineering and
              architectural projects, activities that both the children and the
              instructors enjoy.
            </div>
            <div className="images">
              <ImgMatch src="intro-smiles.jpg" />
              <div className="column">
                <ImgMatch src="intro-smiles.jpg" />
                <ImgMatch src="intro-smiles.jpg" />
              </div>
            </div>
          </TextWithManyImages>
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default WhoWhyPage;

//////////////////////////////////////////////////////////////////////
// End Component

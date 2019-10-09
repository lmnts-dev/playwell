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
import Btn from 'components/library/Btn';
import ImgMatch from 'components/core/ImgMatch';
import Marquee from 'components/library/Section/Marquee';
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

const LargeTextBlock = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 0 auto;
  position: relative;
  max-width: calc(${Root.Size} * 15);
  @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
    max-width: calc(${Root.Size} * 12);
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    max-width: calc(${Root.Size} * 11);
  }

  .headline {
    color: ${Theme.Color.Eggplant};
    padding: calc(${Root.Size} / 4) 0;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 6rem;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 4rem;
    }
  }

  ~ .absolute-image {
    position: absolute;
    top: calc(${Root.Size} * -4.5);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: rotate(260deg);
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      left: calc(${Root.Size} * 0.5);
    }
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      top: calc(${Root.Size} * -2.5);
    }
  }
`;

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

const TextBlock = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: calc(${Root.Size} * 2) 0 calc(${Root.Size} * 1.5) 0;

  .h3 {
    font-weight: 700;
    max-width: calc(${Root.Size} * 10);
    margin: 0 auto;
    padding-bottom: calc(${Root.Size} / 4);
  }

  > div {
    z-index: 2;
    position: relative;
  }

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 100%;
    width: 100%;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${Theme.Color.Eggplant};
      opacity: 0.3;
      z-index: 2;
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 1;
    }
  }
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
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
        noPaddingTop
        noPaddingBottom
        BorderBottomVertical
      >
        <TextBlock>
          <div className="background-image">
            <ImgMatch src="intro-smiles.jpg" />
          </div>
          <BasicInner>
            <div className="h3">
              Combining the elements of fun, challenge, and learning since 1997
            </div>
            <Btn
              Label="Our Story"
              BgColor={Theme.Color.Sky}
              TextColor={Theme.Color.White}
              Destination="/"
            />
          </BasicInner>
        </TextBlock>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} BorderTopVertical>
        <CenteredTitle>
          <BasicInner>
            <div className="headline">Our Values</div>
            <div className="absolute-image">
              <Icon Name="swoop" />
              <ImgMatch src="gears.png" />
            </div>
          </BasicInner>
        </CenteredTitle>
      </BasicSection>

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

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        noPaddingBottom
      >
        <BasicInner wideWidth>
          <LargeTextBlock>
            <Number className="h1">04</Number>
            <div className="h4">Encourage the qualities of</div>
            <div className="headline txt-clr-eggplant">
              Inquisitiveness Self Reliance &amp; Self Confidence
            </div>
            <div className="h4">In children &amp; in everybody.</div>
          </LargeTextBlock>
          <div className="absolute-image">
            <ImgMatch src="gears.png" />
          </div>
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} noPaddingTop BorderMiddle>
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
        noPaddingTop
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

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
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';
import ImgMatch from 'components/core/ImgMatch';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import LegoList from 'components/library/Section/LegoList';
import Marquee from 'components/library/Section/Marquee';
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';
import SplitHero from 'components/library/Hero/SplitHero';
import SubNav from 'components/library/SubNav';
import { Box, Flex } from 'components/library/Elements';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

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

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////

const Partners = styled.div`
  text-align: center;

  .h3 {
    font-weight: 700;
    &.txt-clr-dino {
      color: ${Theme.Color.Dino};
      max-width: calc(${Root.Size} * 9);
      margin: 0 auto;
      padding-bottom: calc(${Root.Size} / 3);
    }
  }
  .slick-slider {
    padding: calc(${Root.Size} / 2) 0 ${Root.Size} 0;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
    text-align: center;
  }

  .left {
    padding-right: calc(${Root.Size});
    padding-top: calc(${Root.Size} * 1.5);
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: 0;
    }
    .h3 {
      font-weight: 700;
      padding-bottom: calc(${Root.Size} / 4);
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      justify-content: center;
      padding-top: calc(${Root.Size} / 2);
    }

    .member {
      text-align: center;
      p {
        font-weight: 700;
        color: ${Theme.Color.Dino};
        padding-bottom: 0;
        line-height: 1;

        &:last-of-type {
          color: ${Theme.Color.Sunset};
        }
      }

      .gatsby-image-wrapper {
        border-radius: calc(${Root.Size} / 8);
        margin: 0 calc(${Root.Size} / 12) calc(${Root.Size} / 6)
          calc(${Root.Size} / 12);
        width: calc(${Root.Size} * 2.25);
        height: calc(${Root.Size} * 3);
      }

      .social {
        a {
          svg {
            height: calc(${Root.Size} / 2);
            width: calc(${Root.Size} / 2);
          }
        }
      }
    }
  }
`;

const ImageWithTextCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: calc(${Root.Grid.Gutter.Right});
  margin-bottom: calc(${Root.Size} * 1.25);
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  > .ico {
    position: absolute;
    bottom: calc(${Root.Size} * -1.25);
    right: calc(${Root.Size} * -1.5);
    z-index: 1;
    height: calc(${Root.Size} * 5.5);
    width: calc(${Root.Size} * 5.5);
    @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
      height: 20vw;
      width: 20vw;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: calc(${Root.Size} * 4);
      width: calc(${Root.Size} * 4);
    }

    svg {
      height: 100%;
      width: 100%;
      fill: ${Theme.Color.Lilac};
    }
  }

  .image,
  .text {
    position: relative;
    z-index: 2;
  }

  .text {
    padding: calc(${Root.Size});
    background-color: ${Theme.Color.White};
    border-bottom-right-radius: calc(${Root.Size});
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: calc(${Root.Size} / 1.5);
    }

    .h2,
    .h6 {
      font-weight: 700;
    }

    .h2 {
      padding: calc(${Root.Size} / 6) 0;
    }
  }

  .image {
    flex: 5;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: 40vw;
      min-height: calc(${Root.Size} * 4);
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

const TopCarousel = styled.div`
  position: relative;

  .text-block {
    text-align: center;
    max-width: calc(${Root.Size} * 15);
    margin: 0 auto;

    .txt-clr-clay {
      color: ${Theme.Color.Clay};
    }

    .h1,
    p {
      font-weight: bold;
    }

    p {
      padding: calc(${Root.Size} / 6) calc(${Root.Size} * 1.5) 0
        calc(${Root.Size} * 1.5);
      line-height: 1.2;
    }
  }

  .clouds {
    width: 30vw;
    position: absolute !important;
    z-index: 3;
    bottom: 0;
    left: -5vw;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      width: calc(${Root.Size} * 6);
      left: calc(${Root.Size} * -1);
    }
  }

  .footer-curve-slice {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .footer-curve-slice {
    z-index: 1;
    transform: scale(1, 0.5) translateY(49%);
    path {
      fill: ${Theme.Color.Clay};
    }
  }

  .footer-angle-slice {
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 20vw;
    transform: translateY(4px);
    path {
      fill: ${Theme.Color.Background};
    }
  }
`;

const CenteredTitle = styled.div`
  text-align: center;
  color: ${Theme.Color.Blush};
  font-weight: 700;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-bottom: ${Root.Size};
  }
`;

const FooterExt = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(${Root.Size} * 3);
  position: relative;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .left,
  .right {
    flex: 1;

    .h3,
    .h5 {
      font-weight: 700;
    }
    .h5 {
      color: ${Theme.Color.Dino};
    }
  }

  .left {
    background-image: linear-gradient(
      ${Theme.Color.Eggplant} 40%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: right;
    background-size: 1px 10px;
    background-repeat: repeat-y;
    padding-right: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      background-image: none;
      padding-right: 0;
    }
  }

  .right {
    padding-left: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-left: 0;
      padding-top: calc(${Root.Size} / 2);
    }
  }
`;

const Carousel = styled.div`
  background: linear-gradient(
    to top,
    ${Theme.Color.Nova} 75%,
    ${Theme.Color.Background} 75%
  );
  .slick-slider {
    .item {
      .gatsby-image-wrapper {
        display: block !important;
        height: 25vw;
        max-height: calc(${Root.Size} * 7);
        margin-left: calc(${Root.Size} / 8);

        img {
          border-radius: calc(${Root.Size} / 8);
        }
      }
    }
  }
`;

// Render Page
const WhoPage = ({ SliderSettings }) => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps}>
        <h2>Passionate industry leaders in STEM Education since 1997</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur a.</h6>
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        noPaddingBottom
        noPaddingTop
        noInner
      >
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
          BgLinear={Theme.Color.Nova}
        />
      </BasicSection>
      <BasicSection
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        noPaddingBottom
        noInner
      >
        <TopCarousel>
          <BasicInner>
            <div className="text-block">
              <div className="headline txt-clr-clay">Play comes first.</div>
              <p className="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                viverra enim sed magna vestibulum, nec imperdiet orci egestas.
                Sed in magna sapien.
              </p>
            </div>
          </BasicInner>
          <FooterCurveSlice bgColor={Theme.Color.Black} />
          <FooterAngleSlice />
          <div className="clouds">
            <ImgMatch src="clouds.png" />
          </div>
        </TopCarousel>
      </BasicSection>

      <BasicSection
        noPaddingRight
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <CenteredTitle>
            <div className="headline">Our Story</div>
          </CenteredTitle>
        </BasicInner>
        <BasicInner noPaddingRight>
          <EdgeImageWithText
            Caption="Tremendous learning mediums"
            Header="Inspiring Play Since 1997"
            Image="gears.png"
            Paragraph="Play-Well TEKnologies was founded by Tim Bowen in 1997.
            Introduced to the LEGO® building system in 1996 and recognizing
            it to be both a popular play medium and a tremendous learning
            medium, Tim began to develop projects which drew on his
            professional experience and combined the elements of fun,
            challenge, and learning."
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner noPaddingLeft noPaddingRight>
          <ImageWithTextCard>
            <Icon Name="gear" />
            <div className="image">
              <ImgMatch src="intro-smiles.jpg" />
            </div>
            <div className="text">
              <div className="h6">Constant Improvement</div>
              <div className="h2">From local to nationwide.</div>
              <p className="p-lg">
                He began operating a summer camp program in 1997, followed by
                after school enrichment classes in 1998. With steady growth of
                the company, project development is now undertaken by a staff of
                instructors bent on constantly improving the programs.
              </p>
              <Btn
                Label="Our Values"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
                Destination="/"
              />
            </div>
          </ImageWithTextCard>
        </BasicInner>
      </BasicSection>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        BorderTop={Theme.Color.Clay}
      >
        <BasicInner wideWidth>
          <Team>
            <div className="left">
              <div className="h3 txt-clr-dino">Our Team</div>
              <Btn
                Label="Join Our Team"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
                Destination="/"
              />
            </div>
            <div className="right">
              <div className="member">
                <ImgMatch src="intro-smiles.jpg" />
                <p>Tim Bowen</p>
                <p>President</p>
                <div className="social">
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                </div>
              </div>

              <div className="member">
                <ImgMatch src="intro-smiles.jpg" />
                <p>Tim Bowen</p>
                <p>President</p>
                <div className="social">
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                  <a href="/" aria-label="test">
                    <svg></svg>
                  </a>
                </div>
              </div>
            </div>
          </Team>
        </BasicInner>
      </BasicSection>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        BorderTop={Theme.Color.Clay}
      >
        <Partners>
          <div className="h3">Our Partners</div>
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
          />
          <BasicInner>
            <div className="h3 txt-clr-dino">
              Interested in Play-Well for your organization?
            </div>
            <Btn
              Label="Partnerships"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/partnerships"
            />
          </BasicInner>
        </Partners>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.White}
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
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Eggplant}
      >
        <BasicInner>
          <FooterExt>
            <div className="left">
              <div className="h5">Looking to join our team?</div>
              <div className="h3">Check out our Jobs &amp; Careers page.</div>
            </div>
            <div className="right">
              <div className="h5">Keep Reading.</div>
              <div className="h3">
                Learn about out Values &amp; why we do what we do.
              </div>
            </div>
          </FooterExt>
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default WhoPage;

//////////////////////////////////////////////////////////////////////
// End Component

// Index.js:
// This is the home page of the website.

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
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  bg: 'Sky',
  color: 'White',
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButtonBg: 'Nova',
  gear: true,
};

const WhoSection = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  padding: calc(${Root.Grid.Gutter.Top} * 4) 0
    calc(${Root.Grid.Gutter.Bottom} * 4) 0;
  ${props =>
    props.BorderTop
      ? `
        background-image: linear-gradient(to right, ` + Theme.Color.Clay + ` 50%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 10px 1px;
        background-repeat: repeat-x;
    `
      : null};
  ${props => (props.noPaddingBottom ? 'padding-bottom: 0;' : null)};
  ${props => (props.noPaddingTop ? 'padding-top: 0;' : null)};
`;


WhoSection.Inner = styled.div`
  margin: 0 auto;
  max-width: ${Root.Site.Width};
  padding: 0 calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 2) 0 calc(${
    Root.Grid.Gutter.Left
    } + ${Root.Size} * 2);
  };

  ${props => (props.noPaddingLeft ? 'padding-left: 0;' : null)};
  ${props => (props.noPaddingRight ? 'padding-right: 0;' : null)};
`;

const LogoList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${Theme.Color.White};

  .item {
    text-align: center;
    margin-right: calc(${Root.Size});
    color: ${Theme.Color.Dino};
    flex: 1;

    &:last-of-type {
      margin-right: 0;
    }

    span.ico {
      width: 50%;
      height: auto;
      display: block;
      margin-left: 30%;
      margin-right: 20%;
    }

    .header {
      font-weight: bold;
      padding: calc(${Root.Size} / 4) 0;
    }
  }
`;

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
  .carousel {
    padding: calc(${Root.Size} / 2) 0 ${Root.Size} 0;
    .partner {
      display: inline-block;
      margin: calc(${Root.Size} / 10);
      background-color: ${Theme.Color.White};
      border-radius: ${Theme.Base.Geometry.Radius};
      width: calc(${Root.Size} * 3);
      height: calc(${Root.Size} * 3);

      .gatsby-image-wrapper {
        position: relative;
        left: 10%;
        top: 10%;
        width: 80%;
        height: 80%;
      }
    }
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  .left {
    padding-right: calc(${Root.Size});
    padding-top: calc(${Root.Size} * 1.5);
    .h3 {
      font-weight: 700;
      padding-bottom: calc(${Root.Size} / 4);
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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

  > .ico {
    position: absolute;
    bottom: calc(${Root.Size} * -1.25);
    right: calc(${Root.Size} * -1.5);
    height: 20vw;
    width: 20vw;
    z-index: 1;

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
  }
`;

const ImageWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .ico-swoop {
    position: absolute;
    height: calc(100% + calc(${Root.Size} * 2));
    right: 0;
    top: calc(${Root.Size} * -1);
    width: auto;
    svg {
      height: 100%;
      path {
        height: 100%;
        fill: ${Theme.Color.Galaxy};
      }
    }
  }

  .text,
  .image {
    flex: 1;
  }

  .text {
    max-width: calc(${Root.Size} * 7);

    .h2,
    .h6 {
      font-weight: 700;

      &.txt-clr-sunset {
        color: ${Theme.Color.Sunset};
      }
    }

    .h2 {
      padding: calc(${Root.Size} / 6) 0;
    }
  }

  .image {
    height: calc(${Root.Size} * 9);
    margin-right: calc(${Root.Size} / 2);

    .gatsby-image-wrapper {
      height: 100%;
      > div {
        height: 100%;
        width: auto !important;
        padding-bottom: 0 !important;
      }
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
      padding: calc(${Root.Size} / 6) calc(${Root.Size} * 1.5) 0 calc(${Root.Size} * 1.5);
      line-height: 1.2;
    }
  }

  .clouds {
    width: 30vw;
    position: absolute !important;
    z-index: 3;
    bottom: 0;
    left: -5vw;
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
`;

const Carousel = styled.div`
  padding-top: calc(${Root.Size});
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(
    to top,
    ${Theme.Color.Nova} 80%,
    ${Theme.Color.Background} 80%
  );
  .container {
    display: inline-block;

    .gatsby-image-wrapper {
      border-radius: calc(${Root.Size} / 8);
      display: inline-block;
      position: relative;
      left: 0%;
      width: 20vw;
      max-width: calc(${Root.Size} * 5);
      min-width: calc(${Root.Size} * 2);
      height: 27vw;
      max-height: calc(${Root.Size} * 7);
      min-width: calc(${Root.Size} * 2.75);
      margin: 0 calc(${Root.Size} / 8);
    }
  }
`;

// Render Page
const ProgramPage = () => {
  return (
    <Layout>
      <WhoSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        noPaddingBottom
        noPaddingTop
      >
        <Carousel>
          <div className="container">
            <ImgMatch src="intro-smiles.jpg" />
            <ImgMatch src="intro-smiles.jpg" />
            <ImgMatch src="intro-smiles.jpg" />
            <ImgMatch src="intro-smiles.jpg" />
            <ImgMatch src="intro-smiles.jpg" />
          </div>
        </Carousel>
      </WhoSection>
      <WhoSection
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        noPaddingBottom
      >
        <TopCarousel>
          <div className="text-block">
            <div className="headline txt-clr-clay">Play comes first.</div>
            <p className="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra enim sed magna vestibulum, nec imperdiet orci egestas. Sed
              in magna sapien.
            </p>
          </div>
          <FooterCurveSlice bgColor={Theme.Color.Black} />
          <FooterAngleSlice />
          <div className="clouds">
            <ImgMatch src="clouds.png" />
          </div>
        </TopCarousel>
      </WhoSection>
      <WhoSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
        <CenteredTitle>
          <div className="headline">Our Story</div>
        </CenteredTitle>
        <WhoSection.Inner noPaddingRight>
          <ImageWithText>
            <Icon Name="swoop" />
            <div className="text">
              <div className="h6">Tremendous learning mediums</div>
              <div className="h2 txt-clr-sunset">Inspiring Play Since 1997</div>
              <p className="p-lg">
                Play-Well TEKnologies was founded by Tim Bowen in 1997.
                Introduced to the LEGO® building system in 1996 and recognizing
                it to be both a popular play medium and a tremendous learning
                medium, Tim began to develop projects which drew on his
                professional experience and combined the elements of fun,
                challenge, and learning.
              </p>
            </div>
            <div className="image">
              <ImgMatch
                objectFit="contain"
                objectPosition="100% 50%"
                src="gears.png"
              />
            </div>
          </ImageWithText>
        </WhoSection.Inner>
      </WhoSection>
      <WhoSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
        <WhoSection.Inner noPaddingLeft noPaddingRight>
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
        </WhoSection.Inner>
      </WhoSection>
      <WhoSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        BorderTop="true"
      >
        <WhoSection.Inner>
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
        </WhoSection.Inner>
      </WhoSection>
      <WhoSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        BorderTop="true"
      >
        <WhoSection.Inner>
          <Partners>
            <div className="h3">Our Partners</div>
            <div className="carousel">
              <div className="partner"><ImgMatch objectFit="contain" src="gears.png"/></div>
              <div className="partner"><ImgMatch objectFit="contain" src="gears.png"/></div>
              <div className="partner"><ImgMatch objectFit="contain" src="gears.png"/></div>
              <div className="partner"><ImgMatch objectFit="contain" src="gears.png"/></div>
            </div>
            <div className="h3 txt-clr-dino">
              Interested in Play-Well for your organization?
            </div>
            <Btn
              Label="Partnerships"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/partnerships"
            />
          </Partners>
        </WhoSection.Inner>
      </WhoSection>
      <WhoSection BgColor={Theme.Color.White} BorderTop="true">
        <WhoSection.Inner>
          <LogoList>
            <div className="item">
              <Icon Name="basicLego" Color="orange" />
              <div className="header">Creative Collaboration</div>
              <p>
                A greater sense of understanding and connection between your
                staff, as they will now know how others play, and in turn, how
                they best work.
              </p>
            </div>
            <div className="item">
              <Icon Name="basicLego" Color="purple" />
              <div className="header">New Perspectives</div>
              <p>
                A willingness to tackle problems from a play perspective,
                embracing failure as part of the process of finding the
                solution.
              </p>
            </div>
            <div className="item">
              <Icon Name="basicLego" Color="blue" />
              <div className="header">Staff Morale</div>
              <p>
                A rejuvenated staff who rediscovers what they find fun about
                their job and their organization.
              </p>
            </div>
          </LogoList>
        </WhoSection.Inner>
      </WhoSection>
    </Layout>
  );
};

export default ProgramPage;

//////////////////////////////////////////////////////////////////////
// End Component

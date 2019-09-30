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
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  padding: calc(${Root.Grid.Gutter.Top} * 4) 0
    calc(${Root.Grid.Gutter.Bottom} * 4) 0;
  ${props =>
    props.BorderTop ? 'border-top: 1px dotted' + Theme.Color.Clay + ';' : null};
`;

WhoSection.Inner = styled.div`
  margin: 0 auto;
  max-width: ${Root.Site.Width};
  padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left};

  ${props =>
    props.noPaddingLeft ? 'padding-left: 0;' : null};
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

  .h4 {
    font-weight: 700;
    &.txt-clr-dino {
      color: ${Theme.Color.Dino};
      max-width: calc(${Root.Size} * 6);
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
    }
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  .left {
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

        &:last-of-type {
          color: ${Theme.Color.Sunset};
        }
      }

      img {
        width: calc(${Root.Size} * 2);
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

  > .ico {
    position: absolute;
    bottom: calc(${Root.Size} * -1);
    right: calc(${Root.Size} * -1);
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

    .h3,
    .h6 {
      font-weight: 700;
    }

    .h3 {
      padding: calc(${Root.Size} / 6) 0;
    }
  }

  .image {
  }
`;

const ImageWithText = styled.div`
  display: flex;
  flex-direction: row;

    .text, .image {
        flex: 1;
    }

    .text {

        .h3,
        .h6 {
            font-weight: 700;

            &.txt-clr-sunset {
            color: ${Theme.Color.Sunset};
            }
        }

        .h3 {
            padding: calc(${Root.Size} / 6) 0;
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
      ></WhoSection>
      <WhoSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
        <WhoSection.Inner>
          <ImageWithText>
            <div className="text">
              <div className="h6">Tremendous learning mediums</div>
              <div className="h3 txt-clr-sunset">Inspiring Play Since 1997</div>
              <p>
                Play-Well TEKnologies was founded by Tim Bowen in 1997.
                Introduced to the LEGO® building system in 1996 and recognizing
                it to be both a popular play medium and a tremendous learning
                medium, Tim began to develop projects which drew on his
                professional experience and combined the elements of fun,
                challenge, and learning.
              </p>
            </div>
            <div className="image"></div>
          </ImageWithText>
        </WhoSection.Inner>
      </WhoSection>
      <WhoSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
        <WhoSection.Inner noPaddingLeft>
          <ImageWithTextCard>
            <Icon Name="gear" />
            <div className="image">
              <ImgMatch src="intro-smiles.jpg" />
            </div>
            <div className="text">
              <div className="h6">Constant Improvement</div>
              <div className="h3">From local to nationwide.</div>
              <p>
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
                <img src="/test" alt="test"></img>
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
                <img src="/test" alt="test"></img>
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
            <div className="h4">Our Partners</div>
            <div className="carousel">
              <div className="partner"></div>
              <div className="partner"></div>
              <div className="partner"></div>
              <div className="partner"></div>
            </div>
            <div className="h4 txt-clr-dino">
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

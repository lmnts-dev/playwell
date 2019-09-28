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

// Render Page
const ProgramPage = () => {
  return (
    <Layout>
      <WhoSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
      >
        <WhoSection.Inner></WhoSection.Inner>
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

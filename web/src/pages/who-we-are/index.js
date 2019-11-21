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
import Centered from 'components/library/Elements/CenteredTitle';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import Section from 'components/library/Elements/Section';
import Team from 'components/library/Elements/Team';
import ImgMatch from 'components/core/ImgMatch';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import LegoList from 'components/library/Section/LegoList';
import ImageWithTextCard from 'components/library/Section/ImageWithTextCard';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
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
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const ThemeProps = {
  BgColor: Theme.Color.Cream,
  PrimaryColor: Theme.Color.Eggplant,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Primary,
};

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////

const Partners = styled.div`
  text-align: center;

  .slick-slider {
    padding-bottom: ${Root.Size};
    padding-top: calc(${Root.Size} / 2);
  }

  .btn-inner {
    margin-top: calc(${Root.Size} / 3);
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
    text-align: center;
  }

  .left {
    padding-right: calc(${Root.Size} * 1.5);
    padding-top: calc(${Root.Size} * 1.5);
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding-top: ${Root.Size};
    }

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: 0;
    }
    .h3 {
      font-weight: 700;
      padding-bottom: calc(${Root.Size} / 4);
      white-space: nowrap;
    }
  }

  .left ~ div {
    flex: 100;
  }
`;

const ClayTextBlock = styled.div`
  position: relative;
  overflow: hidden;

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
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: calc(${Root.Size} / 6) calc(${Root.Size}) 0 calc(${Root.Size});
      }
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        padding: calc(${Root.Size} / 6) calc(${Root.Size} / 4) 0
          calc(${Root.Size} / 4);
      }
    }
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

const CenteredTitle = styled(Centered)`
  &.our-story {
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-bottom: calc(${Theme.Base.Size.Lg} / 2);
    }
  }
`;

const OverflowHidden = styled.div`
  width: 100%;
  overflow: hidden;
`;

// Render Page
const WhoPage = ({ SliderSettings }) => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero
        {...HeroProps}
        subNav={[
          { label: 'who', active: true, link: '/who-we-are/who' },
          { label: 'why', link: '/who-we-are/why' },
          { label: 'how', link: '/who-we-are/how' },
          { label: 'careers', link: '/who-we-are/careers' },
        ]}
      >
        <h2>Passionate industry leaders in STEM Education since 1997</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur a.</h6>
      </SplitHero>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        noPaddingBottom
        noPaddingTop
        noInner
      >
        <Marquee
          images={[
            'random-1.jpg',
            'random-2.jpg',
            'random-3.jpg',
            'random-4.jpg',
            'random-5.jpg',
            'random-6.jpg',
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
        <ClayTextBlock>
          <div className="text-block">
            <div className="headline txt-clr-clay">Play comes first.</div>
            <p className="h3">
              "Play is the highest form of research". - Albert Einstein Through
              playing with LEGO® materials, we inspire children to solve
              problems, we spark their curiosity and we facilitate deep
              learning.
            </p>
          </div>
        </ClayTextBlock>
      </BasicSection>

      <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Nova}>
        <CurveAndAngle
          CurveColor={Theme.Color.Clay}
          AngleColor={Theme.Color.Background}
          Clouds="2"
        />
      </BasicSection>

      <OverflowHidden>
        <BasicSection
          noPaddingRight
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Dino}
        >
          <BasicInner>
            <CenteredTitle
              className="our-story"
              Class="headline"
              Title="Our Story"
            />
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
      </OverflowHidden>

      <OverflowHidden>
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Dino}
        >
          <BasicInner wideWidth noPaddingLeft>
            <ImageWithTextCard
              Image="girl-4.png"
              Caption="Constant Improvement"
              Header="From local to nationwide."
              Paragraph="Tim began operating a summer camp program in 1997, followed by
                  after school enrichment classes in 1998. With steady growth of
                  the company, project development is now undertaken by a staff of
                  instructors bent on constantly improving the programs."
              ButtonText="Our Values"
              ButtonDest="/"
            >
              <Icon Name="gear" />
            </ImageWithTextCard>
          </BasicInner>
        </BasicSection>
      </OverflowHidden>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        BorderTop={Theme.Color.Clay}
      >
        <BasicInner wideWidth>
          <TeamSection>
            <div className="left">
              <div className="h3 txt-clr-dino">Our Team</div>
              <Btn
                Label="Join Our Team"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
                Destination="/"
              />
            </div>
            <Team />
          </TeamSection>
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
        BorderTop={Theme.Color.Clay}
      >
        <Partners>
          <BasicInner>
            <CenteredTitle
              Title="Our Partners"
              Class="h3"
              TextColor={Theme.Color.Sunset}
            />
          </BasicInner>
          <Marquee
            images={[
              'google.png',
              'clorox.png',
              'pixar.jpeg',
              'microsoft.png',
              'visa.png',
            ]}
            SquareFormat
          />
          <BasicInner>
            <CenteredTitle
              Title="Interested in Play-Well for your organization?"
              Class="h3"
              TextColor={Theme.Color.Dino}
              MaxWidth="600px"
            />
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

      <Section bg={ThemeProps.BgColor} pb={0}>
        <SplitLinks>
          <SplitLink
            title="Looking to join our team?"
            message="Check out our Jobs &amp; Careers page."
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/who-we-are/careers"
            themeProps={ThemeProps}
            first
          />
          <SplitLink
            title="Keep reading."
            message="Learn about Our Values &amp; why we do what we do."
            to="/who-we-are/why"
            themeProps={ThemeProps}
            last
          />
        </SplitLinks>
      </Section>
    </Layout>
  );
};

export default WhoPage;

//////////////////////////////////////////////////////////////////////
// End Component

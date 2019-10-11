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
import CenteredTitle from 'components/library/Elements/CenteredTitle';
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
    padding-right: calc(${Root.Size});
    padding-top: calc(${Root.Size} * 1.5);
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: 0;
    }
    .h3 {
      font-weight: 700;
      padding-bottom: calc(${Root.Size} / 4);
      white-space: nowrap;
    }
  }
`;

const ClayTextBlock = styled.div`
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
        <ClayTextBlock>
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
        </ClayTextBlock>
      </BasicSection>

      <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Nova}>
        <CurveAndAngle
          CurveColor={Theme.Color.Clay}
          AngleColor={Theme.Color.Background}
          Clouds="2"
        />
      </BasicSection>

      <BasicSection
        noPaddingRight
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <CenteredTitle Class="headline" Title="Our Story" />
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
          <ImageWithTextCard
            Image="intro-smiles.jpg"
            Caption="Constant Improvement"
            Header="From local to nationwide."
            Paragraph="He began operating a summer camp program in 1997, followed by
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
            <Team
              members={[
                {
                  name: 'Alisha',
                  image: 'intro-smiles.jpg',
                  title: 'employee',
                  socialIcon1: 'facebook',
                  socialLink1: '/',
                },
                { name: 'Binh', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Kylie', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Matt', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Pete', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Meeko', image: 'intro-smiles.jpg', title: 'employee' },
                {
                  name: 'Laxalt',
                  image: 'intro-smiles.jpg',
                  title: 'employee',
                },
                {
                  name: 'McIver',
                  image: 'intro-smiles.jpg',
                  title: 'employee',
                },
                { name: 'Bob', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Ted', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Joe', image: 'intro-smiles.jpg', title: 'employee' },
                { name: 'Tim', image: 'intro-smiles.jpg', title: 'employee' },
              ]}
            />
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

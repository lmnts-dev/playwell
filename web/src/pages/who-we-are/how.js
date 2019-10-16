// How.js:
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
import ImageAccordian from 'components/library/ImageAccordian';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import ImgMatch from 'components/core/ImgMatch';
import ImageWithTextBlock from 'components/library/Section/ImageWithTextBlock';
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';
import EdgeSlider from 'components/library/Section/EdgeSlider';
import Marquee from 'components/library/Section/Marquee';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
import SplitTextBoxes from 'components/library/Section/SplitTextBoxes';
import LegoList from 'components/library/Section/LegoList';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import SplitHero from 'components/library/Hero/SplitHero';
import { Box, Flex } from 'components/library/Elements';
import SubNav from 'components/library/SubNav';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Props
const ThemeProps = {
  BgColor: Theme.Color.Cream,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: Theme.Color.Lilac,
  color: Theme.Color.White,
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButtonBg: Theme.Color.Nova,
  gear: true,
  textAlign: 'left',
  withMask: false,
  heroHeight: 'auto',
};

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleTextWithImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .image,
  .text {
    flex: 1;
  }

  .image {
    padding-left: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      max-width: calc(${Root.Size} * 13);
      padding-left: 0;
      margin: 0 auto;
      width: 40%;
      min-width: calc(${Root.Size} * 6);
      padding-top: calc(${Theme.Base.Size.Lg} / 2);
    }
  }

  .text {
    padding-right: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-right: 0;
    }

    > * {
      max-width: calc(${Root.Size} * 7.5);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        max-width: calc(${Root.Size} * 13);
        text-align: center;
        margin: 0 auto;
      }
    }
  }

  .h6,
  .h2 {
    font-weight: 700;
  }

  .h2 {
    color: ${Theme.Color.Sunset};
    padding: calc(${Root.Size} / 5) 0;
  }
`;

const AccordianFeature = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: calc(${Root.Size} / 3);
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      display: block;
      text-align: center;
    }

    li {
      font-weight: 700;
      padding: calc(${Root.Size} / 6);
      white-space: nowrap;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        padding: calc(${Root.Size} / 6) 0;
      }

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      a {
        color: ${Theme.Color.Clay};
        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          font-size: 1rem;
        }

        &:visited {
          color: ${Theme.Color.Clay};
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: block;
    }

    .image-accordian {
      flex: 1;

      &:nth-of-type(2) {
        margin: 0 calc(${Root.Size} / 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          margin: calc(${Root.Size} / 4) 0;
        }
      }
    }
  }

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vw;
  }
`;

const OverflowHidden = styled.div`
  width: 100vw;
  overflow: hidden;
`


// Render Page
const WhoHowPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero {...HeroProps}>
        <h2>Join a team of creative problem solvers &amp; creators</h2>
        <h6>We are passionate specialists in STEM Education.</h6>
      </SplitHero>
      <Box css={{ position: 'relative', height: 0 }}>
        <SubNav />
      </Box>

      <BasicSection
        BgColor={Theme.Color.Lilac}
        TextColor={Theme.Color.White}
        BorderTop={Theme.Color.White}
      >
        <BasicInner>
          <CenteredTitle
            MaxWidth="500px"
            Title="Lorem ipsum dolar sit amet, consectetur a."
            Class="h3"
            TextColor={Theme.Color.White}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Lilac}
        TextColor={Theme.Color.White}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner>
          <LegoList
            blocks={[
              {
                title: 'Creative Collaboration',
                text: 'A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best.',
                legoColor: 'orange',
              },
              {
                title: 'New Perspectives',
                text: 'A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution.',
                legoColor: 'purple',
              },
              {
                title: 'Staff Morale',
                text: 'A rejuvenated staff who rediscovers what they find fun about their job and their organization.',
                legoColor: 'blue',
              },
            ]}
          />
        </BasicInner>
      </BasicSection>
      <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Lilac}>
        <CurveAndAngle
          CurveColor={Theme.Color.Dino}
          AngleColor={Theme.Color.Background}
          AbsoluteImages={[{ src:"gears.png", width:"25vw", right:"2vw", bottom:"0" }]}
        />
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <SimpleTextWithImage>
            <div className="text">
              <div className="h6">Our Impact on STEM Comprehension</div>
              <div className="h2">Children Learn While Playing</div>
              <p className="p-lg">
                Our assessment measured three goals including: students
                knowledge of STEM terms or concepts, ability to generalize
                information, and increasing positive feelings towards STEM
                subjects. For example, the definition of gravity or friction, or
                that when two gears interlock their teeth its called meshing.
              </p>
            </div>
            <div className="image">
              <ImgMatch src="graph.png" />
            </div>
          </SimpleTextWithImage>
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Blush} TextColor={Theme.Color.Nova}>
        <BasicInner>
          <CenteredTitle
            Title="Our Programs"
            Class="headline"
            TextColor={Theme.Color.Nova}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Clay}
        noPaddingTop
      >
        <AccordianFeature>
          <BasicInner wideWidth>
            <ul>
              <li>
                <a className="h6" href="/">
                  Robotics
                </a>
              </li>
              <li>
                <a className="h6" href="/">
                  Intro to STEM
                </a>
              </li>
              <li>
                <a className="h6" href="/">
                  Gaming
                </a>
              </li>
              <li>
                <a className="h6" href="/">
                  Advanced Engineering
                </a>
              </li>
              <li>
                <a className="h6" href="/">
                  Engineering Themes
                </a>
              </li>
            </ul>
            <div className="container">
              <ImageAccordian
                Header="Worshops"
                Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                Image="intro-smiles.jpg"
              />
              <ImageAccordian
                Header="Classes"
                Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                Image="intro-smiles.jpg"
              />
              <ImageAccordian
                Header="Camps"
                Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                Image="intro-smiles.jpg"
              />
            </div>
          </BasicInner>
          <FooterAngleSlice bgColor={Theme.Color.Background} />
        </AccordianFeature>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Blush}
        noPaddingTop
      >
        <BasicInner>
          <CenteredTitle Title="Our Process" Class="headline" />
        </BasicInner>
      </BasicSection>

      <OverflowHidden>
        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
          noPaddingTop
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

      <BasicSection
        BgColor={Theme.Color.Background}
        BorderTop={Theme.Color.Clay}
        noPaddingTop
      />

      <BasicSection
        BgColor={Theme.Color.Background}
        BgLinear={Theme.Color.White}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner noPaddingRight>
          <EdgeSlider
            images={[
              'intro-smiles.jpg',
              'intro-smiles.jpg',
              'intro-smiles.jpg',
              'intro-smiles.jpg',
              'intro-smiles.jpg',
            ]}
            titles={[
              'Intro Into STEM',
              'Robotics',
              'Engineering',
              'Gaming',
              'Building',
            ]}
            caption="It's not always one size fits all"
            title="Our Curriculums"
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <LegoList
            blocks={[
              {
                title: 'Creative Collaboration',
                text:
                  'A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best.',
                legoColor: 'orange',
                image: 'graph.png',
              },
              {
                title: 'New Perspectives',
                text:
                  'A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution.',
                legoColor: 'purple',
                image: 'graph.png',
              },
              {
                title: 'Staff Morale',
                text:
                  'A rejuvenated staff who rediscovers what they find fun about their job and their organization.',
                legoColor: 'blue',
                image: 'graph.png',
              },
            ]}
          />
        </BasicInner>
      </BasicSection>

      <OverflowHidden>
        <BasicSection
          noPaddingRight
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Dino}
          noPaddingBottom
        >
          <BasicInner noPaddingRight>
            <EdgeImageWithText
              Caption="Would you like to Play with us?"
              Header="Purposeful Play is for Adults too"
              Image="gears.png"
              Paragraph="Partnering with Play-Well for your company could bring new waves of innovation and problem solving to your team an opportunity to bring educational activities to your event, or any way you need to play."
              ButtonText="Get In Touch"
              ButtonDest="/"
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
        </BasicSection>
      </OverflowHidden>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
      >
        <SplitTextBoxes
          FirstBlock={ {caption:"Playing anywhere", header:"Find a program near you", buttonDest:"/", buttonText:"Expore Programs", paragraph:"Our assessments measured three goals including: students's knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feeling towards STEM subjects."}}
          SecondBlock={ {caption:"Do it Yourself", header:"Host Your Own Program", buttonDest:"/", buttonText:"Learn How", paragraph:"Our assessments measured three goals including: students's knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feeling towards STEM subjects."}}
        />
      </BasicSection>
    </Layout>
  );
};

export default WhoHowPage;

//////////////////////////////////////////////////////////////////////
// End Component

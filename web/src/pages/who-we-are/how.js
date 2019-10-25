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
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import ImageWithTextBlock from 'components/library/Section/ImageWithTextBlock';
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';
import EdgeSlider from 'components/library/Section/EdgeSlider';
import Marquee from 'components/library/Section/Marquee';
import ImageAccordianFeature from 'components/library/Section/ImageAccordianFeature';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
import SplitTextBoxes from 'components/library/Section/SplitTextBoxes';
import LegoList from 'components/library/Section/LegoList';
import SimpleTextWithImage from 'components/library/Section/SimpleTextWithImage';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import SplitHero from 'components/library/Hero/SplitHero';

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
  playButton: true,
  playButtonBg: Theme.Color.Nova,
  gear: true,
  gearStroke: Theme.Color.White,
  subNavColor: Theme.Color.White,
  arrowColor: Theme.Color.White,
};

// Begin Component
//////////////////////////////////////////////////////////////////////



const OverflowHidden = styled.div`
  width: 100vw;
  overflow: hidden;
`


// Render Page
const WhoHowPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero
        {...HeroProps}
        subNav={[
          { label: 'who', link: '/who-we-are/who' },
          { label: 'why', link: '/who-we-are/why' },
          { label: 'how', active: true, link: '/who-we-are/how' },
          { label: 'careers', link: '/who-we-are/careers' },
        ]}
      >
        <h2>How STEM Enrichment p aves the way for our beliefs</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur a.</h6>
      </SplitHero>

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
      <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Lilac}>
        <CurveAndAngle
          CurveColor={Theme.Color.Dino}
          AngleColor={Theme.Color.Background}
          AbsoluteImages={[
            { src: 'gears.png', width: '25vw', right: '2vw', bottom: '0' },
          ]}
        />
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <SimpleTextWithImage
            Caption="Our Impact on STEM Comprehension"
            Header="Children Learn While Playing"
            Paragraph="Our assessment measured three goals including: students
            knowledge of STEM terms or concepts, ability to generalize
            information, and increasing positive feelings towards STEM
            subjects. For example, the definition of gravity or friction, or
            that when two gears interlock their teeth its called meshing."
            Image="graph.png"
          />
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
        <ImageAccordianFeature
          Links={[
            { link: '/', label: 'Robotics' },
            { link: '/', label: 'Intro to STEM' },
            { link: '/', label: 'Gaming' },
            { link: '/', label: 'Advanced Engineering' },
            { link: '/', label: 'Engineering Themes' },
          ]}
          Accordians={[
            {
              header: 'Worshops',
              paragraph:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              image: 'girl-3.jpg',
            },
            {
              header: 'Classes',
              paragraph:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              image: 'girl-2.jpg',
            },
            {
              header: 'Camps',
              paragraph:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              image: 'girl-1.jpg',
            },
          ]}
        />
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
              Image="boy-2.jpg"
              Header="Build problem-solving skills"
              Number="01"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                egestas. Sed in magna sapien."
            />
            <ImageWithTextBlock
              reversedOrder
              Image="boy-1.jpg"
              Header="Provide an opportunity for creative expression"
              Number="06"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla viverra enim sed magna vestibulum, nec imperdiet orci
                egestas. Sed in magna sapien."
            >
              <Icon Name="gear" />
            </ImageWithTextBlock>
            <ImageWithTextBlock
              Image="girls-1.jpg"
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
              'random-1.jpg',
              'random-2.jpg',
              'random-3.jpg',
              'random-4.jpg',
              'random-5.jpg',
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
                title: 'Benefit Two',
                text:
                  'Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics.',
                image: 'graph.png',
              },
              {
                title: 'Benefit Two',
                text:
                  'Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics.',
                image: 'graph.png',
              },
              {
                title: 'Benefit Two',
                text:
                  'Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics.',
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
              'google.png',
              'clorox.png',
              'pixar.jpeg',
              'microsoft.png',
              'visa.png',
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
          FirstBlock={{
            caption: 'Playing anywhere',
            header: 'Find a program near you',
            buttonDest: '/',
            buttonText: 'Expore Programs',
            paragraph:
              "Our assessments measured three goals including: students's knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feeling towards STEM subjects.",
          }}
          SecondBlock={{
            caption: 'Do it Yourself',
            header: 'Host Your Own Program',
            buttonDest: '/',
            buttonText: 'Learn How',
            paragraph:
              "Our assessments measured three goals including: students's knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feeling towards STEM subjects.",
          }}
        />
      </BasicSection>
    </Layout>
  );
};

export default WhoHowPage;

//////////////////////////////////////////////////////////////////////
// End Component

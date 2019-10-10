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
import TextWithManyImages from 'components/library/Section/TextWithManyImages';
import Team from 'components/library/Elements/Team';
import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import GiantTextBlock from 'components/library/Section/GiantTextBlock';
import LegoList from 'components/library/Section/LegoList';
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

      <BasicSection
        BgColor={Theme.Color.Background}
        noPaddingTop
        noPaddingBottom
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
          SquareFormat
        />
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background}>
        <BasicInner>
          <CenteredTitle
            Title="Our Team"
            Class="headline"
            TextColor={Theme.Color.Blush}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} noPaddingTop>
        <BasicInner>
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
              { name: 'Laxalt', image: 'intro-smiles.jpg', title: 'employee' },
              { name: 'McIver', image: 'intro-smiles.jpg', title: 'employee' },
              { name: 'Bob', image: 'intro-smiles.jpg', title: 'employee' },
              { name: 'Ted', image: 'intro-smiles.jpg', title: 'employee' },
              { name: 'Joe', image: 'intro-smiles.jpg', title: 'employee' },
              { name: 'Tim', image: 'intro-smiles.jpg', title: 'employee' },
            ]}
            Justify="center"
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Eggplant}
      >
        <BasicInner>
          <CenteredTitle
            Title="Testimonials"
            Class="h2"
            TextColor={Theme.Color.Eggplant}
          />
          <CenterSlider
            testimonials={[
              {
                name: 'Alisha',
                quote:
                  'I like Play-Well’s core belief in personal authenticity. There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Binh',
                quote:
                  'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Kylie',
                quote:
                  'Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Matt',
                quote:
                  'I like Play-Well’s core belief in personal authenticity. There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'intro-smiles.jpg',
              },
              {
                name: 'Pete',
                quote:
                  'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
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
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner noPaddingRight>
          <TextWithManyImages
            Text="We do this in the context of fun-filled engineering and
              architectural projects, activities that both the children and the
              instructors enjoy."
            Images={[ "intro-smiles.jpg", "intro-smiles.jpg", "intro-smiles.jpg" ]}
          />
        </BasicInner>
      </BasicSection>
    </Layout>
  );
};

export default WhoWhyPage;

//////////////////////////////////////////////////////////////////////
// End Component

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
import Section from 'components/library/Elements/Section';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import Marquee from 'components/library/Section/Marquee';
import TeamMarquee from 'components/library/Section/TeamMarquee';
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
  bg: Theme.Color.Sky,
  color: Theme.Color.White,
  playButton: true,
  gear: true,
  gearFill: Theme.Color.Dino,
  subNavColor: Theme.Color.White,
  arrowColor: Theme.Color.Nova,
};

const ThemeProps = {
  BgColor: Theme.Color.Sky,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const WhoCareersPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero
        {...HeroProps}
        subNav={[
          { label: 'who', link: '/who-we-are/who' },
          { label: 'why', link: '/who-we-are/why' },
          { label: 'how', link: '/who-we-are/how' },
          { label: 'careers', active: true, link: '/who-we-are/careers' },
        ]}
      >
        <h2>Join a Team of creative problem solvers &amp; creators</h2>
        <h6>We are passionate specialists in STEM Education.</h6>
        <Btn
          Label="View Listings"
          BgColor={Theme.Color.Dino}
          TextColor={Theme.Color.White}
          Destination="https://playwell.workbrightats.com/jobmap/"
          External
        />
      </SplitHero>

      <BasicSection
        BgColor={Theme.Color.Background}
        noPaddingTop
        noPaddingBottom
      >
        <TeamMarquee BgLinear={Theme.Color.Sky} />
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} noPaddingTop>
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
          <Team />
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
                image: 'random-1.jpg',
              },
              {
                name: 'Binh',
                quote:
                  'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'random-2.jpg',
              },
              {
                name: 'Kylie',
                quote:
                  'Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'random-3.jpg',
              },
              {
                name: 'Matt',
                quote:
                  'I like Play-Well’s core belief in personal authenticity. There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'random-4.jpg',
              },
              {
                name: 'Pete',
                quote:
                  'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'random-5.jpg',
              },
              {
                name: 'Meeko',
                quote:
                  'There is a serious nature to education that can be overwhelming sometimes, causing students to lose track of their childhood and their ability to truly play. Opportunities for unstructured play are being taken away at an alarming rate, so it’s nice to see companies like Play-Well redirect their focus to this critical component of learning and development. I appreciate Tim Bowen’s assertion that working for a good company results in amazing experiences for students. This philosophy leads to successful organizations with each member truly giving their all and their best. I want to be part of such an organization.',
                title: 'Recent Applicant',
                image: 'random-6.jpg',
              },
            ]}
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Sunset}
      >
        <BasicInner wideWidth>
          <GiantTextBlock
            headerText="Core Values"
            topText="We believe in a culture of"
            giantText="Inquisitiveness Self Reliance &amp; Self Confidence"
            bottomText="in children &amp; in everybody."
            buttonText="View Listings"
            buttonDest="https://playwell.workbrightats.com/jobmap/"
            External
          />
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Background} noPaddingTop>
        <Marquee
          images={[
            'random-1.jpg',
            'random-2.jpg',
            'random-3.jpg',
            'random-4.jpg',
            'random-5.jpg',
            'random-6.jpg',
          ]}
          Shadow
        />
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
        <TextWithManyImages
          Text="We do this in the context of fun-filled engineering and
            architectural projects, activities that both the children and the
            instructors enjoy."
          Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
        />
      </BasicSection>

      <Section bg={ThemeProps.BgColor} pb={0}>
        <SplitLinks>
          <SplitLink
            title="Keep reading."
            message="Learn about Our Values &amp; why we do what we do."
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/who-we-are/why"
            themeProps={ThemeProps}
            first
          />
          <SplitLink
            title="Here ye, here ye."
            message="Check out our after school enrichment page."
            to="/team-building/after-school-enrichment"
            themeProps={ThemeProps}
            last
          />
        </SplitLinks>
      </Section>
    </Layout>
  );
};

export default WhoCareersPage;

//////////////////////////////////////////////////////////////////////
// End Component

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
import { Box, Flex, Text } from 'components/library/Elements';
import Block from 'components/library/Block';
import Section from 'components/library/Elements/Section';
import SplitSection from 'components/library/Section/SplitSection';
import Marquee from 'components/library/Section/Marquee';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';
import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import SplitHero from 'components/library/Hero/SplitHero';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Props
const HeroProps = {
  bg: Theme.Color.White,
  bgMatch: 'kids-lake.jpg',
  color: Theme.Color.Primary,
  playButton: true,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  wideImage: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const ThemeProps = {
  BgColor: Theme.Color.White,
  PrimaryColor: Theme.Color.Eggplant,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Eggplant,
};

const OverflowHidden = styled.div`
  width: 100vw;
  overflow: hidden;
`;

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const SportsTeamsPage = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero
        {...HeroProps}
        subNav={[
          { label: 'team building', link: '/team-building' },
          { label: 'organizations', link: '/team-building/organizations' },
          {
            label: 'sports teams',
            active: true,
            link: '/team-building/sports-teams',
          },
          { label: 'non-profits', link: '/team-building/non-profits' },
        ]}
      >
        <h2>New ways of playing for Sports Teams</h2>
        <h6 className="txt-clr-dino">
          We believe that play reveals who you are, and who you are inspires
          your work.
        </h6>
        <Btn
          Label="Get in Touch"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination="/contact"
          Size="large"
        />
      </SplitHero>

      <BasicSection
        BgColor={Theme.Color.Background}
        BorderTop={Theme.Color.Clay}
      >
        <BasicInner>
          <CenteredTitle
            Title="Those Who've Played Well with Us"
            Class="h2"
            TextColor={Theme.Color.Eggplant}
            MaxWidth="500px"
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

      <SplitSection Flex="row">
        <Block
          Padding={[2, 2, 2, 2]}
          Width={0.5}
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
        >
          <Text as="h6" color="Galaxy">
            Establishing a culture of play
          </Text>
          <Text as="h2" color="Sunset">
            Solve Problems and Explore
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
            There was a time when our play was our work. Remember when you were
            a kid, and your imagination had no limits? Through play, you
            expressed your creativity, solved problems, and explored the world.
          </Text>
          <Text as="p" className="p-lg" color="Galaxy">
            We believe that establishing a culture of play helps create that
            environment. In our experience, organizations that play well create
            the conditions for exploration, unconventional thinking, and
            innovation. That culture of play allows for big risks and also
            failure, as resiliency is a crucial part of the journey towards
            success.
          </Text>
        </Block>
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="culture.jpg"
          BgAlt="Our Awesome Alt Tag"
          Width={0.5}
          JustifyContent="center"
        />
      </SplitSection>

      <OverflowHidden>
        <BasicSection
          noPaddingRight
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Dino}
          BorderTop={Theme.Color.Nova}
        >
          <Marquee
            images={[
              'google.png',
              'clorox.png',
              'pixar.jpeg',
              'microsoft.png',
              'visa.png',
            ]}
            SquareFormat
            Shadow
          />
        </BasicSection>
      </OverflowHidden>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
        BorderTop
      >
        <TextWithManyImages
          Reversed
          Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
          Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
        />
      </BasicSection>

      <Section bg={ThemeProps.BgColor} pb={0}>
        <SplitLinks>
          <SplitLink
            title="Here ye, here ye."
            message="Learn about Our Story &amp; where it all began."
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to="/who-we-are"
            themeProps={ThemeProps}
            first
          />
          <SplitLink
            title="Want to throw a Play-Well birthday?"
            message="Learn about our birthday parties"
            // message={'Keep exploring programs in ' + countyStateString + '.'}
            to={'/parties/birthday-parties'}
            themeProps={ThemeProps}
            last
          />
        </SplitLinks>
      </Section>
    </Layout>
  );
};

export default SportsTeamsPage;

//////////////////////////////////////////////////////////////////////
// End Component

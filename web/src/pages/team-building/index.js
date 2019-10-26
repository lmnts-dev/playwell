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
import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
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
  color: Theme.Color.Primary,
  playButton: true,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
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

// Render Page
const TeamBuilding = () => {
  return (
    <Layout {...ThemeProps}>
      <SplitHero
        {...HeroProps}
        subNav={[
          { label: 'team building', active: true, link: '/team-building' },
          { label: 'organizations', link: '/team-building/organizations' },
          { label: 'sports teams', link: '/team-building/sports-teams' },
          { label: 'non-profits', link: '/team-building/non-profits' },
        ]}
      >
        <h2>Teams Come Together by Playing Well</h2>
        <h6 className="txt-clr-dino">
          We believe that play reveals who you are, and who you are inspires
          your work.
        </h6>
        <Btn
          Label="Request Team Building Info"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
        />
      </SplitHero>

      <BasicSection
        BgColor={Theme.Color.Background}
        BorderTop={Theme.Color.Clay}
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
    </Layout>
  );
};

export default TeamBuilding;

//////////////////////////////////////////////////////////////////////
// End Component

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
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import Marquee from 'components/library/Section/Marquee';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import ImgMatch from 'components/core/ImgMatch';
import LegoList from 'components/library/Section/LegoList';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import TeamBuildingHero from 'sections/TeamBuildingHero';
import TeamBuildingCulture from 'sections/TeamBuildingCulture';
import TeamBuildingSplitLinks from 'sections/TeamBuildingSplitLinks';
import AfterSchoolContact from 'sections/AfterSchoolContact';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Props
const HeroProps = {
  bg: Theme.Color.White,
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const ThemeProps = {
  BgColor: Theme.Color.Ocean,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////

export const AbsoluteDecor = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 0 !important;
  padding-top: 100%;
  bottom: 0;
  left: 0;
  pointer-events: none;
  max-width: ${Root.Site.Width};
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    padding-top: ${Root.Site.Width};
    margin: 0 calc(50vw - calc(${Root.Site.Width} / 2));
  }

  .decor-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: auto;
    

    .ico {
      width: 100%;
      height: auto;
    }


    &.absolute-sailboat {
      width: 45%;
      left: auto;
      right: -12%;
      bottom: 3%;
    }
  }
`;

export const OverflowHidden = styled.div`
  overflow: hidden;
`;

// Render Page
const TeamBuilding = () => {
  return (
    <Layout {...ThemeProps}>
      <OverflowHidden>
        <TeamBuildingHero />

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

        <TeamBuildingCulture />

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
          BorderTop={Theme.Color.Clay}
        >
          <BasicInner>
            <CenteredTitle
              Title={null}
              Class="h3"
              TextColor={Theme.Color.Sunset}
            />
          </BasicInner>
          <Marquee
            images={[
              'visa.png',
              'microsoft.png',
              'clorox.png',
              'google.png',
              'pixar.jpeg',
            ]}
            SquareFormat
            Shadow
          />
        </BasicSection>

        <BasicSection
          noPaddingBottom
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Eggplant}
        >
          <BasicInner>
            <CenteredTitle Title="Well Supplied Fun" Class="headline" />
            <Box textAlign="center" width={'90%'} m={'0 auto'}>
              <h3>
                We bring tens of thousands of pieces of LEGO&reg;, a customized
                organizational play challenge that fits your organization's
                goals, and experienced organizational play facilitators who are
                all about play.
              </h3>
              <Text as="p" className="h3" fontWeight={600}>
                You bring the people. Together, we solve problems through play.
              </Text>
            </Box>
          </BasicInner>
          <CurveAndAngle
            AngleColor={Theme.Color.White}
            CurveColor={Theme.Color.Ocean}
          >
            <AbsoluteDecor>
              <div className="decor-container absolute-sailboat">
                <ImgMatch src="sailboat.png" />
              </div>
            </AbsoluteDecor>
          </CurveAndAngle>
        </BasicSection>
      </OverflowHidden>

      <BasicSection
        noPaddingTop
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <CenteredTitle Title="The Outcome" Class="headline" />
          <Box pt={Root.Size}>
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
          </Box>
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
        <TextWithManyImages
          Reversed
          Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
          Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
        />
      </BasicSection>

      <TeamBuildingSplitLinks themeProps={ThemeProps} />
    </Layout>
  );
};

export default TeamBuilding;

//////////////////////////////////////////////////////////////////////
// End Component

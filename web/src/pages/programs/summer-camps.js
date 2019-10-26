// Summer Camps page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

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
import SummerCampsHero from 'sections/SummerCampsHero';
import SummerCampsCulture from 'sections/SummerCampsCulture';
import SummerCampsSplitLinks from 'sections/SummerCampsSplitLinks';
import AfterSchoolContact from 'sections/AfterSchoolContact';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Styled
const Main = styled.main`
  overflow: hidden;
`;

// Props
const ThemeProps = {
  BgColor: Theme.Color.Ocean,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

// Render Page
const SummerCampsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <SummerCampsHero />

        <BasicSection
          BgColor={Theme.Color.Background}
          BorderTop={Theme.Color.Clay}
        >
          <BasicInner>
            <CenteredTitle
              Title="Testimonials"
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

        <SummerCampsCulture />

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
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
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Primary}
        >
          <BasicInner>
            <CenteredTitle Title="Well Supplied Fun" Class="headline" />
            <Box textAlign="center" width={'80%'} m={'0 auto'}>
              <h3>
                We bring tens of thousands of pieces of LEGO&reg;, a customized
                organizational play challenge that fits your organization's
                goals, and experienced organizational play facilitators who are
                all about play.
              </h3>
              <h3>
                You bring the people. Together, we solve problems through play.
              </h3>
            </Box>
          </BasicInner>
        </BasicSection>

        <BasicSection
          noPaddingTop
          noPaddingBottom
          BgColor={Theme.Color.Background}
        >
          <CurveAndAngle>
            <FooterCurveSlice bgColor={Theme.Color.Ocean} />
            <FooterAngleSlice bgColor={Theme.Color.Background} />
            <div className="absolute-image">
              <ImgMatch src="sailboat.png" />
            </div>
          </CurveAndAngle>
        </BasicSection>

        <BasicSection BgColor={Theme.Color.White} TextColor={Theme.Color.Dino}>
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
          <BasicInner noPaddingRight>
            <TextWithManyImages
              Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
              Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
            />
          </BasicInner>
        </BasicSection>

        <SummerCampsSplitLinks themeProps={ThemeProps} />
        {/* <AfterSchoolContact /> */}
      </Main>
    </Layout>
  );
};

export default SummerCampsPage;

//////////////////////////////////////////////////////////////////////
// End Component

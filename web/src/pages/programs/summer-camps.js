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
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Sunset,
};

// Render Page
const SummerCampsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <SummerCampsHero />
        <SummerCampsCulture />

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

        <Section bg="Blush">
          <Text as="h6" color="Galaxy">
            Let's be Pen Pals
          </Text>
          <Text as="h2" color="Sunset">
            Join Our Newsletter
          </Text>
          <Text as="p" className="p-lg" color="Galaxy">
            — email input —
          </Text>
        </Section>

        <SummerCampsSplitLinks themeProps={ThemeProps} />
        {/* <AfterSchoolContact /> */}
      </Main>
    </Layout>
  );
};

export default SummerCampsPage;

//////////////////////////////////////////////////////////////////////
// End Component

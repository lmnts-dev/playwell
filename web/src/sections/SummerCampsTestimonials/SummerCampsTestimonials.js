// <SummerCampsTestimonials /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import CenterSlider from 'components/library/Section/CenterSlider';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import ImgMatch from 'components/core/ImgMatch';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Styles
// import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SummerCampsTestimonials = () => {
  return (
    <BasicSection BgColor={Theme.Color.White}>
      <BasicInner>
        <CenteredTitle
          Title="Testimonials"
          Class="h2"
          TextColor={Theme.Color.Eggplant}
          MaxWidth="500px"
        />
        <CenterSlider
          Color={Theme.Color.Primary}
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
  );
};

export default SummerCampsTestimonials;

//////////////////////////////////////////////////////////////////////
// End Component

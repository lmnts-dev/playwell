// LocationSplitSections.js:
// Location detail page split sections
// todo: clean up <components />, typography

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import SplitSection from 'components/library/Section/SplitSection';

// Elements
import Block from 'components/library/Block';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const LocationPrograms = () => (
  <>
    <SplitSection Flex="row">
      <Block
        Padding={[2, 2, 2, 2]}
        Width={0.5}
        BgColor={Theme.Color.Primary}
        TextColor={Theme.Color.White}
      >
        <Text as="span" fontSize={[1, 2, 2]} fontWeight={700} mb={1}>
          Playing anywhere
        </Text>
        <Text as="h2">Find a program near you</Text>{' '}
        <Text as="p" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
          Our assessments measured three goals including: student's knowledge of
          STEM terms or concepts, ability to generalize information, and
          increasing positve feeling towards STEM subjects.
        </Text>
        <Btn
          Label="Explore Programs"
          Destination="/programs"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
        />
      </Block>
      <Block
        Padding={[4, 2, 4, 2]}
        Width={0.5}
        BgColor={Theme.Color.Sunset}
        TextColor={Theme.Color.White}
      >
        <Text as="span" fontSize={[1, 2, 2]} fontWeight={700} mb={1}>
          Do it yourself
        </Text>
        <Text as="h2">Host Your Own Program</Text>{' '}
        <Text as="p" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
        <Btn
          Label="Learn How"
          Destination="/programs/host-a-program"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
        />
      </Block>
    </SplitSection>
  </>
);

export default LocationPrograms;

//////////////////////////////////////////////////////////////////////
// End Component

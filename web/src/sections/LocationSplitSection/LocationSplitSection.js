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
const LocationSplitSection = () => (
  <>
    <SplitSection Flex="row-reverse">
      <Block
        Padding={[1, 1, 1, 1]}
        Width={0.5}
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
      >
        <Text as="span" color="Galaxy" fontSize={[1, 2, 2]} fontWeight={700} mb={1}>
          Do it yourself
        </Text>
        <Text as="h2" color="Sunset">
          Host Your Own Program
        </Text>{' '}
        <Text as="p" color="Galaxy" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
        <Btn
          Label="View Our Menu"
          Destination="/menu"
          BgColor={Theme.Color.Primary}
          TextColor={Theme.Color.White}
        />
      </Block>
      <Block
        Style="centered"
        BgColor={Theme.Color.White}
        BgMatch="placeholder.jpeg"
        BgAlt="Our Awesome Alt Tag"
        Width={0.5}
      />
    </SplitSection>

    <SplitSection Flex="row">
      <Block
        Padding={[1, 1, 1, 1]}
        Width={0.5}
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
      >
        <Text as="span" color="Galaxy" fontSize={[1, 2, 2]} fontWeight={700} mb={1}>
          Playing since 1997
        </Text>
        <Text as="h2" color="Sunset">
          Creativity, confidence &amp; collaboration.
        </Text>{' '}
        <Text as="p" color="Galaxy" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
        <Btn
          Label="View Our Menu"
          Destination="/menu"
          BgColor={Theme.Color.Primary}
          TextColor={Theme.Color.White}
        />
      </Block>
      <Block
        Style="centered"
        BgColor={Theme.Color.White}
        BgMatch="placeholder.jpeg"
        BgAlt="Our Awesome Alt Tag"
        Width={0.5}
      />
    </SplitSection>
  </>
);

export default LocationSplitSection;

//////////////////////////////////////////////////////////////////////
// End Component
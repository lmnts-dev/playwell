// LocationSplitSections.js:
// Location detail page split sections
// todo: clean up, typography

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
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
    <SplitSection Flex="row">
      <Block
        Style="centered"
        BgColor={Theme.Color.White}
        BgMatch="do-it-yourself.jpg"
        BgAlt="Our Awesome Alt Tag"
        Width={0.5}
        JustifyContent="center"
      />
      <Block
        Padding={[2, 2, 2, 2]}
        Width={0.5}
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
      >
        <Text as="h6" color="Galaxy">
          Do it yourself
        </Text>
        <Text as="h2" color="Sunset">
          Host Your Own Program
        </Text>{' '}
        <Text as="p" className="p-lg" color="Galaxy">
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
      </Block>
    </SplitSection>

    <SplitSection Flex="row-reverse">
      <Block
        Style="centered"
        BgColor={Theme.Color.White}
        BgMatch="power-of-play.jpg"
        BgAlt="Our Awesome Alt Tag"
        Width={0.5}
      />
      <Block
        Padding={[2, 2, 2, 2]}
        Width={0.5}
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
      >
        <Text as="h6" color="Galaxy">
          Playing since 1997
        </Text>
        <Text as="h2" color="Sunset">
          Creativity, confidence &amp; collaboration.
        </Text>{' '}
        <Text as="p" className="p-lg" color="Galaxy">
          Through LEGO® inspired classes sparking “Aha!” moments, we help kids
          grasp fundamental principles of engineering and physics. The
          experience boosts their confidence, creativity and ability to
          collaborate.
        </Text>
      </Block>
    </SplitSection>
  </>
);

export default LocationSplitSection;

//////////////////////////////////////////////////////////////////////
// End Component

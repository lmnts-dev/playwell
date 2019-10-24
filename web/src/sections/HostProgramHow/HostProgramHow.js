// <HostProgramHow /> Section:
// Host a Program How section

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import SplitSection from 'components/library/Section/SplitSection';
import Btn from 'components/library/Btn';

// Elements
import Block from 'components/library/Block';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HostProgramHow = () => (
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
          How can I bring a Play-Well Enrichment Class to my school?
        </Text>
        <Text as="h2" color="Sunset">
          After School Programs
        </Text>{' '}
        <Text as="p" className="p-lg" color="Galaxy">
          Mention our Engineering FUNdamentals classes to your PTA/PTO
          president, after-school coordinator or principal. Contact a Play-Well
          area manager to get a class proposal summary outlining our curriculum,
          teaching methodology and class fees.
        </Text>
        <Btn
          Label="Learn More"
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Destination="/"
        />
      </Block>
    </SplitSection>
  </>
);

export default HostProgramHow;

//////////////////////////////////////////////////////////////////////
// End Component

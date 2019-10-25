// <AfterSchoolOverview /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import SplitSection from 'components/library/Section/SplitSection';
import Btn from 'components/library/Btn';
import Block from 'components/library/Block';

// Styles
// import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AfterSchoolOverview = () => {
  return (
    <>
      <SplitSection Flex="row">
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="adults-outdoor.jpg"
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
            Multi-session course
          </Text>
          <Text as="h2" color="Sunset">
            Program Overview
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
          Our enrichment program is a multi-session course for elementary or middle school students. Classes typically meet once per week before or after school for an entire quarter (Fall/Winter/Spring). Session duration is generally 90-minutes. Varying session length and class timing may be negotiated with your local Area Manager.
          </Text>
        </Block>
      </SplitSection>
      <SplitSection Flex="row-reverse">
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="adults-outdoor.jpg"
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
            Multi-session course
          </Text>
          <Text as="h2" color="Sunset">
            Program Overview
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
          Our enrichment program is a multi-session course for elementary or middle school students. Classes typically meet once per week before or after school for an entire quarter (Fall/Winter/Spring). Session duration is generally 90-minutes. Varying session length and class timing may be negotiated with your local Area Manager.
          </Text>
        </Block>
      </SplitSection>
      <SplitSection Flex="row">
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="adults-outdoor.jpg"
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
            Multi-session course
          </Text>
          <Text as="h2" color="Sunset">
            Program Overview
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
          Our enrichment program is a multi-session course for elementary or middle school students. Classes typically meet once per week before or after school for an entire quarter (Fall/Winter/Spring). Session duration is generally 90-minutes. Varying session length and class timing may be negotiated with your local Area Manager.
          </Text>
        </Block>
      </SplitSection>
    </>
  );
};

export default AfterSchoolOverview;

//////////////////////////////////////////////////////////////////////
// End Component

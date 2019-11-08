// <WorkshopsCulture /> section:

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
import Section from 'components/library/Elements/Section';

// Styles
// import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const WorkshopsCulture = () => {
  return (
    <>
      <SplitSection Flex="row-reverse">
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="girl-bathing-suit.jpg"
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
            A joyful experience with a life-long impact
          </Text>
          <Text as="h2" color="Sunset">
            Dream it. Build it. Wreck it. Repeat.
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
            Kids are already naturally gifted creators. Then they get added
            inspiration from our specially trained instructors. They dive into
            our massive collections of LEGO® parts. And while they build
            elaborate objects, structures and vehicles, they explore fundamental
            principles of engineering and physics. They also learn to
            collaborate and create without fear of mistakes.
          </Text>
        </Block>
      </SplitSection>
    </>
  );
};

export default WorkshopsCulture;

//////////////////////////////////////////////////////////////////////
// End Component

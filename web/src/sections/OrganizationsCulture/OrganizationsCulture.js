// <OrganizationsCulture /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text, Heading } from 'components/library/Elements';
import SplitSection from 'components/library/Section/SplitSection';
import Btn from 'components/library/Btn';
import Block from 'components/library/Block';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Styles
import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const OrganizationsCulture = () => {
  return (
    <Container>
      <SplitSection Flex="row-reverse">
        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgMatch="lady-group.jpg"
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
<<<<<<< HEAD
          <Heading className="h6 heading-padding" color="Galaxy">
=======
          <Text className="h6 heading-padding" color="Galaxy">
>>>>>>> df96483591fcdd04ec09b841ed6e67a105582df8
            Establishing a culture of play
          </Heading>
          <Heading className="h2" color="Sunset">
            Solve Problems and Explore
          </Heading>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
            There was a time when our play was our work. Remember when you were
            a kid, and your imagination had no limits? Through play, you
            expressed your creativity, solved problems, and explored the world.
          </Text>
          <Text as="p" className="p-lg" color="Galaxy">
            We believe that establishing a culture of play helps create that
            environment. In our experience, organizations that play well create
            the conditions for exploration, unconventional thinking, and
            innovation. That culture of play allows for big risks and also
            failure, as resiliency is a crucial part of the journey towards
            success.
          </Text>
        </Block>
      </SplitSection>
    </Container>
  );
};

export default OrganizationsCulture;

//////////////////////////////////////////////////////////////////////
// End Component

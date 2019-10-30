// <NonProfitsOutreach /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import SplitSection from 'components/library/Section/SplitSection';
import Block from 'components/library/Block';

// Styles
import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const NonProfitsOutreach = () => {
  return (
    <Container>
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
            Inspiring the next generation
          </Text>
          <Text className="h2" color="Sunset">
            Play-Well<br />Outreach
          </Text>{' '}
          <Text as="p" className="p-lg" color="Galaxy">
            Play-Well Outreach, the non-profit arm of Play-Well TEKnologies brings LEGO&reg;-based engineering-focused educational programs to under-served communities whit the hope of inspiring the next generation of engineers, architects, inventors, and innovative thinkers.
          </Text>
        </Block>
      </SplitSection>
    </Container>
  );
};

export default NonProfitsOutreach;

//////////////////////////////////////////////////////////////////////
// End Component

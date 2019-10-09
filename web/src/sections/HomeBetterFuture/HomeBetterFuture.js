// <HomeBetterFuture /> component:
// Building a better future homepage section

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomeBetterFuture = ({ themeProps }) => {
  return (
    <Container
      bg={themeProps.BgColor}
      color={themeProps.PrimaryColor}
      textAlign="left"
    >
      <Container.Inner>
        <Container.Image width={[1, 1, 6 / 10]}>
          <figure>
            <ImgMatch src="placeholder.jpeg" AltText="Hero Alt" />
          </figure>
        </Container.Image>
        <Box width={[1, 1, 4 / 10]} pr={10}>
          <Text className="h6" fontWeight={600} mb={1}>
            The Importance of STEM Education
          </Text>
          <Text as="h2" className="h1" fontWeight={600}>
            Building a Better Future
          </Text>
          <Text as="p">
            STEM education creates critical thinkers, increases science
            literacy, and enables the next generation of innovators. Innovation
            leads to new products and processes that sustain our economy in an
            ever increasing technologically driven society.
          </Text>
          <Text as="p">
            Having activities that show real-life implication of STEM can pull
            together the ideas presented in school and help to show how they
            benefit our society and even our world as a whole
          </Text>
          <Btn
            External
            Label="What We Do"
            BgColor={themeProps.TertiaryColor}
            TextColor={Theme.Color.White}
          />
        </Box>
      </Container.Inner>
    </Container>
  );
};

export default HomeBetterFuture;

//////////////////////////////////////////////////////////////////////
// End Component

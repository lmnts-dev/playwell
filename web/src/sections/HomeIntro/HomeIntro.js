// HomeIntro.js:
// Homepage introduction

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
import { Intro } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomeIntro = () => {
  return (
    <Intro pt={0} textAlign="left" indent>
      <Intro.Inner>
        <Box width={[1 / 2]} pr={10}>
          <Text as="span" color="Galaxy" fontSize={[1, 2, 2]} mb={1}>
            Taking our imagination up a level
          </Text>
          <Text as="h2" color="Sunset">
            Creativity, confidence &amp; collaboration.
          </Text>{' '}
          <Text
            as="p"
            color="Galaxy"
            fontSize={[0, 1, 1]}
            mt={[1, 1, 0]}
            mb={1}
          >
            Through LEGO® inspired classes sparking “Aha!” moments, we help kids
            grasp fundamental principles of engineering and physics. The
            experience boosts their confidence, creativity and ability to
            collaborate.
          </Text>
          <Btn
            External
            Label="What We Do"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Box>
        <Intro.Image width={[1 / 2]}>
          <figure>
            <ImgMatch src="intro-smiles.jpg" AltText="Hero Alt" />
          </figure>
        </Intro.Image>
      </Intro.Inner>
    </Intro>
  );
};

export default HomeIntro;

//////////////////////////////////////////////////////////////////////
// End Component

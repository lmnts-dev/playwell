// <HomeImpact /> component:
//

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
const HomeImpact = () => {
  return (
    <Container textAlign="left" indent>
      <Container.Inner>
        <Box
          width={[1, 1, 1 / 2]}
          pr={[0, 0, Root.Grid.Indent.X]}
          pb={[Root.Size, Root.Size, 0]}
        >
          <Text className="h6" color="Galaxy" fontWeight={600} mb={1}>
            Our impact on STEM Education
          </Text>
          <Text as="h2" className="h1" fontWeight={600} color="Sunset">
            Children Learn While Playing
          </Text>
          <Text as="p" className="p-lg" color="Galaxy">
            Our assessments measured three goals including: student's knowledge
            of STEM terms or concepts, ability to generalize information, and
            increasing positive feeling towards STEM subjects. For example, the
            definition of gravity or friction, or that when two gears interlock
            their teeth its called meshing.
          </Text>
          <Btn
            External
            Label="What We Do"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Box>
        <Container.Image width={[1, 1, 4 / 10]}>
          <figure>
            <ImgMatch src="graph.png" AltText="Hero Alt" />
          </figure>
        </Container.Image>
      </Container.Inner>
    </Container>
  );
};

export default HomeImpact;

//////////////////////////////////////////////////////////////////////
// End Component

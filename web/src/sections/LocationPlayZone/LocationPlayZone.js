// <LocationPlayCenter /> section:
// Location detail template Play Center callout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import Section from 'components/library/Elements/Section';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import { Container } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationPlayZone = () => (
  <Container textAlign="left" pt={[8, 8, 12, 12]} indent>
    <Container.Image>
      <ImgMatch src="lego-ladder.png" AltText="Cloud" />
    </Container.Image>
    <Box width={[1, 6 / 10, 1 / 2, 4 / 10]}>
      <Text className="h6" as="span" color="Galaxy" fontWeight={700} mb={1}>
        Do it yourself
      </Text>
      <Text as="h2" color="Sunset">
        Build Your Own World of Opportunity
      </Text>
      <Text as="p" color="Galaxy" fontSize={[0, 1, 1]} mt={[1, 1, 0]} mb={1}>
        Bring your kid over or bring out your inner kid with some of our online
        activities to feed your imagination.
      </Text>
      {/* <Btn
        Label="Play Zone"
        Destination="/menu"
        BgColor={Theme.Color.Primary}
        TextColor={Theme.Color.White}
      /> */}
    </Box>
  </Container>
);

export default LocationPlayZone;

//////////////////////////////////////////////////////////////////////
// End Component

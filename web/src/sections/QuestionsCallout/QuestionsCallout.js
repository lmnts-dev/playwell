// <QuestionsCallout /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import Btn from 'components/library/Btn';
import Section from 'components/library/Elements/Section';

// Styles
import { QuestionsNav, Container } from './styles.scss';

// Constants
import { Box, Flex, Text } from 'components/library/Elements';
import { Theme, Root } from 'constants/Theme';

// Data
import CalloutBg from './assets/cta__courses.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const QuestionsCallout = () => {
  return (
    <Section
      bg="Primary"
      bgImage={CalloutBg}
      bgOverlay="Dino"
      alpha={0.8}
      color="white"
      textAlign="center"
      pt={[6, 6, 8, 8]}
      pb={1}
    >
      <Flex
        as="article"
        width={1}
        maxWidth={Theme.Base.Grid.SiteWidth}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box width={1}>
          <Text as="span" fontSize={4} mt={1}>
            Questions?
          </Text>
          <Text as="h3" mt={1} mb={1}>
            Learn more about our workshops.
          </Text>
          <Btn
            Label="Get in touch"
            Destination="/"
            BgColor={'rgba(250, 250, 250, 0.4)'}
            TextColor={props => props.theme.Color.Galaxy}
          />
          <QuestionsNav as="ul" fontSize={[1, 1, 2, 2]} mt={7}>
            <li>
              <Link to="/robotics">Robotics</Link>
            </li>
            <li>
              <Link to="/intro-to-stem">Intro to STEM</Link>
            </li>
            <li>
              <Link to="/gaming">Gaming</Link>
            </li>
            <li>
              <Link to="/advanced-engineering">Advanced Engineering</Link>
            </li>
            <li>
              <Link to="/engineering-themes">Engineering Themes</Link>
            </li>
          </QuestionsNav>
        </Box>
      </Flex>
    </Section>
  );
};

export default QuestionsCallout;

//////////////////////////////////////////////////////////////////////
// End Component

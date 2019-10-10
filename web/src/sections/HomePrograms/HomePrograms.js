// HomeIntro.js:
// Homepage introduction

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import ImageAccordian from 'components/library/ImageAccordian';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';

// Styles
import { AccordianFeature } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const HomePrograms = () => {
  return (
    <Section bg={Theme.Color.Blush} textAlign="left" pb={0} overflow="hidden" fullWidth>
      <Box pb={8}>
        <Text
          className="h3"
          color={Theme.Color.Nova}
          fontWeight={600}
          textAlign="center"
        >
          Our Programs
        </Text>
      </Box>
      <AccordianFeature>
        <ul>
          <li>
            <a className="h6" href="/">
              Robotics
            </a>
          </li>
          <li>
            <a className="h6" href="/">
              Intro to STEM
            </a>
          </li>
          <li>
            <a className="h6" href="/">
              Gaming
            </a>
          </li>
          <li>
            <a className="h6" href="/">
              Advanced Engineering
            </a>
          </li>
          <li>
            <a className="h6" href="/">
              Engineering Themes
            </a>
          </li>
        </ul>
        <div className="container">
          <ImageAccordian
            Header="Worshops"
            Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Image="intro-smiles.jpg"
          />
          <ImageAccordian
            Header="Classes"
            Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Image="intro-smiles.jpg"
          />
          <ImageAccordian
            Header="Camps"
            Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Image="intro-smiles.jpg"
          />
        </div>

        <FooterAngleSlice bgColor={Theme.Color.Background} />
      </AccordianFeature>
    </Section>
  );
};

export default HomePrograms;

//////////////////////////////////////////////////////////////////////
// End Component

// Index.js:
// This is the landing page of the who section of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

import CenterSlider from 'components/library/Section/CenterSlider';
import HeroContainer from 'components/library/Hero/HeroContainer';
import ImageAccordianFeature from 'components/library/Section/ImageAccordianFeature';
import TextWithLgLegos from 'components/library/Section/TextWithLgLegos/styles.scss';
import { Hero } from 'templates/Course/styles.scss';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import TeamBuildingHero from 'sections/TeamBuildingHero';
import TeamBuildingCulture from 'sections/TeamBuildingCulture';
import TeamBuildingSplitLinks from 'sections/TeamBuildingSplitLinks';
import AfterSchoolContact from 'sections/AfterSchoolContact';
import SplitLinks, { SplitLink } from 'components/library/SplitLinks';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';



const ThemeProps = {
  BgColor: Theme.Color.Sea,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.White,
};

  const heroProps = {
    bg: ThemeProps.BgColor,
    color: ThemeProps.PrimaryColor,
    textAlign: 'center',
  };

// Data

// Begin Component
//////////////////////////////////////////////////////////////////////


export const OverflowHidden = styled.div`
  overflow: hidden;
`;

// Render Page
const Success = () => {
  return (
    <Layout {...ThemeProps}>
      <HeroContainer {...heroProps}>
        <Hero as="article" {...heroProps} {...ThemeProps}>
          <Hero.Headline className="h3">
            Thank You for Submitting Your Request!
          </Hero.Headline>
          <Hero.Date className="h5">We'll be in touch.</Hero.Date>
        </Hero>
      </HeroContainer>

      <div style={{ overflow: 'hidden' }}>
        <BasicSection
          BgColor={Theme.Color.Blush}
          TextColor={Theme.Color.Sunset}
        >
          <ImageAccordianFeature
            Accordians={[
              {
                header: 'Workshops',
                paragraph:
                  'Play-Well LEGO@-inspired programs can be tailored to your needs. We offer workshops for Girl Scouts, Homeschool Groups, Boy Scouts, In-school field trips and more.',
                image: 'girl-3.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/workshops',
              },
              {
                header: 'Classes',
                paragraph:
                  'What can you do with over 20,000 pieces of LEGO®? In our Engineering with LEGO® enrichment programs kids take on real-life engineering challenges allowing them to see STEM in action. Your child will explore concepts in physics, architecture, and mechanical engineering. Our students find inventive solutions in a fun-filled context that supports the growth of young minds through hands-on, minds-on learning.',
                image: 'girl-2.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/classes',
              },
              {
                header: 'Camps',
                paragraph:
                  "We'll help unleash your child's inner engineer in our STEM summer camps. They'll have so much fun in our LEGO-inspired summer camps that they won't even realize how much they're learning!",
                image: 'girl-1.jpg',
                buttonText: 'Learn More',
                buttonLink: '/programs/summer-camps',
              },
            ]}
          />
        </BasicSection>
      </div>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner noPaddingRight>
          <TextWithLgLegos
            Caption="It starts with play"
            Header="Build Your Own World of Opportunity"
            Paragraph="Activate your child's imagination with our LEGO-inspired games &amp; activities."
            Image="lego-ladder.png"
            className="overflow-image"
            ButtonText="Our Programs"
            ButtonDest="/programs"
          />
        </BasicInner>
      </BasicSection>

      <SplitLinks themeProps={ThemeProps} />
    </Layout>
  );
};

export default Success;

//////////////////////////////////////////////////////////////////////
// End Component

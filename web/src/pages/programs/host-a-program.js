// Host a Program page:
// This is the host a program page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';


// Sections
import HostProgramSplitLinks from 'sections/HostProgramSplitLinks';
import Btn from 'components/library/Btn';
import SplitHero from 'components/library/Hero/SplitHero';
import SplitSection from 'components/library/Section/SplitSection';
import Block from 'components/library/Block';


// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import { DataFetch } from 'hooks/DataFetch';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Styled
const Main = styled.main`
  overflow: hidden;
`;

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Lilac,
};

// Props
const HeroProps = {
  arrow: true,
  arrowColor: Theme.Color.Nova,
  bg: Theme.Color.Cream,
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  subNavColor: Theme.Color.Primary,
  bgMatch: 'group-girls.jpg',
};

// Render Page
const HostProgramPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <Main>
        <SplitHero {...HeroProps}>
          <h2>Hosting a Play-Well Program</h2>
          <h6>
            Our LEGO-inspired STEM programs are customizable and can be tailored
            to your needs. We'd love to work with you to provide a memorable
            hands-on learning experience. Contact us today to discuss options
            for enrichment, workshops, team building, special events and more.
          </h6>
          <Btn
            BgColor={Theme.Color.Nova}
            Label="Get in Touch"
            Destination="/contact"
            TextColor={Theme.Color.White}
            Size="large"
          />
        </SplitHero>
        <SplitSection Flex="row" id="after-school-programs">
          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="boy-smiles.jpg"
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
              How can I bring a Play-Well Enrichment Class to my school?
            </Text>
            <Text className="h2" color="Sunset">
              After School Programs
            </Text>{' '}
            <Text as="p" className="p-lg" color="Galaxy">
              To bring Play-Well STEM enrichment to your school, connect us with
              your school staff, after-school coordinator or parent group
              president. Click here to download our enrichment brochure or
              follow the link below to contact your local manager.
            </Text>
            <Btn
              Label="Contact Us"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/contact"
              className="btn--large"
              Size="large"
            />
          </Block>
        </SplitSection>
        <SplitSection Flex="row-reverse" id="recreation-centers">
          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="boy-1.jpg"
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
              Lorem Ipsum Dolor Set
            </Text>
            <Text className="h2" color="Sunset">
              Recreation Centers
            </Text>{' '}
            <Text as="p" className="p-lg" color="Galaxy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Text>
            <Btn
              Label="Contact Us"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/contact"
              className="btn--large"
              Size="large"
            />
          </Block>
        </SplitSection>
        <SplitSection Flex="row" id="homeschool-classes">
          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="boy-2.jpg"
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
              Lorem Ipsum Dolor Set
            </Text>
            <Text className="h2" color="Sunset">
              Homeschool Classes
            </Text>{' '}
            <Text as="p" className="p-lg" color="Galaxy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Text>
            <Btn
              Label="Contact Us"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/contact"
              className="btn--large"
              Size="large"
            />
          </Block>
        </SplitSection>
        <SplitSection Flex="row-reverse" id="workshops">
          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="boy-4.jpg"
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
              Lorem Ipsum Dolor Set
            </Text>
            <Text className="h2" color="Sunset">
              Workshops
            </Text>{' '}
            <Text as="p" className="p-lg" color="Galaxy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Text>
            <Btn
              Label="Contact Us"
              BgColor={Theme.Color.Nova}
              TextColor={Theme.Color.White}
              Destination="/contact"
              className="btn--large"
              Size="large"
            />
          </Block>
        </SplitSection>
        <HostProgramSplitLinks themeProps={ThemeProps} />
      </Main>
    </Layout>
  );
};

export default HostProgramPage;

//////////////////////////////////////////////////////////////////////
// End Component

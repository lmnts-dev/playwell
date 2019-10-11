// Contact page:
// This is the contact page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import HeroContainer from 'components/library/Hero/HeroContainer';
import Section from 'components/library/Elements/Section';
import ImgMatch from 'components/core/ImgMatch';

// Sections

// Styles
import { Decorator, Main, Contact } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Deepsea,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Nova,
};

const HeroProps = {
  bg: ThemeProps.BgColor,
  color: ThemeProps.PrimaryColor,
  textAlign: 'left',
};

// Render Page
const ContactPage = () => (
  <Layout {...ThemeProps}>
    <Main>
      <Decorator>
        <div className="decorator__left decorator__left--top">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__left decorator__left--bottom">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__right decorator__right--top">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__right decorator__right--bottom">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
      </Decorator>
      <HeroContainer {...HeroProps}>
        <Contact>
          <Contact.Title>
            <Box width={[1 / 2]}>
              <h1>Let's Talk</h1>
            </Box>
            <Box width={[1 / 2]} textAlign="right">
              <Contact.Faq />
            </Box>
          </Contact.Title>
          <Text as="h6" pr={[0, 0, 8]}>
            If you have specific qustions about Play-Well programs in your
            geographic area, please contact the manager for your area below.
          </Text>
        </Contact>
      </HeroContainer>
    </Main>
  </Layout>
);

export default ContactPage;

//////////////////////////////////////////////////////////////////////
// End Component

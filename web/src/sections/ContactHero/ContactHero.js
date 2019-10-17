// <ContactHero /> section:
//

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import HeroContainer from 'components/library/Hero/HeroContainer';
import { Icon } from 'components/library/Icons';
import { ContactManager } from 'components/library/ContactManager';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import { Hero, Decorator } from './styles.scss';

// Data
import { DataFetch } from 'hooks/DataFetch';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  bg: Theme.Color.Deepsea,
  color: Theme.Color.White,
  textAlign: 'left',
};

const ContactHero = ({ data }) => {
  return (
    <>
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
        <Hero>
          <Hero.Title>
            <Box width={[1 / 2]}>
              <h1>Let's Talk</h1>
            </Box>
            <Box width={[1 / 2]} textAlign="right">
              <Hero.Faq>
                <span className="faq" />
                <span className="arrow">
                  <Icon Name="carat" />
                </span>
              </Hero.Faq>
            </Box>
          </Hero.Title>
          <Text as="h6" pr={[0, 0, 8]}>
            If you have specific qustions about Play-Well programs in your
            geographic area, please contact the manager for your area below.
          </Text>
          <ContactManager data={data} />
        </Hero>
      </HeroContainer>
    </>
  );
};

export default ContactHero;

//////////////////////////////////////////////////////////////////////
// End Component

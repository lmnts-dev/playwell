// <ContactInfo /> section:
//

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import { Icon } from 'components/library/Icons';

// Styles
import { Container, ArrowLink } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ContactInfo = ({ pageContext }) => {
  return (
    <Section
      bg={Theme.Color.Deepsea}
      color={Theme.Color.White}
      textAlign="left"
      pt={[0, 0, 6]}
      pb={[2, 'calc((--Size) / 2)']}
      fullWidth
    >
      <Container>
        <div className="offices">
          <Text as="p" className="p-lg" fontWeight={400}>
            Administrative Offices
          </Text>
          <Text as="p" className="p-lg" pb={0}>
            Mothership
          </Text>
          <p className="p-sm">
            224 Greenfield Avenue, Ste. B<br />
            San Anselmo, California 94960
          </p>
        </div>
        <div className="numbers">
          <Link to="/who-we-are">
            <ArrowLink>
              <span>Meet Our Administration Team</span>
              <span className="arrow">
                <Icon Name="carat" />
              </span>
            </ArrowLink>
          </Link>
          <Flex mt={1}>
            <Box width={1 / 3}>
              <Text className="p-lg">Phone</Text>
              <p className="p-sm">415.578.2746</p>
            </Box>
            <Box width={1 / 3}>
              <Text className="p-lg">Fax</Text>
              <p className="p-sm">415.5460.5108</p>
            </Box>
            <Box width={1 / 3}>
              <Text className="p-lg">FEIN #</Text>
              <p className="p-sm">68-0415940</p>
            </Box>
          </Flex>
        </div>
        <div className="newsletter">
          <Text as="p" className="p-lg" fontWeight={600}>
            Let's be Pen Pals. Join Our Newsletter.
          </Text>
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="me@email.com"
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default ContactInfo;

//////////////////////////////////////////////////////////////////////
// End Component

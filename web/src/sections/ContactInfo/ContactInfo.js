// <ContactInfo /> section:
//

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';

// Styles
import { Container, ArrowLink, Newsletter } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ContactInfo = ({ pageContext }) => {
  return (
    <Container
      bg={Theme.Color.Deepsea}
      color={Theme.Color.White}
      textAlign="left"
      fullWidth
    >
      <Container.Inner>
        <Box width={[2 / 10]}>
          <Text fontSize="1.2rem" fontWeight={400}>
            Administrative Offices
          </Text>
          <Text className="p-lg" fontWeight={500} mt={1}>
            Homebase
          </Text>
          <Text as="p" className="p-sm">
            224 Greenfield Avenue, Ste. B<br />
            San Anselmo, California 94960
          </Text>
        </Box>
        <Box width={[3 / 10]}>
          <ArrowLink>
            <span>Meet Our Administration Team</span>
            <span className="arrow">
              <Icon Name="carat" />
            </span>
          </ArrowLink>
          <Flex mt={1}>
            <Box width={1 / 3}>
              <Text className="p-lg" fontWeight={500}>
                Phone
              </Text>
              <Text as="p" className="p-sm">
                415.578.2746
              </Text>
            </Box>
            <Box width={1 / 3}>
              <Text className="p-lg" fontWeight={500}>
                Fax
              </Text>
              <Text as="p" className="p-sm">
                415.5460.5108
              </Text>
            </Box>
            <Box width={1 / 3}>
              <Text className="p-lg" fontWeight={500}>
                FEIN #
              </Text>
              <Text as="p" className="p-sm">
                68-0415940
              </Text>
            </Box>
          </Flex>
        </Box>
        <Newsletter width={[5 / 10]}>
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
        </Newsletter>
      </Container.Inner>
    </Container>
  );
};

export default ContactInfo;

//////////////////////////////////////////////////////////////////////
// End Component

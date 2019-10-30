// <SummeCampsHero /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
import Btn from 'components/library/Btn';

// Styles
import { Form } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SummerCampsNewsletter = () => {
  return (
    <BasicSection
      BgColor={Theme.Color.Background}
      TextColor={Theme.Color.Dino}
    >
      <BasicInner wideWidth>
        <Box textAlign="center">
          <Text as="h6" color="Galaxy">
            Let's be Pen Pals.
          </Text>
          <Text as="h2" color="Sunset">
            Join Our Newsletter.
          </Text>
          <Form
            name="join-our-newsletter"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="join-our-newsletter"
              value="join-our-newsletter"
            />
            <fieldset>
              <div className="flex">
                <div>
                  <label htmlFor="email">
                    Email:
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <Btn
                    BgColor={Theme.Color.Nova}
                    TextColor={Theme.Color.White}
                    Label="Join"
                    Destination="/"
                    Size="large"
                  />
                </div>
              </div>
            </fieldset>
          </Form>
        </Box>
      </BasicInner>
    </BasicSection>
  );
};

export default SummerCampsNewsletter;

//////////////////////////////////////////////////////////////////////
// End Component

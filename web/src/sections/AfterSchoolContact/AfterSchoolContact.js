// <AfterSchoolContact /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import Section from 'components/library/Elements/Section';

// Styles
import { Form } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AfterSchoolContact = () => {
  return (
    <Section bg="Background">
      <Form
        name="after-school-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="after-school-contact"
          value="after-school-contact"
        />
        <legend className="h3">Bring our programs to your school</legend>
        <fieldset>
          <div className="flex">
            <Box width={[1, 1 / 2, 4 / 10]}>
              <label htmlFor="firstName">
                First Name:{' '}
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </Box>

            <Box width={[1, 1 / 2, 6 / 10]}>
              <label htmlFor="lastName">
                Last Name:{' '}
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </Box>
          </div>

          <div>
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="School name"
            />
          </div>

          <div>
            <label htmlFor="comments">Comments, Questions, etc.: </label>
            <textarea
              name="comments"
              id="comments"
              rows="4"
              placeholder="Comments, questions, etc."
            />
          </div>

          <Box width={[1, 8 / 10, 8 / 10]}>
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
            />
          </Box>

          <div className="flex">
            <Box width={[1, 1 / 2, 4 / 10]}>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" name="phone" id="phone" />
            </Box>

            <Box width={[1, 1 / 2, 1 / 2]}>
              <label htmlFor="eventType">Type of Event:</label>
              <select name="eventType" id="eventType">
                <option value="event">Event</option>
                <option value="event">Event</option>
                <option value="event">Event</option>
              </select>
            </Box>
          </div>

          <div className="flex">
            <Box width={[1, 1 / 2, 4 / 10]}>
              <label htmlFor="city">City:</label>
              <input type="text" name="city" id="city" placeholder="City" />
            </Box>

            <Box width={[1, 1 / 2, 4 / 10]}>
              <label htmlFor="state">State:</label>
              <select name="state" id="state">
                <option value="state">State</option>
                <option value="state">State</option>
                <option value="state">State</option>
              </select>
            </Box>
          </div>

          <div>
            <span className="p-lg">How would you like us to respond?</span>
            <input type="radio" name="email" value="email" /> <span>email</span>
            <span>OR</span>
            <input type="radio" name="phone" value="phone" />
            <span>phone</span>
          </div>

          <Btn
            BgColor={Theme.Color.Nova}
            TextColor={Theme.Color.White}
            Label="Submit Request"
            Destination="/"
          />
        </fieldset>
      </Form>
    </Section>
  );
};

export default AfterSchoolContact;

//////////////////////////////////////////////////////////////////////
// End Component

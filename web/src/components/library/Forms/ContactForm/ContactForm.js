// <ContactForm /> component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';

// Styles
import { Form } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ContactForm = ({ formName, title, footnote }) => (
  <Form
    name={formName}
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input
      type="hidden"
      name={formName}
      value={formName}
    />
    <legend className="h3">{title}</legend>
    <fieldset>
      <div className="form-group">
        <Box width={[1, 1 / 2, 4 / 10]} className="form-group__box">
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
            required
          />
        </Box>

        <Box width={[1, 1 / 2, 6 / 10]} className="form-group__box">
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
            required
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

      <Box width={1}>
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
      </Box>

      <div className="form-group">
        <Box width={[1, 1 / 2, 4 / 10]} className="form-group__box">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(___) ___-____"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxLength="12"
          />
        </Box>

        <Box
          width={[1, 1 / 2, 6 / 10]}
          className="form-group__box form-group__box--select"
        >
          <label htmlFor="eventType">Type of Event:</label>
          <select name="eventType" id="eventType">
            <option value={null}>Type of Event</option>
            <option value="event">Event</option>
            <option value="event">Event</option>
            <option value="event">Event</option>
          </select>
          <span className="carat">
            <Icon Name="carat" className="ico-carat" />
          </span>
        </Box>
      </div>

      <div className="form-group">
        <Box width={[1, 1 / 2, 1 / 2]} className="form-group__box">
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" placeholder="City" />
        </Box>

        <Box
          width={[1, 1 / 2, 1 / 2]}
          className="form-group__box form-group__box--select"
        >
          <label htmlFor="state">State:</label>
          <select name="state" id="state">
            <option value={null}>State</option>
            <option value="state">State</option>
            <option value="state">State</option>
            <option value="state">State</option>
          </select>
          <span className="carat">
            <Icon Name="carat" className="ico-carat" />
          </span>
        </Box>
      </div>

      <div className="radio-group">
        <span className="p-lg form-heading">
          How would you like us to respond?
        </span>

        <label htmlFor="email-or-phone">
          email
          <input type="radio" name="email-or-phone" value="email" />
          <span className="checkmark" />
        </label>

        <span>OR</span>

        <label htmlFor="email-or-phone">
          phone
          <input type="radio" name="email-or-phone" value="phone" />
          <span className="checkmark" />
        </label>
      </div>

      <Btn
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        Label="Submit Request"
        Destination="/"
        Size="large"
      />

      <div className="footnote">
        <p className="p-lg">{footnote}</p>
      </div>
    </fieldset>
  </Form>
);

ContactForm.defaultProps = {};

export default ContactForm;

//////////////////////////////////////////////////////////////////////
// End Component

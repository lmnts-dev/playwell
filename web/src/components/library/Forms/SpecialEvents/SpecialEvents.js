// <SpecialEvents /> component:

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
import { Form } from './../styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SpecialEvents = ({ formName, title, footnote }) => (
  <Form
    name={formName}
    netlify
    action="/success"
  >
    <legend>
      <div className="h3">{title}</div>
      <p>
        Fill out the form below and a Play-Well manager will follow up soon.
      </p>
    </legend>
    
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
            maxLength="14"
          />
        </Box>

        <Box
          width={[1, 1 / 2, 6 / 10]}
          className="form-group__box form-group__box--select"
        >
          <label htmlFor="eventType">Type of Event:</label>
          <select name="eventType" id="eventType">
            <option value={null}>Type of Event</option>
            <option value="summer-camps">Summer Camps</option>
            <option value="workshops">Workshops</option>
            <option value="classes">Classes</option>
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
            {States.map(state => (
             <option value={state}>{state}</option>
            ))}
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

        <span className="option-or">OR</span>

        <label htmlFor="email-or-phone">
          phone
          <input type="radio" name="email-or-phone" value="phone" />
          <span className="checkmark" />
        </label>
      </div>

      <button type="submit">
          Submit Request
      </button>

      <div className="footnote">
        <p className="p-lg">{footnote}</p>
      </div>
    </fieldset>
  </Form>
);

SpecialEvents.defaultProps = {};

export default SpecialEvents;

const States = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

//////////////////////////////////////////////////////////////////////
// End Component

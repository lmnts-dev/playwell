// <BirthdayParties /> component:

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

export const BirthdayParties = ({ formName, title, footnote }) => (
<form    
  name={formName}
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/success"
>
  <Form>
    <legend>
      <div className="h3">{title}</div>
      <p>
        Please provide us with information about your preferred party date and location. We will let you
        know if we can do a party at your location on the date requested. To view pricing for your area, 
        please choose your location.
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

      <div className="form-group">
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

        <Box width={[1, 1 / 2, 1 / 2]} className="form-group__box">
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" placeholder="City" />
        </Box>
      </div>

      <div className="vertical">
          <span className="p-lg form-heading txt-clr-eggplant">
            Pricing for your area:
          </span>

          <div class="pricing-row">
            <span className="h6">1-15 kids</span>
            <span>$295</span>
          </div>
          <div class="pricing-row">
            <span className="h6">16-23 kids</span>
            <span>$395</span>
          </div>
          <div class="pricing-row">
            <span className="h6">24+ kids</span>
            <span>Availability varies; please call for details</span>
          </div>

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

      <Box width={[1, 1 / 2, 4 / 10]}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(___) ___-____"
          maxLength="14"
        />
      </Box>
      

      <div className="radio-group vertical txt-clr-eggplant">
        <span className="p-lg form-heading">
          How did you hear about us?
        </span>

        <label htmlFor="reference">
          From a Play-Well Instructor
          <input type="radio" name="reference" value="instructor" />
          <span className="checkmark" />
        </label>

        <label htmlFor="reference">
          At a community event
          <input type="radio" name="reference" value="event" />
          <span className="checkmark" />
        </label>

        <label htmlFor="reference">
          Online search
          <input type="radio" name="reference" value="online" />
          <span className="checkmark" />
        </label>

        <label htmlFor="reference">
          From a friend
          <input type="radio" name="reference" value="friend" />
          <span className="checkmark" />
        </label>

        <div>
          <input
            type="text"
            name="other-reference"
            id="other-reference"
            placeholder="Other"
          />
        </div>
      </div>

      <button type="submit">
          Submit Request
      </button>

      <div className="footnote">
        <p className="p-lg">{footnote}</p>
      </div>
    </fieldset>
  </Form>
</form>
);

BirthdayParties.defaultProps = {};

export default BirthdayParties;

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

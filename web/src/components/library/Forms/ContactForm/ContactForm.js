// <ContactForm /> component:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import useForm from 'react-hook-form';

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

export const ContactForm = ({ formName, title, footnote }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => console.log(data);
  return (
    <Form
      name={formName}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name={formName} value={formName} />

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
              ref={register({
                required: 'First name is required',
              })}
            />

            {errors.firstName && (
              <div className="errors">
                <span>{errors.firstName.message}</span>
              </div>
            )}
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
              ref={register({
                required: 'Last name is required',
              })}
            />

            {errors.lastName && (
              <div className="errors">
                <span>{errors.lastName.message}</span>
              </div>
            )}
          </Box>
        </div>

        <div>
          <label htmlFor="school">School Name:</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="School name"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="comments">Comments, Questions, etc.: </label>
          <textarea
            name="comments"
            id="comments"
            rows="4"
            placeholder="Comments, questions, etc."
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="email">
            Email:
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>

          <input
            name="email"
            placeholder="Your email"
            type="text"
            ref={register({
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
          />
          
          {errors.email && (
            <div className="errors">
              <span>{errors.email.message}</span>
            </div>
          )}
        </div>

        <div className="form-group">
          <Box width={[1, 1 / 2, 4 / 10]} className="form-group__box">
            <label htmlFor="phone">Phone:</label>

            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(___) ___-____"
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              ref={register({
                maxLength: 12,
                pattern: {
                  value: /[0-9]{3} [0-9]{3} [0-9]{4}/i,
                  message: 'Invalid phone number',
                },
              })}
            />

            {errors.phone && (
              <div className="errors">
                <span>{errors.phone.message}</span>
              </div>
            )}
          </Box>

          <Box
            width={[1, 1 / 2, 6 / 10]}
            className="form-group__box form-group__box--select"
          >
            <label htmlFor="eventType">Type of Event:</label>

            <select name="eventType" id="eventType" ref={register}>
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
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              ref={register}
            />
          </Box>

          <Box
            width={[1, 1 / 2, 1 / 2]}
            className="form-group__box form-group__box--select"
          >
            <label htmlFor="state">State:</label>

            <select name="state" id="state" ref={register}>
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
            <input
              type="radio"
              name="email-or-phone"
              value="email"
              ref={register}
            />
            <span className="checkmark" />
          </label>

          <span>OR</span>

          <label htmlFor="email-or-phone">
            phone
            <input
              type="radio"
              name="email-or-phone"
              value="phone"
              ref={register}
            />
            <span className="checkmark" />
          </label>
        </div>

        {/* <Btn
          BgColor={Theme.Color.Nova}
          TextColor={Theme.Color.White}
          Label="Submit Request"
          Destination="/"
          Size="large"
        /> */}

        <input
          className="btn btn-submit"
          type="submit"
          value="Submit Request"
        />

        <div className="footnote">
          <p className="p-lg">{footnote}</p>
        </div>
      </fieldset>
    </Form>
  );
};

ContactForm.defaultProps = {};

export default ContactForm;

//////////////////////////////////////////////////////////////////////
// End Component

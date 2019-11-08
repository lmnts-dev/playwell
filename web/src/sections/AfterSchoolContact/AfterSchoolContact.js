// <AfterSchoolContact /> section:
// todo: form validation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import ContactForm from 'components/library/Forms/ContactForm';

// Styles
// import {  } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AfterSchoolContact = () => {
  return (
    <Section bg={Theme.Color.Background}>
      <ContactForm
        formName="after-school-contact"
        title="Bring our programs to your school"
        footnote="Once you've submitted your request, we will respond to your inquiry by email."
      />
    </Section>
  );
};

export default AfterSchoolContact;

//////////////////////////////////////////////////////////////////////
// End Component

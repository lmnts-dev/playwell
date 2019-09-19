// Course.js:
// This is the course detail page data template.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import HeroContainer from 'components/library/Hero/HeroContainer';
import Btn from 'components/library/Btn';
import { Icon } from 'components/library/Icons';
import ImgQuery from 'components/core/ImgQuery';
import Section from 'components/library/Elements/Section';

// Sections
import QuestionsCallout from 'sections/QuestionsCallout';

// Helpers
import slugify from 'helpers/slugify';

import ContentOverlayButton from 'components/library/ContentOverlay';

// Styles
import {
  Hero,
  Lead,
  Spacer,
  QuestionsNav,
  Toggle,
  Drawer,
  CourseFooter,
  Explore,
  CalloutSection,
} from './styles.scss';

// Constants
import { Box, Flex, Text } from 'components/library/Elements';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Sky,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: 'Sky',
  color: 'White',
  textAlign: 'center',
};

// Render Page
const Course = ({ pageContext }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Layout {...ThemeProps}>
      <HeroContainer {...HeroProps}>
        <Flex
          as="article"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={Theme.Base.Grid.SiteWidth}
          m="0 auto"
          pb={[4, 3]}
          px={[1, 1, 0]}
        >
          <Hero.Avatar>
            {/* <ImgQuery src={CalloutBg} AltText="Avatar" /> */}
          </Hero.Avatar>
          <Hero.Tags as="ul">
            <li>
              <Link
                to={
                  '/' +
                  slugify(pageContext.category_group_name.toLowerCase()) +
                  '/' +
                  pageContext.category_group_name
                }
              >
                {pageContext.category_group_name}
              </Link>
            </li>
            <li>
              <Link
                to={
                  '/' +
                  slugify(pageContext.category_group_name.toLowerCase()) +
                  '/' +
                  pageContext.course_type_group
                }
              >
                {pageContext.course_type_group}
              </Link>
            </li>
            <li>
              <Link
                to={
                  '/' +
                  slugify(pageContext.category_group_name.toLowerCase()) +
                  '/' +
                  'ages-' +
                  pageContext.age_range_start +
                  '-' +
                  pageContext.age_range_end
                }
              >
                ages {pageContext.age_range_start}-{pageContext.age_range_end}
              </Link>
            </li>
            {pageContext.room && <li> room {pageContext.room}</li>}
          </Hero.Tags>
          <Text as="h3" mt={1}>
            {pageContext.course_type_name}
          </Text>
          <Hero.Date as="p" fontSize={[0, 1, 3]} mt={[1, 1, 0]} mb={1}>
            {pageContext.date_time_display}
          </Hero.Date>
          {/* Content Overlay Modal Toggle */}
          {/* <ContentOverlayButton>toggle</ContentOverlayButton> */}
          <Btn
            External
            Label="Enroll Now"
            Size="Large"
            Destination={pageContext.action_url}
            BgColor={props => props.theme.Color.Nova}
            TextColor={props => props.theme.Color.White}
          />
          <Box my={2}>
            <Text as="p" fontSize={[0, 0, '1.1rem']} lineHeight="1.4">
              {pageContext.client_location_name}
              <br />
              {pageContext.display_address}
            </Text>
          </Box>
          <Hero.Tags as="ul">
            <li>more</li>
          </Hero.Tags>
        </Flex>
      </HeroContainer>

      <Spacer>
        <Spacer.Line />
      </Spacer>

      <Section as="section" bg="Cream">
        <Flex
          as="article"
          flexDirection="column"
          flexWrap="wrap"
          pt={[2, 2, 4, 4]}
          pb={[1, 1, 2, 2]}
          m={'0 auto'}
          maxWidth={Theme.Base.Grid.ReadingWidth}
        >
          <Lead as="p" color="Nova" fontSize={[1, 1, 2, 2]}>
            {pageContext.date_time_display}
          </Lead>
          <Lead as="p" color="Galaxy" fontSize={[1, 1, 2, 2]}>
            {pageContext.course_type_long_description}
          </Lead>
        </Flex>
      </Section>

      <Spacer>
        <Spacer.Line />
      </Spacer>

      <Section as="section" bg="White" pt={[6, 6, 8, 8]} pb={[2, 2, 3, 3]}>
        <Flex
          as="article"
          mx="auto"
          width={1}
          maxWidth={Theme.Base.Grid.SiteWidth}
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy">
              Time
              <br />
              <Text as="span" color="Nova">
                {pageContext.date_time_display}
              </Text>
            </Text>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy">
              {pageContext.client_location_name}
              <br />
              <Text as="span" color="Nova">
                {pageContext.display_address}
              </Text>
            </Text>
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]}>
            <Text as="p" color="Galaxy">
              Day(s)
              <br />
              <Text as="span" color="Nova">
                {pageContext.days_of_the_week}
              </Text>
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section
        bg="White"
        textAlign="center"
        flexWrap="wrap"
        flexDirection="column"
        pt={0}
        pb={0}
      >
        <Drawer
          as="article"
          width={1}
          maxWidth={Theme.Base.Grid.SiteWidth}
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
          mx="auto"
          className={isExpanded ? 'expanded' : 'collapsed'}
        >
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy" textAlign="center" pb={0}>
              Room
              <br />
              <Text as="span" color="Nova">
                {pageContext.room && pageContext.room}
              </Text>
            </Text>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy" textAlign="center" pb={0}>
              Level
              <br />
              <Text as="span" color="Nova">
                {pageContext.age_range_display && pageContext.age_range_display}
              </Text>
            </Text>
          </Box>
        </Drawer>
      </Section>

      <Toggle py={1} onClick={() => setIsExpanded(!isExpanded)}>
        <Text color={Theme.Color.Galaxy}>
          {isExpanded ? 'show less' : 'show more'}
        </Text>
      </Toggle>

      <QuestionsCallout />

      <CourseFooter as="section" bg="Sky" px={1} pt={8}>
        <CourseFooter.Course as="article" m="0 auto">
          <Text as="span" fontSize={4}>
            Let's play!
          </Text>
          <Text as="h3" mt={1}>
            {pageContext.course_type_name}
          </Text>
          <Hero.Date as="p" fontSize={[0, 1, 3]} mt={[1, 1, 0]} mb={1}>
            {pageContext.date_time_display}
          </Hero.Date>
          <Btn
            Label="Enroll Now"
            Destination="/"
            BgColor={props => props.theme.Color.Nova}
            TextColor={props => props.theme.Color.White}
          />
        </CourseFooter.Course>
        <CourseFooter.Explore as="article" width={1} mt={8}>
          <CourseFooter.Explore.Link
            width={[1, 1, 1 / 2]}
            px={[1, 1, 3, 8]}
            pb={[2, 2, 0]}
          >
            <CourseFooter.Explore.Arrow>
              <Icon Name="next" />
            </CourseFooter.Explore.Arrow>
            <Box>
              <Text as="span" fontSize={2} mt={1} color="Deepsea">
                Keep exploring
              </Text>
              <Text as="h4" mt={1}>
                Keep exploring our programs.
              </Text>
            </Box>
          </CourseFooter.Explore.Link>
          <CourseFooter.Explore.Link
            width={[1, 1, 1 / 2]}
            px={[1, 1, 3, 8]}
            pt={[2, 2, 0]}
          >
            <Box>
              <Text as="span" fontSize={2} mt={1} color="Deepsea">
                What's new?
              </Text>
              <Text as="h4" mt={1}>
                See what else is happening in Arizona.
              </Text>
            </Box>
            <CourseFooter.Explore.Arrow>
              <Icon Name="next" />
            </CourseFooter.Explore.Arrow>
          </CourseFooter.Explore.Link>
        </CourseFooter.Explore>
      </CourseFooter>
    </Layout>
  );
};

export default Course;

//////////////////////////////////////////////////////////////////////
// End Component

{
  /* <main
  style={{
    padding: '20px',
    backgroundColor: props => props.theme.Color.Background,
    flex: '1',
    color: props => props.theme.Color.Text,
  }}
>
  <span>action_type: </span>
  <strong>{pageContext.action_type}</strong>
  <br />
  <span>action_url: </span>
  <strong>{pageContext.action_url}</strong>
  <br />
  <span>action_url_comment: </span>
  <strong>{pageContext.action_url_comment}</strong>
  <br />
  <span>action_url_external: </span>
  <strong>{pageContext.action_url_external}</strong>
  <br />
  <span>age_range_display: </span>
  <strong>{pageContext.age_range_display}</strong>
  <br />
  <span>age_range_end: </span>
  <strong>{pageContext.age_range_end}</strong>
  <br />
  <span>age_range_start: </span>
  <strong>{pageContext.age_range_start}</strong>
  <br />
  <span>category_group_name: </span>
  <strong>{pageContext.category_group_name}</strong>
  <br />
  <span>client_location_name: </span>
  <strong>{pageContext.client_location_name}</strong>
  <br />
  <span>course_id: </span>
  <strong>{pageContext.course_id}</strong>
  <br />
  <span>course_type_group: </span>
  <strong>{pageContext.course_type_group}</strong>
  <br />
  <span>course_type_long_description: </span>
  <strong>{pageContext.course_type_long_description}</strong>
  <br />
  <span>course_type_name: </span>
  <strong>{pageContext.course_type_name}</strong>
  <br />
  <span>course_web_publishing_action_type: </span>
  <strong>{pageContext.course_web_publishing_action_type}</strong>
  <br />
  <span>course_web_publishing_action_type_id: </span>
  <strong>{pageContext.course_web_publishing_action_type_id}</strong>
  <br />
  <span>date_time_display: </span>
  <strong>{pageContext.date_time_display}</strong>
  <br />
  <span>days_of_the_week: </span>
  <strong>{pageContext.days_of_the_week}</strong>
  <br />
  <span>display_address: </span>
  <strong>{pageContext.display_address}</strong>
  <br />
  <span>email_registration_description: </span>
  <strong>{pageContext.email_registration_description}</strong>
  <br />
  <span>end_date: </span>
  <strong>{pageContext.end_date}</strong>
  <br />
  <span>geocode_address: </span>
  <strong>{pageContext.geocode_address}</strong>
  <br />
  <span>id: </span>
  <strong>{pageContext.id}</strong>
  <br />
  <span>isCreatedByStatefulCreatePages: </span>
  <strong>{pageContext.isCreatedByStatefulCreatePages}</strong>
  <br />
  <span>is_full: </span>
  <strong>{pageContext.is_full}</strong>
  <br />
  <span>is_restricted_registration: </span>
  <strong>{pageContext.is_restricted_registration}</strong>
  <br />
  <span>location_lat: </span>
  <strong>{pageContext.location_lat}</strong>
  <br />
  <span>location_lng: </span>
  <strong>{pageContext.location_lng}</strong>
  <br />
  <span>omit_dates: </span>
  <strong>{pageContext.omit_dates}</strong>
  <br />
  <span>phone_registration_description: </span>
  <strong>{pageContext.phone_registration_description}</strong>
  <br />
  <span>public_note: </span>
  <strong>{pageContext.public_note}</strong>
  <br />
  <span>room: </span>
  <strong>{pageContext.room}</strong>
  <br />
  <span>start_date: </span>
  <strong>{pageContext.start_date}</strong>
  <br />
  <br />
  <br />
  <br />
  <Link to="/dir-sample">
    <h2>Back to Directory</h2>
  </Link>
</main> */
}

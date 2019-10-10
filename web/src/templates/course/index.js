// Course.js:
// This is the course detail page data template.
// todo: section consolidation and cleanup/refactor

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
import ImgMatch from 'components/core/ImgMatch';
import Section from 'components/library/Elements/Section';

// Sections
import QuestionsCallout from 'sections/QuestionsCallout';
import CourseSplitLinks from 'sections/CourseSplitLinks';

// Helpers
import slugify from 'helpers/slugify';

import ContentOverlayButton from 'components/library/ContentOverlay';

// Styles
import {
  Hero,
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
  SecondaryColor: Theme.Color.Deepsea,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: ThemeProps.BgColor,
  color: ThemeProps.PrimaryColor,
  textAlign: 'center',
};

// Render Page
const Course = ({ pageContext }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log('pageContext:');
  // console.log(pageContext);
  // console.log('data:');
  // console.log(data);
  // console.log(locationMatch(pageContext.county_id, pageContext.state_id, pageContext.locationMeta.state.name));

  return (
    <Layout {...ThemeProps}>
      <HeroContainer {...HeroProps}>
        <Hero
          as="article"
          pb={[4, 3]}
          px={[1, 1, 0]}
        >
          <Hero.Avatar>
            <ImgMatch src="avatar-yoda.jpg" AltText="Course avatar" />
          </Hero.Avatar>
          <Hero.Tags as="ul">
            <li>
              <Link to={'/programs'}>programs</Link>
            </li>
            <li>
              <Link
                to={
                  '/' +
                  slugify(pageContext.category_group_name.toLowerCase()) +
                  '/' +
                  slugify(pageContext.category_group_name.toLowerCase())
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
        </Hero>
      </HeroContainer>

      <Spacer>
        <Spacer.Line />
      </Spacer>

      <Section bg="Cream" textAlign="center">
        <Flex
          as="article"
          flexDirection="column"
          flexWrap="wrap"
          pt={[2, 2, 4, 4]}
          pb={[1, 1, 2, 2]}
          m={'0 auto'}
          maxWidth={Theme.Base.Grid.ReadingWidth}
        >
          <Text as="p" color="Nova" className="lead">
            {pageContext.date_time_display}
          </Text>
          <Text as="p" color="Galaxy" className="lead">
            {pageContext.course_type_long_description}
          </Text>
        </Flex>
      </Section>

      <Spacer>
        <Spacer.Line />
      </Spacer>

      <Section
        bg="White"
        textAlign="center"
        pt={[6, 6, 8, 8]}
        pb={[2, 2, 3, 3]}
      >
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
          {pageContext.room && (
            <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[2, 2, 6]}>
              <Text as="p" color="Galaxy" textAlign="center" pb={0}>
                Room
                <br />
                <Text as="span" color="Nova">
                  {pageContext.room}
                </Text>
              </Text>
            </Box>
          )}
          {pageContext.age_range_display && (
            <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[3, 3, 6]}>
              <Text as="p" color="Galaxy" textAlign="center" pb={0}>
                Level
                <br />
                <Text as="span" color="Nova">
                  {pageContext.age_range_display}
                </Text>
              </Text>
            </Box>
          )}
        </Drawer>
      </Section>

      <Toggle py={1} onClick={() => setIsExpanded(!isExpanded)}>
        <Text color={Theme.Color.Galaxy}>
          {isExpanded ? 'show less' : 'show more'}
        </Text>
      </Toggle>

      <QuestionsCallout />

      <CourseFooter bg="Sky" color="White">
        <CourseFooter.Course as="article" m="0 auto">
          <Text className="h5" fontWeight="400" mb={1}>
            Let's play!
          </Text>
          <Text as="h3" mb={1}>
            {pageContext.course_type_name}
          </Text>
          <Text className="h4" as="p" color="Deepsea" fontWeight="400">
            {pageContext.date_time_display}
          </Text>
          <Btn
            Label="Enroll Now"
            Destination="/"
            BgColor={props => props.theme.Color.Nova}
            TextColor={props => props.theme.Color.White}
          />
        </CourseFooter.Course>
      </CourseFooter>

      <CourseSplitLinks pageContext={pageContext} themeProps={ThemeProps} />
    </Layout>
  );
};

export default Course;

//////////////////////////////////////////////////////////////////////
// End Component

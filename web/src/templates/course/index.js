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
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Styles
import {
  Hero,
  Section,
  Lead,
  Spacer,
  QuestionsNav,
  Collapse,
  Drawer,
  CourseFooter,
  Explore,
} from './styles.scss';

// Constants
import { Box, Flex, Text } from 'components/library/Elements';

// Data
import CalloutBg from './assets/cta__courses.jpg';
import Carat from './assets/arrow--left.svg';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const Course = ({ pageContext }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryMeta = CategoryMetaMatch(pageContext.category_group_name);

  console.log(pageContext);
  console.log('CategoryMetaMatch:');
  console.log(categoryMeta);

  return (
    <Layout
      BgColor={categoryMeta.theme.bgColor}
      PrimaryColor={categoryMeta.theme.primaryColor}
      SecondaryColor={categoryMeta.theme.secondaryColor}
      TertiaryColor={categoryMeta.theme.tertiaryColor}
    >
      <HeroContainer
        bg={categoryMeta.theme.bgColor}
        color={categoryMeta.theme.primaryColor}
      >
        <Flex
          as="article"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={props => props.theme.Grid.SiteWidth}
          m="0 auto"
          pb={[4, 3]}
          px={[1, 1, 0]}
        >
          <Hero.Avatar>
            {/* <ImgQuery src={CalloutBg} AltText="Avatar" /> */}
          </Hero.Avatar>
          <Hero.Tags as="ul">
            <li>{pageContext.category_group_name}</li>
            <li>{pageContext.course_type_group}</li>
            <li>
              ages {pageContext.age_range_start}-{pageContext.age_range_end}
            </li>
            {pageContext.room && <li>{pageContext.room}</li>}
          </Hero.Tags>
          <Text as="h3" mt={1}>
            {pageContext.course_type_name}
          </Text>
          <Hero.Date as="p" fontSize={[0, 1, 3]} mt={[1, 1, 0]} mb={1}>
            {pageContext.date_time_display}
          </Hero.Date>
          <Btn
            Label="Enroll Now"
            Size="Large"
            Destination="/"
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

      <Section
        as="section"
        bg="Cream"
        pt={[7, 7, 9, 9, 11]}
        pb={[6, 6, 8, 8, 10]}
      >
        <Flex
          as="article"
          px={[2, 2, 2]}
          flexDirection="column"
          flexWrap="wrap"
          m={'0 auto'}
          css={css`
            max-width: 1000px;
          `}
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

      <Section
        as="section"
        bg="White"
        px={[1, 1, 2, 2]}
        pt={[6, 6, 8, 8]}
        pb={[2, 2, 3, 3]}
      >
        <Flex
          as="article"
          px={[1, 1, 2, 6]}
          width={1}
          maxWidth={props => props.theme.Grid.SiteWidth}
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

      <Section as="section" bg="White" px={[1, 1, 2, 2]}>
        <Drawer
          as="article"
          px={[1, 1, 2, 6]}
          width={1}
          className={isExpanded ? 'expanded' : 'collapsed'}
        >
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy">
              Room
              <br />
              <Text as="span" color="Nova">
                {pageContext.room}
              </Text>
            </Text>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} mb={[1, 1, 0]}>
            <Text as="p" color="Galaxy">
              Level
              <br />
              <Text as="span" color="Nova">
                {pageContext.age_range_display}
              </Text>
            </Text>
          </Box>
        </Drawer>
      </Section>

      <Collapse py={1} onClick={() => setIsExpanded(!isExpanded)}>
        <Text>{isExpanded ? 'show less' : 'show more'}</Text>
      </Collapse>

      <Section
        as="section"
        bg="Galaxy"
        bgImage={CalloutBg}
        color="white"
        width={1}
      >
        <Box
          bg={'rgba(82, 5, 137, 0.8)'}
          px={[1, 1, 2, 2, 2]}
          pt={[6, 6, 8, 8]}
          pb={1}
          width={1}
        >
          <Flex
            as="article"
            width={1}
            maxWidth={props => props.theme.Grid.SiteWidth}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box width={1}>
              <Text as="span" fontSize={4} mt={1}>
                Questions?
              </Text>
              <Text as="h3" mt={1} mb={1}>
                Learn more about our workshops.
              </Text>
              <Btn
                Label="Get in touch"
                Destination="/"
                BgColor={'rgba(250, 250, 250, 0.4)'}
                TextColor={props => props.theme.Color.Galaxy}
              />
              <QuestionsNav as="ul" fontSize={[1, 1, 2, 3, 3]} mt={7}>
                <li>Robotics</li>
                <li>Intro to STEM</li>
                <li>Gaming</li>
                <li>Advanced Engineering</li>
                <li>Engineering Themes</li>
              </QuestionsNav>
            </Box>
          </Flex>
        </Box>
      </Section>

      <CourseFooter
        as="section"
        bg={categoryMeta.theme.bgColor}
        px={1}
        pt={8}
        pb={1}
      >
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

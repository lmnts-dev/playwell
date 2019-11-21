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
import ImgMatch from 'components/core/ImgMatch';
import Section from 'components/library/Elements/Section';
import SpacerCentered from 'components/library/Spacer/Centered';

// Sections
import QuestionsCallout from 'sections/QuestionsCallout';
import CourseSplitLinks from 'sections/CourseSplitLinks';

// Helpers
import slugify from 'helpers/slugify';
import { CategoryMetaMatch } from 'components/library/CategoryMetaMatch';

// Styles
import { Hero, Toggle, Drawer, CourseFooter } from './styles.scss';

// Constants
import { Box, Flex, Text } from 'components/library/Elements';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const Course = ({ pageContext }) => {
  // Create States
  const [isExpanded, setIsExpanded] = useState(false);

  // Get Category Meta
  const categoryMeta = CategoryMetaMatch(pageContext.category_group_name);

  // Props
  const themeProps = {
    BgColor: categoryMeta ? categoryMeta.theme.bgColor : Theme.Color.Nova,
    PrimaryColor: categoryMeta
      ? categoryMeta.theme.primaryColor
      : Theme.Color.White,
    SecondaryColor: categoryMeta
      ? categoryMeta.theme.secondaryColor
      : Theme.Color.Deepsea,
    TertiaryColor: categoryMeta
      ? categoryMeta.theme.tertiaryColor
      : Theme.Color.White,
  };

  const heroProps = {
    bg: themeProps.BgColor,
    color: themeProps.PrimaryColor,
    textAlign: 'center',
  };

  // Create our slugs
  const pageSlug =
    slugify(pageContext.locationMeta.state.name) +
    '/' +
    slugify(pageContext.locationMeta.county.cost_code_name) +
    '/' +
    slugify(pageContext.locationMeta.county.name);
  // Check our County names if they contain 'County'
  const countyClean = countyName => {
    if (
      countyName.toLowerCase().includes('county') ||
      countyName.toLowerCase().includes('district')
    ) {
      return countyName;
    } else {
      return countyName + ' County';
    }
  };

  // console.log('pageContext:');
  // console.log(pageContext);
  // console.log('data:');
  // console.log(data);
  // console.log(locationMatch(pageContext.county_id, pageContext.state_id, pageContext.locationMeta.state.name));

  return (
    <Layout {...themeProps}>
      <HeroContainer {...heroProps}>
        <Hero as="article" {...heroProps} {...themeProps}>
          <Hero.Avatar>
            <ImgMatch src="avatar-yoda.jpg" AltText="Course avatar" />
          </Hero.Avatar>
          <ul className="hero-tags">
            <li>
              <Link
                to={'/programs/' + slugify(pageContext.locationMeta.state.name)}
              >
                {pageContext.locationMeta.state.name}
              </Link>
            </li>

            {pageContext.locationMeta.county.cost_code_name !=
            pageContext.locationMeta.state.name ? (
              <li>
                <Link
                  to={
                    '/programs/' +
                    slugify(pageContext.locationMeta.state.name) +
                    '/' +
                    slugify(pageContext.locationMeta.county.cost_code_name)
                  }
                >
                  {pageContext.locationMeta.county.cost_code_name}
                </Link>
              </li>
            ) : (
              false
            )}

            {pageContext.locationMeta.county.cost_code_name !=
              pageContext.locationMeta.county.name ||
            pageContext.locationMeta.county.name !=
              pageContext.locationMeta.state.name ? (
              <li>
                <Link to={'/programs/' + pageSlug}>
                  {countyClean(pageContext.locationMeta.county.name)}
                </Link>
              </li>
            ) : (
              false
            )}

            <li>
              <Link
                to={
                  '/programs/' +
                  pageSlug +
                  '?show=' +
                  slugify(pageContext.category_group_name) +
                  's'
                }
              >
                {pageContext.category_group_name}
              </Link>
            </li>

            <li>
              <Link
                to={
                  '/programs/' +
                  pageSlug +
                  '?show=' +
                  slugify(pageContext.course_type_group)
                }
              >
                {pageContext.course_type_group}
              </Link>
            </li>

            <li>
              <Link
                to={
                  '/' +
                  pageSlug +
                  '/ages-' +
                  pageContext.age_range_start +
                  '-' +
                  pageContext.age_range_end
                }
              >
                ages {pageContext.age_range_start}-{pageContext.age_range_end}
              </Link>
            </li>
            {pageContext.room && <li>{pageContext.room}</li>}
          </ul>
          <Hero.Headline className="h3">
            {pageContext.category_group_name +
              ': ' +
              pageContext.course_type_name}
          </Hero.Headline>
          <Hero.Date className="h5">{pageContext.date_time_display}</Hero.Date>
          {/* Content Overlay Modal Toggle */}
          {/* <ContentOverlayButton>toggle</ContentOverlayButton> */}
          <a
            href={pageContext.action_url}
            className="btn"
            target="_blank"
            rel="nofollow noreferrer"
          >
            Enroll Now
          </a>
          <Box my={2}>
            <p>
              {pageContext.client_location_name}
              <br />
              {pageContext.display_address}
            </p>
          </Box>
          <ul className="hero-tags">
            <li>more</li>
          </ul>
        </Hero>
      </HeroContainer>

      <SpacerCentered />

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
          <Text as="p" className="lead" color="Nova" fontWeight={600}>
            {pageContext.date_time_display}
          </Text>
          <Text as="p" className="lead" color="Galaxy">
            {pageContext.course_type_long_description}
          </Text>
        </Flex>
      </Section>

      <SpacerCentered />

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
        <Text color={Theme.Color.Galaxy} fontWeight={500}>
          {isExpanded ? 'show less' : 'show more'}
        </Text>
      </Toggle>

      <QuestionsCallout />

      <Section bg={themeProps.BgColor} color="White">
        <CourseFooter bg={themeProps.BgColor}>
          <div className="course">
            <h5>Let's play!</h5>
            <h2>{pageContext.course_type_name}</h2>
            <span className="h5">{pageContext.date_time_display}</span>
            <a
              href={pageContext.action_url}
              className="btn"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Enroll Now
            </a>
          </div>
        </CourseFooter>
      </Section>

      <CourseSplitLinks
        countyName={pageContext.locationMeta.county.name}
        stateName={pageContext.locationMeta.state.name}
        costCodeName={pageContext.locationMeta.county.cost_code_name}
        pageContext={pageContext}
        themeProps={themeProps}
      />
    </Layout>
  );
};

export default Course;

//////////////////////////////////////////////////////////////////////
// End Component

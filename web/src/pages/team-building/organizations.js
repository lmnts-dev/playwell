// Organizations page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import Marquee from 'components/library/Section/Marquee';
import PostCard from 'components/library/Section/PostCard';
import TextWithManyImages from 'components/library/Section/TextWithManyImages';
import styled from 'styled-components';

import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Sections
import OrganizationsHero from 'sections/OrganizationsHero';
import OrganizationsCulture from 'sections/OrganizationsCulture';
import OrganizationsSplitLinks from 'sections/OrganizationsSplitLinks';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.Primary,
  SecondaryColor: Theme.Color.Dino,
  TertiaryColor: Theme.Color.Sunset,
};


const StoriesFeature = styled.div`
  padding: calc(${Theme.Base.Size.Lg}) 0;

  .h3 {
    font-weight: 700;
    padding-bottom: calc(${Theme.Base.Size.Lg} / 1.5);
  }

  .stories-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .post-card {
      width: 47%;
      padding: 0;
    }
  }
`;


// Render Page
const OrganizationsPage = () => {
  // Use our hook's data as source
  // const fetchedData = DataFetch();

  return (
    <Layout {...ThemeProps}>
      <OrganizationsHero />
      <OrganizationsCulture />

      {/* <BasicSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
        <BasicInner>
          <StoriesFeature>
            <div className="h3">Organization Stories</div>
            <div className="stories-container">
              {Stories.map(story => (
                <PostCard 
                  key={story.index}
                  link={story.link}
                  tags={story.tags}
                  description={story.detail}
                  title={story.header}
                />
              ))}
            </div>
          </StoriesFeature>
        </BasicInner>
      </BasicSection> */}

      <BasicSection BgColor={Theme.Color.White} BorderTop={Theme.Color.Clay}>
        <BasicInner>
          <CenteredTitle
            Title={null}
            Class="h3"
            TextColor={Theme.Color.Sunset}
          />
        </BasicInner>
        <Marquee
          images={[
            'visa.png',
            'microsoft.png',
            'clorox.png',
            'google.png',
            'pixar.jpeg',
          ]}
          SquareFormat
          Shadow
        />
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Dino}
        noPaddingTop
        noPaddingBottom
      >
        <BasicInner noPaddingLeft>
          <TextWithManyImages
            Reversed
            Text="Our goal is to remind your staff that work can be fun and challenging at the same time."
            Images={['kids-1.jpg', 'lego-head.png', 'boy-3.png']}
          />
        </BasicInner>
      </BasicSection>

      <OrganizationsSplitLinks themeProps={ThemeProps} />
    </Layout>
  );
};

export default OrganizationsPage;

//////////////////////////////////////////////////////////////////////
// End Component


const Stories = [
  {
    index: 0,
    header: 'Building a Coral Reef out of Lego® materials',
    link: '/',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
  {
    index: 1,
    header: 'Building a Coral Reef out of Lego® materials',
    link: '/',
    detail:
      'We have run our LEGO-Inspired STEM Play Activations for companies around the country.',
    tags: [
      {
        id: 0,
        tag: 'Engineering',
      },
      {
        id: 1,
        tag: 'Camp',
      },
      {
        id: 2,
        tag: 'Mechanics',
      },
      {
        id: 3,
        tag: 'Robotics',
      },
    ],
  },
];

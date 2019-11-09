// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import Spacer from 'components/library/Spacer';
import ImgMatch from 'components/core/ImgMatch';
import { Box } from 'components/library/Elements';

// Sections
import HomeHero from 'sections/HomeHero';
import SimpleTextWithImage from 'components/library/Section/SimpleTextWithImage';
import EdgeImageWithText from 'components/library/Section/EdgeImageWithText';
import ImageAccordianFeature from 'components/library/Section/ImageAccordianFeature';
import HomeCommunity from 'sections/HomeCommunity';
import CenteredTitle from 'components/library/Elements/CenteredTitle';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Background,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Nova,
};

const Centered = styled(CenteredTitle)`
  &.community {
    ~ .gatsby-image-wrapper {
      height: 130%;
      width: 100%;
      position: absolute !important;
      top: -30%;
      left: -5%;
    }
  }
`;

// Render Page
const HomePage = () => (
  <Layout {...ThemeProps}>
    <Main>
      <HomeHero slides={HeroSlides} Decorator={Decorator} />
      <Spacer indent>Scroll</Spacer>

      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <SimpleTextWithImage
            Caption="Taking our imagination up a level"
            Header="Creativity, Confidence &amp; Collaboration."
            Paragraph='Play-Well LEGO®-inspired programs spark "Aha" moments as kids begin to grasp the fundamental principles of engineering and physics. The ability boosts their confidence, creativity and ability to collaborate.'
            Image="intro-smiles.png"
            ButtonText="What We Do"
            ButtonDest="/"
          />
        </BasicInner>
      </BasicSection>

      {/*<BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <Centered
            Title="People Who've Played Well with Us"
            MaxWidth="400px"
            TextColor={Theme.Color.Sunset}
            Class="h3"
            className="community"
          />
          <ImgMatch
            src="cloud-big.png"
            objectFit="contain"
            objectPosition="left center"
          />
        </BasicInner>
        <HomeCommunity slides={CommunitySlides} />
      </BasicSection>*/}

      <BasicSection BgColor={Theme.Color.Ocean} TextColor={Theme.Color.White}>
        <BasicInner noPaddingLeft>
          <EdgeImageWithText
            Reversed
            LightText
            Caption="The Importance of STEM Education"
            Header="Building a Better Future"
            Image="sailboat.png"
            Paragraph="STEM education creates critical thinkers, increases science literacy, and enables the next generation of innovators. Innovation leads to new products and processes that sustain our economy in an ever increasing technologically driven society."
            Paragraph2="Having activities that show real-life implication of STEM can pull together the ideas presented in school and help to show how they benefit our society and even our world as a whole"
            ButtonText="Programs"
            ButtonDest="/programs"
          />
        </BasicInner>
      </BasicSection>

      <Decorator>
        <div className="decorator__better-future decorator__better-future--top">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__better-future decorator__better-future--bottom">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
      </Decorator>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
      >
        <BasicInner>
          <SimpleTextWithImage
            Caption="Our impact on STEM Education"
            Header="Children Learn While Playing"
            Paragraph="Our assessments measured three goals including: student's knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feeling towards STEM subjects. For example, the definition of gravity or friction, or that when two gears interlock their teeth its called meshing."
            Image="graph.png"
            ButtonText="How We Do It"
            ButtonDest="/who-we-are/how"
          />
        </BasicInner>
      </BasicSection>

      <BasicSection BgColor={Theme.Color.Blush}>
        <BasicInner>
          <Centered
            Title="Our Programs"
            TextColor={Theme.Color.Nova}
            Class="h3"
          />
        </BasicInner>
      </BasicSection>

      <BasicSection
        BgColor={Theme.Color.Blush}
        TextColor={Theme.Color.Sunset}
        noPaddingTop
      >
        <ImageAccordianFeature
          Links={[
            { link: '/', label: 'Robotics' },
            { link: '/', label: 'Intro to STEM' },
            { link: '/', label: 'Gaming' },
            { link: '/', label: 'Advanced Engineering' },
            { link: '/', label: 'Engineering Themes' },
          ]}
          Accordians={[
            {
              header: 'Workshops',
              paragraph:
                'Play-Well LEGO@-inspired programs can be tailored to your needs. We offer workshops for Girl Scouts, Homeschool Groups, Boy Scouts, In-school field trips and more.',
              image: 'girl-3.jpg',
              buttonText: 'Learn More',
              buttonLink: '/programs/workshops',
            },
            {
              header: 'Classes',
              paragraph:
                'What can you do with over 20,000 pieces of LEGO®? In our Engineering with LEGO® enrichment programs kids take on real-life engineering challenges allowing them to see STEM in action. Your child will explore concepts in physics, architecture, and mechanical engineering. Our students find inventive solutions in a fun-filled context that supports the growth of young minds through hands-on, minds-on learning.',
              image: 'girl-2.jpg',
              buttonText: 'Learn More',
              buttonLink: '/programs/classes',
            },
            {
              header: 'Camps',
              paragraph:
                "We'll help unleash your child's inner engineer in our STEM summer camps. They'll have so much fun in our LEGO-inspired summer camps that they won't even realize how much they're learning!",
              image: 'girl-1.jpg',
              buttonText: 'Learn More',
              buttonLink: '/programs/summer-camps',
            },
          ]}
        />
      </BasicSection>
      <BasicSection
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.Dino}
        noPaddingTop
      >
        <BasicInner>
          <SpecialSimpleTextWithImage
            Caption="It starts with play"
            Header="Build Your Own World of Opportunity"
            Paragraph="Activate your child's imagination with our on-line play zone or awaken your own inner kid with out LEGO-inspired games &amp; activities."
            Image="lego-ladder.png"
            className="overflow-image"
          />
        </BasicInner>
      </BasicSection>
    </Main>
  </Layout>
);

// Styles
const Main = styled.main`
  overflow: hidden;
`;

const SpecialSimpleTextWithImage = styled(SimpleTextWithImage)`
  &.overflow-image {
    align-items: stretch;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      flex-direction: column-reverse;
      display: flex;
    }
    .text {
      flex: 2;
    }
    .image {
      flex: 1;
      position: relative;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 100%;
        max-height: calc(${Theme.Base.Size.Lg} * 5);
        height: 100vw;
        position: static;
        display: none;
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        left: 0;
        bottom: 0;
        width: 50vw;
        height: 200%;
        bottom: -50%;
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          width: 100%;
          height: 120%;
          top: -120%;
          bottom: 0;
        }
        img {
          object-position: 0% 100% !important;
        }
      }
    }
  }
`;

const Decorator = styled(Box)`
  position: relative;
  .decorator__community {
    left: 0;
    top: 0;
    position: absolute;
    width: 20%;
  }
  .decorator__hero {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
    z-index: 4;
    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
      right: -100px;
      width: 140px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -120px;
        width: 200px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -170px;
        width: 340px;
      }
    }
    &--waterfall {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 3);
      
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 0;
        width: 600px;
      }
    }
    &--volcano {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 9);
      
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 35vw;
        width: 400px;
      }
    }
    &--left {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -70px;
        width: 180px;
      }
    }
  }
  .decorator__footer {
    position: absolute;
    /* top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1); */
    z-index: 4;
    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -25px;
        width: 180px;
      }
    }
    &--bottom {
      left: 50%;
      width: 400px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        width: 400px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        width: 400px;
      }
    }
  }
  .decorator__better-future {
    position: absolute;
    z-index: 4;
    &--top {
      bottom: calc(${Theme.Root.Size} * 1.6);
      right: -130px;
      width: 200px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -190px;
        width: 300px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -230px;
        width: 340px;
      }
    }
    &--bottom {
      bottom: calc(${Theme.Root.Size} * -0.8);
      right: -20px;
      width: 200px;
      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -20px;
        width: 300px;
      }
      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -30px;
        width: 340px;
      }
    }
  }
`;

// Data
const HeroSlides = [
  {
    index: 0,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
  {
    index: 1,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
  {
    index: 2,
    message: 'People are natural engineers. We help kids realize it.',
    detail: 'Purposeful Play to Build a Better Future',
  },
];

const CommunitySlides = [
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
  {
    index: 2,
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
    index: 3,
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

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component

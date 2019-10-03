// How.js:
// This is why portion of the who section of the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Layout from 'components/core/Layout';
import { Icon } from 'components/library/Icons';
import Btn from 'components/library/Btn';
import ImageAccordian from 'components/library/ImageAccordian';
import ImgMatch from 'components/core/ImgMatch';
import ImageWithTextBlock from 'components/library/Section/ImageWithTextBlock';
import Marquee from 'components/library/Section/Marquee';
import LegoList from 'components/library/Section/LegoList';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////


const SimpleTextWithImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .image, .text {
    flex: 1;
  }

  .image {
    padding-left: calc(${Root.Size});
  }

  .text {
    padding-right: calc(${Root.Size});

    > * {
      max-width: calc(${Root.Size} * 7.5);
    }
  }

  .h6, .h2 {
    font-weight: 700;
  }

  .h2 {
    color: ${Theme.Color.Sunset};
    padding: calc(${Root.Size} / 5) 0;
  }
`

const CenteredTitle = styled.div`
  text-align: center;
  font-weight: 700;
  max-width: ${props => props.MaxWidth ? props.MaxWidth : '100%' };
  margin: 0 auto;
`

const CurveAndAngle = styled.div`
  position: relative;
  width: 100vw;
  height: 30vw;

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 85%;
    z-index: 2;
  }

  .footer-curve-slice {
    width: 100%;
    height: calc(100% - ${Root.Size});
    z-index: 1;
    margin-bottom: calc(${Root.Size});
  }

  .absolute-image {
    position: absolute;
    width: 25vw;
    height: 25vw;
    bottom: 0;
    right: 2vw;
  }
`

const AccordianFeature = styled.div`

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: calc(${Root.Size} / 3);

    li {
      font-weight: 700;
      padding: calc(${Root.Size} / 6);

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      a {
        color: ${Theme.Color.Clay};

        &:visited {
          color: ${Theme.Color.Clay};
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    .image-accordian {
      flex: 1;

      &:nth-of-type(2) {
        margin: 0 calc(${Root.Size} / 2);
      }
    }
  }

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vw;
  }
`

// Render Page
const WhoHowPage = () => {
    return (
      <Layout>

        <BasicSection
          BgColor={Theme.Color.Lilac}
          TextColor={Theme.Color.White}
          BorderTop={Theme.Color.White}
        >
          <BasicInner>
            <CenteredTitle MaxWidth="500px">
              <div className="h3">
                Lorem ipsum dolar sit amet, consectetur a.
              </div>
            </CenteredTitle>
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Lilac}
          TextColor={Theme.Color.White}
          noPaddingTop
          noPaddingBottom
        >
          <BasicInner>
            <LegoList 
              TitleOne="Creative Collaboration" 
              TitleTwo="New Perspectives" 
              TitleThree="Staff Morale" 
              TextOne="A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best."
              TextTwo="A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution." 
              TextThree="A rejuvenated staff who rediscovers what they find fun about their job and their organization."
            />
          </BasicInner>
        </BasicSection>
        <BasicSection noPaddingTop noPaddingBottom BgColor={Theme.Color.Lilac}>
            <CurveAndAngle>
              <FooterCurveSlice bgColor={Theme.Color.Dino} />
              <FooterAngleSlice bgColor={Theme.Color.Background} />
              <div className="absolute-image">
                <ImgMatch src="gears.png" />
              </div>
            </CurveAndAngle>
        </BasicSection>

        <BasicSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino} noPaddingTop>
          <BasicInner>
            <SimpleTextWithImage>
              <div className="text">
                <div className="h6">Our Impact on STEM Comprehension</div>
                <div className="h2">Children Learn While Playing</div>
                <p className="p-lg">Our assessment measured three goals including: students knowledge of STEM terms or concepts, ability to generalize information, and increasing positive feelings towards STEM subjects. For example, the definition of gravity or friction, or that when two gears interlock their teeth its called meshing.</p>
              </div>
              <div className="image">
                <ImgMatch src="graph.png"/>
              </div>
            </SimpleTextWithImage>
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Blush}
          TextColor={Theme.Color.Nova}
        >
          <BasicInner>
            <CenteredTitle>
              <div className="headline">
                Our Programs
              </div>
            </CenteredTitle>
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Blush}
          TextColor={Theme.Color.Clay}
          noPaddingTop
        >
          <AccordianFeature>
            <BasicInner WideWidth>
              <ul>
                <li><a className="h6" href="/">Robotics</a></li>
                <li><a className="h6" href="/">Intro to STEM</a></li>
                <li><a className="h6" href="/">Gaming</a></li>
                <li><a className="h6" href="/">Advanced Engineering</a></li>
                <li><a className="h6" href="/">Engineering Themes</a></li>
              </ul>
              <div className="container">
                <ImageAccordian 
                  Header="Worshops" 
                  Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                  Image="intro-smiles.jpg"
                />
                <ImageAccordian 
                  Header="Classes" 
                  Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                  Image="intro-smiles.jpg"
                />
                <ImageAccordian 
                  Header="Camps" 
                  Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                  Image="intro-smiles.jpg"
                />
              </div>
            </BasicInner>
            <FooterAngleSlice bgColor={Theme.Color.Background} />
          </AccordianFeature>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Blush}
          noPaddingTop
        >
          <BasicInner>
            <CenteredTitle>
              <div className="headline">
                Our Process
              </div>
            </CenteredTitle>
          </BasicInner>
        </BasicSection>

        <BasicSection
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Sunset}
          noPaddingTop
          noPaddingBottom
        >
          <BasicInner noPaddingLeft noPaddingRight>
            <ImageWithTextBlock 
              Image="intro-smiles.jpg" 
              Header="Build problem-solving skills" 
              Number="01"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla viverra enim sed magna vestibulum, nec imperdiet orci
              egestas. Sed in magna sapien." 
            />
            <ImageWithTextBlock 
              reversedOrder 
              Image="intro-smiles.jpg" 
              Header="Provide an opportunity for creative expression" 
              Number="06"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla viverra enim sed magna vestibulum, nec imperdiet orci
              egestas. Sed in magna sapien." 
            >
              <Icon Name="gear" />
            </ImageWithTextBlock>
            <ImageWithTextBlock 
              Image="intro-smiles.jpg" 
              Header="Foster a greater appreciation of how things work" 
              Number="03"
              Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla viverra enim sed magna vestibulum, nec imperdiet orci
              egestas. Sed in magna sapien." 
            />
          </BasicInner>
        </BasicSection>
      </Layout>
    );
  };
  
  export default WhoHowPage;
  
  //////////////////////////////////////////////////////////////////////
  // End Component
  
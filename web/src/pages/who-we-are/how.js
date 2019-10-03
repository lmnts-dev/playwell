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
  max-width: calc(${Root.Size} * 7);
  margin: 0 auto;
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
            <CenteredTitle>
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

        <BasicSection BgColor={Theme.Color.Background} TextColor={Theme.Color.Dino}>
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
  
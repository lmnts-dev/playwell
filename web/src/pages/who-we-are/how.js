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



// Render Page
const WhoHowPage = () => {
    return (
      <Layout>
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
      </Layout>
    );
  };
  
  export default WhoHowPage;
  
  //////////////////////////////////////////////////////////////////////
  // End Component
  
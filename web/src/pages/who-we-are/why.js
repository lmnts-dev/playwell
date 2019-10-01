// Why.js:
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
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Styles

// Constants
import { Theme, Root } from 'constants/Theme';

// Data
// import ImgPlaceholder from './assets/placeholder.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LargeTextBlock = styled.div`
`
const Number = styled.div`
    @extend .h1;
    color: ${Theme.Color.Blush};
`

const ImageWithText = styled.div`
`

// Render Page
const WhoWhyPage = () => {
    return (
      <Layout>
          <ImageWithText>
              <div className="image">
                <ImgMatch src="intro-smiles.jpg"/>
              </div>
              <div className="text">
                <Number>01</Number>
                <div className="h4">
                    Build problem-solving skills
                </div>
                <p className="p-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra enim sed magna vestibulum, nec imperdiet orci egestas. Sed in magna sapien. 
                </p>
              </div>
          </ImageWithText>
          <LargeTextBlock>
            <Number>04</Number>
            <div className="h4">Encourage the qualities of</div>
            <div className="headline txt-clr-eggplant">Inquisitiveness Self Reliance &amp; Self Confidence</div>
            <div className="h4">In children &amp; in everybody.</div>
          </LargeTextBlock>
      </Layout>
    );
  };
  
  export default WhoWhyPage;
  
  //////////////////////////////////////////////////////////////////////
  // End Component
  
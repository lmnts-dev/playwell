// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ArticleCardLayoutStyle = styled.div`
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         justify-content: space-between;

         .card {
           margin-right: calc(${Root.Size} * 0.5);
           margin-top: calc(${Root.Size} * 0.5);
           width: calc(50% - calc(${Root.Size} * 0.25));
           min-height: calc(${Root.Size} * 6);

           //all this craziness if for card widths and margin removal
           //if its the last card in the row
           //and full width cards if they're the last card
           &:nth-of-type(2n-1):last-of-type {
             width: 100%;
             margin-right: 0;
           }

           &:nth-of-type(3):last-of-type {
             width: calc(50% - calc(${Root.Size} * 0.25));
           }

           &:nth-of-type(2):last-of-type,
           &:nth-of-type(4):last-of-type {
             width: 100%;
             margin-right: 0;
           }

           &:nth-of-type(5):last-of-type {
             width: calc(66% - calc(${Root.Size} * 0.06));
             margin-right: 0;
           }

           &:nth-of-type(2n),
           &:nth-of-type(6),
           &:nth-of-type(3) {
             margin-right: 0;
           }

           &:nth-of-type(4),
           &:nth-of-type(5),
           &:nth-of-type(6) {
             width: calc(33.33% - calc(${Root.Size} * 0.3334));
           }

           &:nth-of-type(2),
           &:nth-of-type(4),
           &:nth-of-type(5) {
             margin-right: calc(${Root.Size} * 0.5);
           }

           &:nth-of-type(1) {
             min-width: 100%;
             min-height: calc(${Root.Size} * 7);
             margin-top: 0;

             .image {
               border-top-left-radius: ${Root.Size};
             }
           }
         }
       `;

export default ArticleCardLayoutStyle;

//////////////////////////////////////////////////////////////////////
// End Styles

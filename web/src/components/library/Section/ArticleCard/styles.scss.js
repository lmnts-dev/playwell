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

export const ArticleCardStyle = styled(Link)`
         position: relative;
         display: flex;
         flex-direction: column;
         padding: calc(${Root.Size} * 0.5) calc(${Root.Size} / 1);

         .image {
           position: absolute !important;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           z-index: 1;
           border-radius: calc(${Theme.Base.Size.Lg} / 5);

           &:after {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             content: '';
             background-color: ${hexToRGB(Theme.Color.Dino, 0.5)};
           }
         }

         .date,
         .title,
         .excerpt {
           position: relative;
           z-index: 2;
           color: ${Theme.Color.White};
         }

         .date {
           flex: 100;
           padding-bottom: ${Root.Size};
           text-transform: uppercase;
           letter-spacing: 0.05rem;
           font-weight: 700;
         }
       `;

export default ArticleCardStyle;

//////////////////////////////////////////////////////////////////////
// End Styles

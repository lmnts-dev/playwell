// MasonrySecction Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const MasonrySectionStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  overflow: visible;
`;

MasonrySectionStyle.Inner = styled(SectionInnerStyle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow: visible;

  /* Array-based gutters utilizing root variable multiple. */
  ${props =>
    props.Gutter
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Gutter[0] + ')'
      : 'padding-top: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-right: calc(' + Root.Size + ' * ' + props.Gutter[1] + ')'
      : null};
  ${props =>
    props.Gutter
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Gutter[2] + ')'
      : 'padding-bottom: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-left: calc(' +
        Root.Grid.Gutter.Left +
        ' + (' +
        Root.Size +
        ' * ' +
        props.Gutter[3] +
        '))'
      : null};

  @media (max-width: calc(${Theme.Base.Media.Width.Md})) {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
  }
`;

MasonrySectionStyle.Content = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: visible;
  max-width: ${Theme.Base.Grid.SiteWidth};

  /* Performance fixes on Chrome & Safari
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  /* Performance fixes on Chrome & Safari */
  /* -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000; */

  /* CSS Masonry */
  /* Read more: https://w3bits.com/css-masonry/ */
  /* column-width: 33%;
  column-count: ${props => (props.Columns ? props.Columns : 3)};
  column-gap: ${props =>
    props.ColumnGap
      ? ' calc(' + Root.Size + ' * ' + props.ColumnGap + ')'
      : 'calc(' + Root.Size + '* .25)'};

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    column-width: 100%;
    column-count: 1;
  } */


  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .widget-content {
    border-radius: ${Root.Radius};
    box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
    position: relative;
    overflow: hidden;
    flex: 30%;
    margin: calc(${Root.Size} / 5);
    width: 30%;
    display: flex;
    color: ${Theme.Color.White};
    margin-bottom: ${props =>
      props.ColumnGap
        ? ' calc(' + Root.Size + ' * ' + props.ColumnGap + ')'
        : 'calc(' + Root.Size + '* .25)'};

    .widget-headline {
      margin-bottom: calc(${Root.Size} * 2);
    }

    a, i {
      color: ${Theme.Color.White};
    }
    
    svg {
      fill: ${Theme.Color.White};
    }
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    .widget-content {
      flex: auto;
      margin: calc(${Root.Size} / 5) 0;
      width: 100%;
    }
  }
`;

export default MasonrySectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles

// SimpleSection Styles:

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

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SimpleSectionStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
`;

SimpleSectionStyle.Inner = styled(SectionInnerStyle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  /* Array-based gutters utilizing root variable multiple. */
  ${props =>
    props.Gutter
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Gutter[0] + ')'
      : 'padding-top: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-right: calc(' +
        Root.Grid.Gutter.Right +
        ' * ' +
        props.Gutter[1] +
        ')'
      : null};
  ${props =>
    props.Gutter
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Gutter[2] + ')'
      : 'padding-bottom: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-left: calc(' +
        Root.Grid.Gutter.Left +
        ' * ' +
        props.Gutter[3] +
        ')'
      : null};

  /* Gatsby-image based background images. */
  .section-img {
    position: ${props => (props.FluidHeight ? 'relative' : 'absolute')};
    width: ${props => (props.FluidHeight ? '100%' : 'auto')};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    ${props => (props.BgTint ? 'opacity: ' + props.BgTint + ';' : null)}
    img {
      height: 100%;
    }
    .img {
      height: 100%;
    }
  }
`;

SimpleSectionStyle.Content = styled(SectionContentStyle)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: ${props => (props.Flex ? props.Flex : 'row')};
  z-index: 2;
  width: 100%;

  /* Hide this section for fluid height of image. */
  display: ${props => (props.FluidHeight ? 'none' : 'flex')};
`;

export default SimpleSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles

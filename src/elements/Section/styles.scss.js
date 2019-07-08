// <Section> Styles:
// This is the primary Section style of the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SectionStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;

  /* Options */
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.SiteWidth)};
  min-height: ${props => (props.MinHeight ? props.MinHeight : 'auto')};
  justify-content: ${props =>
    props.JustifyContent ? props.JustifyContent : 'flex-start'};
  flex-direction: ${props => (props.FlexDir ? props.FlexDir : 'row')};
  align-items: ${props => (props.AlignItems ? props.AlignItems : 'flex-start')};

  /* Backgrounds */
  background: ${props => (props.Background ? props.Background : 'none')};
  background-size: cover;

  /* Text Color */
  color: ${props => (props.TextColor ? props.TextColor : 'inherit')};

  /* Padding */
  padding-left: ${props =>
    props.PaddingLeft ? props.PaddingLeft : Theme.Base.Grid.Gutter.Lg.Left};
  padding-right: ${props =>
    props.PaddingRight ? props.PaddingRight : Theme.Base.Grid.Gutter.Lg.Right};
  padding-top: ${props => (props.PaddingTop ? props.PaddingTop : '0px')};
  padding-bottom: ${props =>
    props.PaddingBottom ? props.PaddingBottom : '0px'};
`;

export default SectionStyle;
//////////////////////////////////////////////////////////////////////
// End Styles

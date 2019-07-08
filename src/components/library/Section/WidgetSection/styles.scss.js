// WidgetSection Styles:

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

const WidgetSection = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
`;

WidgetSection.Inner = styled(SectionInnerStyle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 400px;

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

WidgetSection.Content = styled(SectionContentStyle)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  .widget {
    width: 25%;
    padding: calc(${Root.Size} / 6);
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }

    @media (max-width: calc(${Theme.Base.Media.Width.Md} * 1.5)) {
      width: 50%;
      flex: unset;
      min-height: 150px;

      &:nth-child(odd) {
        padding-left: 0;
      }
      &:nth-child(even) {
        padding-right: 0;
      }
    }
  }
`;

export default WidgetSection;

//////////////////////////////////////////////////////////////////////
// End Styles

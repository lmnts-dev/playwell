// SubLevelPage Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const SlideSectionStyle = styled.div`
  width: 100%;
  overflow: hidden;

  /* Slick styles */
  .slick-slider {
    padding-bottom: calc(${Root.Size} / 2);
    margin-bottom: calc(${Root.Size} / 2);

    .slick-slide {
      &:first-child {
        .widget {
          padding-left: 0;
        }
      }
    }
    .slick-list {
      overflow: visible;
    }

    /* Arrows */
    .slick-arrow {
      top: calc((${Root.Size}) * -1);
      transform: none;
      right: 0;
      left: unset;
      width: calc(${Root.Size} * 0.75);
      height: calc(${Root.Size} * 0.75);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 400;
      background: rgba(0, 0, 0, 0);

      @media (max-width: calc(${Theme.Base.Media.Width.Md})) {
        top: calc((${Root.Size} * 1.8) * -1);
        width: calc(${Root.Size} * 1.5);
        height: calc(${Root.Size} * 1.5);
      }

      &.slick-prev {
        transform: rotate(180deg);
        right: calc((${Root.Size} * 0.75) + (${Root.Size} * 0.25));

        @media (max-width: calc(${Theme.Base.Media.Width.Md})) {
          right: calc((${Root.Size} * 1.5) + (${Root.Size} * 0.25));
        }
      }

      &.slick-next {
        right: 0;
      }

      &.slick-disabled {
        opacity: 0.4;
        .ico {
          opacity: 0.5;
        }
        &:hover {
          background: rgba(0, 0, 0, 0);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
      }

      &:hover {
        background: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.03);
      }

      .ico {
        position: absolute;
        left: 54%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:before {
        content: '';
      }
    }

    .slick-dots {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      padding: 0;
      margin: 0;

      @media (max-width: calc(${Theme.Base.Media.Width.Md})) {
        bottom: calc((${Root.Size} * .3) * -1);
      }

      li {
        margin: 0;
        padding: 0;
        width: 10px;
        height: 10px;
        margin-right: 5px;

        button {
          margin: 0;
          padding: 0;
          position: relative;
          width: 10px;
          height: 10px;
          margin-right: 5px;

          &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 7px;
            height: 7px;
            border: 1px solid ${Theme.Color.Black};
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

SlideSectionStyle.Inner = styled(SectionInnerStyle)`
  width: 100%;
  padding-bottom: 0;

  /* Array-based gutters utilizing root variable multiple. */
  ${props =>
    props.Gutter
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Gutter[0] + ')'
      : 'padding-top: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-right: calc(' + Root.Size + ' * ' + props.Gutter[1] + ')'
      : 'padding-right: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Gutter[2] + ')'
      : 'padding-bottom: 0'};
  ${props =>
    props.Gutter
      ? 'padding-left: calc(' +
        Root.Grid.Gutter.Left +
        ' + (' +
        Root.Size +
        ' * ' +
        props.Gutter[3] +
        '))'
      : 'padding-left: calc(' +
        Root.Grid.Gutter.Left +
        ' + ' +
        Root.Size +
        ')'};

  @media (max-width: calc(${Theme.Base.Media.Width.Md})) {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
  }
`;

SlideSectionStyle.Content = styled(SectionContentStyle)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;

  .widget {
    padding: calc(${Root.Size} / 6);
    height: ${props =>
      props.SectionSize
        ? 'calc(' + Root.Size + '*' + props.SectionSize + ')'
        : 'calc(' + Root.Size + '* 3)'};

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: calc(${Root.Size} / 3) calc(${Root.Size} / 4);
      height: ${props =>
        props.SectionSize
          ? 'calc((' + Root.Size + '* 3) * ' + props.SectionSize + ')'
          : 'calc((' + Root.Size + '* 3) * 3)'};
    }
  }
`;

SlideSectionStyle.SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(${Root.Size} / 6);
`;

SlideSectionStyle.Headline = styled.div`
  display: flex;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Nightsky)}
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  i {
    margin-right: calc(${Root.Size} / 2);
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }
`;

SlideSectionStyle.CallToAction = styled.div`
  display: flex;

  .btn {
    background-color: rgba(0, 0, 0, 0);
    color: ${Theme.Color.Black};

    svg {
      fill: ${Theme.Color.Black};
      border: ${Theme.Color.Black};
    }

    i {
      color: ${Theme.Color.Black};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export default SlideSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles

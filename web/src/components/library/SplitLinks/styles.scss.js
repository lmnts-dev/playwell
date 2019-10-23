// <SplitLinks /> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CourseFooter = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: left;
`;

CourseFooter.Explore = styled(Flex)`
  text-align: left;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LinkContainer = styled(Flex)`
  align-items: center;
  flex-direction: row;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-right: none;
  border-bottom: 1px dashed ${p => p.borderColor};
  padding: calc(${Root.Size} * 0.7) calc(${Root.Size} / 2) calc(${Root.Size});

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    flex-direction: row;
    justify-content: flex-end;
    border-right: 1px dashed ${p => p.borderColor};
    border-bottom: none;
    padding: 0 calc(${Root.Size} * 1.5);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding: 0 calc(${Root.Size} * 2);
  }

  a {
    text-decoration: none;
  }

  .arrow {
    background: rgba(0, 0, 0, 0);

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(${Root.Size} * 1);
      height: calc(${Root.Size} * 2);

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        justify-content: ${p =>
        p.first ? 'flex-start' : p.last ? 'flex-end' : 'center'};
      }
    }
  }

  svg {
    transition: ${Theme.Base.Transition.String};
    transform: rotate(180deg) translateX(0);
    stroke: ${p => p.arrowColor};
  }

  &:hover {
    svg {
      transform: rotate(180deg) translateX(-40%);
    }
  }

  &:active {
  }

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    svg {
      transition: ${Theme.Base.Transition.String};
      transform: rotate(0deg) translateX(0);
      stroke: ${p => p.arrowColor};
    }

    &:hover {
      svg {
        transform: rotate(0deg) translateX(-40%);
      }
    }
  }

  &:last-child {
    border-right: none;
    border-bottom: none;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: ${Base.Media.Width.Md + 'px'}) {
      justify-content: flex-start;
    }

    svg {
      transform: rotate(180deg) translateX(0);
    }

    &:hover {
      svg {
        transform: rotate(180deg) translateX(-40%);
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles

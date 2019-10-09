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

CourseFooter.Course = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  border-bottom: 1px dashed ${p => p.theme.Color.White};
  padding: calc(${Root.Size} * 0.7) calc(${Root.Size} / 2) calc(${Root.Size});

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    flex-direction: row;
    justify-content: flex-end;
    border-right: 1px dashed ${p => p.theme.Color.White};
    border-bottom: none;
    padding: 0 calc(${Root.Size} * 1.5);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding: 0 calc(${Root.Size} * 2);
  }

  a {
    text-decoration: none;
  }

  svg {
    transition: ${Theme.Base.Transition.String};
    transform: rotate(180deg) translateX(0);
    fill: ${Theme.Color.Primary};
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
      fill: ${Theme.Color.Primary};
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

LinkContainer.Arrow = styled(Box)`
  background: rgba(0, 0, 0, 0);
  /* cursor: pointer; */
  transform: scale(2);
  width: calc(${Root.Size} * 1);
  height: calc(${Root.Size} * 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//////////////////////////////////////////////////////////////////////
// End Styles

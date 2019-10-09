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
  max-width: ${props => props.theme.Base.Grid.SiteWidth};
  text-align: center;
`;

CourseFooter.Explore = styled(Flex)`
  text-align: left;
  max-width: calc(${props => props.theme.Base.Grid.SiteWidth} / 1.1);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LinkContainer = styled(Flex)`
  align-items: center;
  border-right: none;
  border-bottom: 1px dashed ${p => p.theme.Color.White};
  /* cursor: pointer; */
  flex-direction: row;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    border-right: 1px dashed ${p => p.theme.Color.White};
    border-bottom: none;
    flex-direction: row;
    justify-content: flex-end;
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

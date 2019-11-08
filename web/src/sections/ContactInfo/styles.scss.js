// <LocationHero /> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};

  @media (min-width: ${Base.Media.Width.Md4 + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 0.25);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 1);
  }

  .offices {
    flex-grow: 1;
    padding-right: calc(${Root.Size} / 2);
  }

  .numbers {
    flex-grow: 2;
    margin-top: calc(${Root.Size} * 1);

    @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-top: 0;
    }
  }

  .newsletter {
    flex-grow: 4;
    margin-top: calc(${Root.Size} * 1);

    @media (min-width: ${Base.Media.Width.Md + 'px'}) {
      margin-top: 0;
    }

    @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
      padding-left: calc(${Root.Size} * 1.5);
    }

    form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      input {
        background: transparent;
        border: 1px solid ${Theme.Color.White};
        border-radius: 99px;
        color: ${Theme.Color.White};
        font-weight: 500;
        padding: 0.5rem 1.5rem;
        line-height: 2rem;
        box-sizing: border-box;
        margin-right: calc(${Root.Size} / 3);
        flex-grow: 4;

        &::placeholder {
          color: ${hexToRGB(Theme.Color.Ocean, 0.5)};
        }
      }

      button {
        background: ${hexToRGB(Theme.Color.Ocean, 0.5)};
        border-radius: 99px;
        border: none;
        color: ${Theme.Color.White};
        font-weight: 500;
        padding: 0.5rem 2rem;
        line-height: 2rem;
        cursor: pointer;
        flex-grow: 1;

        &:hover {
          background: ${hexToRGB(Theme.Color.Ocean, 1)};
        }
      }
    }
  }
`;

export const ArrowLink = styled.div`
  color: ${Theme.Color.Sunlight};
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;

  span {
    height: 14px;
  }

  .arrow {
    margin-left: calc(${Root.Size} / 6);

    svg {
      transform: translateX(0);
      fill: ${Theme.Color.White};
      transition: ${Theme.Base.Transition.String};
      height: 14px;
    }

    &:hover {
      svg {
        transform: translateX(20%);
      }
    }
  }

  &:hover {
    .arrow {
      svg {
        transform: translateX(40%);
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles

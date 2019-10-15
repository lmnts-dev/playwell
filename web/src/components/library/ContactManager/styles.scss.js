// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Extension
import { BtnStyle } from 'components/library/Btn/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CourseListingsStyle = styled.section`
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  padding-bottom: calc(${Root.Size} * 5);
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding-right: 0;
    padding-left: 0;
  }

  .listings-inner {
    padding-right: calc(${props => props.mapWidth} + ${Root.Size});
    padding-left: calc(${Root.Rem} * 9);
    width: 100%;
    max-width: ${Root.Site.Width};

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-right: 0;
      padding-left: 0;
    }
  }
    /* width: ${props =>
      props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  } */

  .listings {
    position: relative;
    z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
  }
`;

// Results

export const ListingsResultsStyle = styled.div`
  position: relative;
`;

export const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: ${Theme.Color.White};
  padding: calc(${Root.Size} / 2);
  width: 100%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Root.Size} / 3);
  }
`;

Article.Info = styled.div`
  display: flex;
  padding-left: calc(${Root.Size} / 2);
  width: 75%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    padding-left: calc(${Root.Size} / 3);
    width: 85%;
  }
`;

Article.Figure = styled.figure`
  margin: 0;
  width: 25%;
  height: 25%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    width: 15%;
    height: 15%;
  }

  .gatsby-image-wrapper {
    border-radius: calc(${Root.Radius} * 6);
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

Article.Info.Details = styled.div`
  color: ${Theme.Color.Nova};
  display: block;
  font-weight: 500;
  margin-bottom: calc(${Root.Size} / 4);
  width: 100%;
  text-transform: capitalize;

  span {
    color: ${Theme.Color.Dino};
    margin-left: calc(${Root.Size} / 2);
  }
`;

Article.Info.Name = styled.div`
  color: ${Theme.Color.Deepsea};
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: calc(${Root.Size} / 1);
  width: 100%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    margin-top: 0;
  }
`;

Article.Info.Contact = styled.div`
  align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  color: ${Theme.Color.Nova};
  font-weight: 500;
  margin-top: calc(${Root.Size} / 1);
  width: 100%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    flex-direction: row;
  }

  span {
    margin-bottom: calc(${Root.Size} / 3);
    display: block;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-bottom: 0;
    }

    a {
      color: ${Theme.Color.Nova};
    }
  }
`;

//////////////////////////////////////////////////////////////////////

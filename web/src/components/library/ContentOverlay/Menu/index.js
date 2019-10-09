// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Styles
import MenuOverlayStyle from './styles.scss';
import OverlayContentContainerStyle from 'components/library/ContentOverlay/styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import Icon from 'components/library/Icons';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

class MenuOverlayToggle extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Initial state.
    this.state = {
      overlayVisible: false,
    };

    // Bind overlay state.
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  // Base functions to change transition state for the Overlay.
  toggleOverlay() {
    // If currently hidden...
    if (this.state.overlayVisible == false) {
      this.setState({
        overlayVisible: true,
      });
    }

    // If currently visible...
    else {
      this.setState({
        overlayVisible: false,
      });
    }
  }

  render() {
    return (
      <>
        <span
          onClick={this.toggleOverlay.bind(this)}
          // These are eslint errors for accessibility below.
          onKeyPress={this.toggleOverlay.bind(this)}
          role="button"
          tabIndex="0"
          className="overlay-toggle"
        >
          {this.props.children}
        </span>
        <OverlayContentContainer
          overlayVisible={this.state.overlayVisible}
          overlayToggle={this.toggleOverlay.bind(this)}
        />
      </>
    );
  }
}

class OverlayContentContainer extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    const overlayVisible = this.props.overlayVisible;

    // If the overlay is hidden...
    if (overlayVisible == false) {
      return null;
    }

    // If the overlay is visible...
    else {
      return ReactDOM.createPortal(
        <OverlayContentContainerStyle>
          <MenuOverlayStyle>
            <div className="overlay-top-bar">
              <div className="overlay-bar-inner">
                <span
                  onClick={this.props.overlayToggle}
                  // These are eslint errors for accessibility below.
                  onKeyPress={this.props.overlayToggle}
                  role="button"
                  tabIndex="0"
                  className="overlay-close"
                >
                  <figure />
                </span>
                <span className="overlay-title">Carson City, Nevada</span>
                <span className="overlay-icon">
                  <Icon fas={true} Name="share-alt" />
                </span>
              </div>
            </div>
            <iframe
              className="dutchie-iframe"
              frameBorder="0"
              title="menu"
              src="https://www.dutchie.com/embedded-menu/sierra-well-reno/menu?"
            />
            <div className="overlay-bottom-bar">
              <div className="overlay-bar-inner">
                <Link to="/">Call</Link>
                <Link to="/">Visit</Link>
                <Link to="/">Chat</Link>
                <Link to="/">Info</Link>
              </div>
            </div>
          </MenuOverlayStyle>
        </OverlayContentContainerStyle>,
        document.getElementById('content-overlay')
      );
    }
  }
}

export default MenuOverlayToggle;

//////////////////////////////////////////////////////////////////////
// End Component

// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Styles
import OverlayContentContainerStyle from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';

// Constants
import { Box, Flex, Text } from 'components/library/Elements';

// Begin Component
//////////////////////////////////////////////////////////////////////

export class ContentOverlayButton extends React.Component {
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
        >
          Show Modal
        </span>
        <OverlayContentContainer
          overlayContent={this.props.overlayContent}
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
      return (
        <OverlayContentContainerStyle>
          <div className="overlay-inner">
            <Box
              onClick={this.props.overlayToggle}
              // These are eslint errors for accessibility below.
              onKeyPress={this.props.overlayToggle}
              role="button"
              tabIndex="0"
              color="black"
              py={6}
            >
              Hide Modal
            </Box>
            <iframe
              className="dutchie-iframe"
              frameBorder="0"
              title="menu"
              src="https://www.siteinspire.com"
            />
          </div>
        </OverlayContentContainerStyle>
      );
    }
  }
}

export default ContentOverlayButton;

//////////////////////////////////////////////////////////////////////
// End Component

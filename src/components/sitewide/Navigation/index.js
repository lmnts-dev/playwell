// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Device from './../../core/DeviceQuery';

// Styles
import { NavigationStyle, NavigationBodyPadding } from './styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import Brandmark from 'components/core/Branding/Brandmark';

// Begin Component
//////////////////////////////////////////////////////////////////////

// OverlayButton Component
class OverlayButton extends React.Component {
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

      console.log(this.props.overlayMenuId + ': overlay open');
    }

    // If currently visible...
    else {
      this.setState({
        overlayVisible: false,
      });

      console.log(this.props.overlayMenuId + ': overlay closed');
    }
  }

  render() {
    return (
      <button
        onClick={this.toggleOverlay.bind(this)}
        onKeyPress={this.toggleOverlay.bind(this)}
      >
        {this.props.label}
      </button>
    );
  }
}

// Linklist Component
const Linklist = ({ links }) => {
  return (
    <ul>
      {links.map((link, idx) => {
        if (link.overlayMenuId != undefined) {
          return (
            <li key={link.idx}>
              <OverlayButton
                overlayMenuId={link.overlayMenuId}
                label={link.label}
              />
            </li>
          );
        } else {
          return (
            <li key={link.idx}>
              <Link to={link.linkTo}>{link.label}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

// Navigation Component
class Navigation extends PureComponent {
  render() {
    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <NavigationStyle>
        <NavigationBodyPadding />
        <NavigationStyle.Inner>
          <NavigationStyle.Primary>
            <Brandmark />
            <Linklist
              links={[
                {
                  label: 'Programs',
                  overlayMenuId: 'programs',
                },
                {
                  label: 'Locations',
                  overlayMenuId: 'locations',
                },
                {
                  label: 'Who We Are',
                  overlayMenuId: 'who-we-are',
                },
                {
                  label: 'Parties',
                  overlayMenuId: 'parties',
                },
                {
                  label: 'Community',
                  overlayMenuId: 'community',
                },
              ]}
            />
          </NavigationStyle.Primary>
          <NavigationStyle.Secondary>
            Secondary Navigation
          </NavigationStyle.Secondary>
        </NavigationStyle.Inner>
      </NavigationStyle>
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component

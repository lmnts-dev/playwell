// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { StaticQuery, graphql, Link } from 'gatsby';

// Styles
import { NavigationStyle, NavigationBodyPadding } from './styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import Brandmark from 'components/core/Branding/Brandmark';
import Btn from 'components/library/Btn/';
import { NavigationOverlay } from 'components/library/Navigation/Overlay/';

// Data
import { data } from './Data/';

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
    }

    // If currently visible...
    else {
      this.setState({
        overlayVisible: false,
      });
    }
  }

  render() {
    return <button>{this.props.label}</button>;
  }
}

// Navigation Component
class NavigationBar extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      navContext: data.primaryNav.linkList[0],
      navScrollClass: 'top',
      navOverlayVisible: false,
    };

    // Bind base functions to change transition state for
    // collapsing menu hero on scroll.
    this.handleScroll = this.handleScroll.bind(this);

    // Bind our click event to open up Navigation Overlays.
    this.navOverlayToggle = this.navOverlayToggle.bind(this);

    // Bind our navContextUpdate function.
    this.navContextUpdate = this.navContextUpdate.bind(this);
  }

  // Make sure we are listening for scroll once mounted.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    // Initial state for navOverlayVisible
    this.state = {
      navOverlayVisible: false,
    };
  }

  // Remove listener when not mounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    // Initial state for navOverlayVisible
    this.state = {
      navOverlayVisible: false,
    };
  }

  // Base functions to change transition state for
  // navigation on scroll
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.navScrollClass === 'scroll') {
      this.setState({ navScrollClass: 'top' });
    } else if (window.scrollY !== 0 && this.state.navScrollClass !== 'scroll') {
      this.setState({ navScrollClass: 'scroll' });
    }
  }

  // Function to toggle NavigationOverlay.
  navOverlayToggle(idx) {
    // If currently hidden...
    if (this.state.navOverlayVisible == false) {
      this.setState({
        navContext: data.primaryNav.linkList[idx],
        navOverlayVisible: true,
      });
    } else {
      this.setState({
        navContext: data.primaryNav.linkList[idx],
        navOverlayVisible: false,
      });
    }
  }

  // Change our navContext state based on the selected item.
  navContextUpdate(idx) {
    this.setState({
      navContext: data.primaryNav.linkList[idx],
    });
  }

  render() {
    return (
      <>
        <NavigationStyle>
          <NavigationBodyPadding />
          <NavigationStyle.Inner
            className={'nav-inner ' + this.state.navScrollClass}
          >
            <NavigationStyle.Primary className="nav-primary">
              <Link to="/">
                <Brandmark />
              </Link>

              <ul>
                {data.primaryNav.linkList.map((link, idx) => {
                  if (link.subNav.length != false) {
                    return (
                      <li key={link.idx}>
                        <button
                          onClick={() => this.navOverlayToggle(idx)}
                          onKeyDown={() => this.navOverlayToggle(idx)}
                        >
                          {link.label}
                        </button>
                      </li>
                    );
                  } else {
                    return (
                      <li key={link.idx}>
                        <Link to={link.route}>{link.label}</Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </NavigationStyle.Primary>
            <NavigationStyle.Secondary className="nav-secondary">
              <Btn
                Label="Contact"
                IconClass="question-circle"
                IconPosition="left"
                Destination="/"
                TextColor={Theme.Color.Primary}
                IconFas
              />
              <Btn
                Label="Arizona"
                Destination="/"
                BorderStyle="solid"
                BorderWidth="1px"
                BorderColor={Theme.Color.Primary}
                TextColor={Theme.Color.Primary}
              />
              <Btn
                Label="Let's Play"
                Destination="/"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
              />
            </NavigationStyle.Secondary>
          </NavigationStyle.Inner>
        </NavigationStyle>

        {/* Our Navigation Overlay */}
        <NavigationOverlay
          navData={data}
          navContext={this.state.navContext}
          navOverlayVisible={this.state.navOverlayVisible}
          navOverlayToggle={this.navOverlayToggle.bind(this)}
          navContextUpdate={this.navContextUpdate.bind(this)}
        />
      </>
    );
  }
}

// Export our Navigation Component
export const Navigation = () => (
  <>
    <NavigationBar />
  </>
);

//////////////////////////////////////////////////////////////////////
// End Component

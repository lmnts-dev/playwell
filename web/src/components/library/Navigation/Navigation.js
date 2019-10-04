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
import { navFadeOutDuration } from './Overlay/styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Brandmark } from 'components/core/Branding/Brandmark';
import { Btn } from 'components/library/Btn/';
import { NavigationOverlay } from 'components/library/Navigation/Overlay/';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Navigation Component
class NavigationBar extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      navContext: this.props.navQuery.primaryNav.linkList[0],
      navScrollClass: 'top',
      navOverlayVisible: false,
      navFadingOut: false,
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
      navFadingOut: false,
    };
  }

  // Remove listener when not mounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    // Initial state for navOverlayVisible
    this.state = {
      navOverlayVisible: false,
      navFadingOut: false,
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
        navContext: this.props.navQuery.primaryNav.linkList[idx],
        navOverlayVisible: true,
      });
    } else {
      // Set state for NavigationOverlay to fade out.
      this.setState({
        navFadingOut: true,
      });

      // Timer to remove NavigationOverlay from the DOM.
      setTimeout(() => {
        this.setState({
          navContext: this.props.navQuery.primaryNav.linkList[idx],
          navOverlayVisible: false,
          navFadingOut: false,
        });
      }, navFadeOutDuration);
    }
  }

  // Change our navContext state based on the selected item.
  navContextUpdate(idx) {
    this.setState({
      navContext: this.props.navQuery.primaryNav.linkList[idx],
    });
  }

  render() {
    console.log(this.props.navQuery);

    return (
      <>
        <NavigationStyle
          className={
            this.state.navOverlayVisible == true ? 'hidden' : undefined
          }
        >
          <NavigationBodyPadding />
          <NavigationStyle.Inner
            className={'nav-inner ' + this.state.navScrollClass}
          >
            <NavigationStyle.Primary className="nav-primary">
              <Link to="/">
                <Brandmark />
              </Link>

              <ul>
                {this.props.navQuery.primaryNav.linkList.map((link, idx) => {
                  if (link.subNav.length != false) {
                    return (
                      <li key={idx}>
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
                      <li key={idx}>
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
                Label="Brooklyn, NYC"
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
          navData={this.props.navQuery}
          navContext={this.state.navContext}
          navOverlayVisible={this.state.navOverlayVisible}
          navOverlayToggle={this.navOverlayToggle.bind(this)}
          navContextUpdate={this.navContextUpdate.bind(this)}
          navFadingOut={this.state.navFadingOut}
        />
      </>
    );
  }
}

// Export our Navigation Component
export const Navigation = ({ navQuery }) => {
  return <NavigationBar navQuery={navQuery} />;
};

//////////////////////////////////////////////////////////////////////
// End Component

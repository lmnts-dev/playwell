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
import { NavFilter } from './NavFilter';

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
      navFocused: false,
    };

    // Bind base functions to change transition state for
    // collapsing menu hero on scroll.
    this.handleScroll = this.handleScroll.bind(this);

    // Bind our click event to open up Navigation Overlays.
    this.navOverlayToggle = this.navOverlayToggle.bind(this);

    // Bind our click event to switch to the unfocosed half of the Navigation Overlay.
    this.navOverlayBack = this.navOverlayBack.bind(this);

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
      navMobile: window.innerWidth < 1024,
      navFocused: false,
    };
  }

  // Remove listener when not mounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    // Initial state for navOverlayVisible
    this.state = {
      navOverlayVisible: false,
      navFadingOut: false,
      navMobile: window.innerWidth < 1024,
      navFocused: false,
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
          navFocused: false,
        });
      }, navFadeOutDuration);
    }
  }

  navOverlayBack(){
    if (this.state.navFocused == true) {
      this.setState({
        navFocused: false,
      });
    }
  }

  // Change our navContext state based on the selected item.
  navContextUpdate(idx) {
    this.setState({
      navContext: this.props.navQuery.primaryNav.linkList[idx],
    });
    if (this.state.navFocused == false) {
      this.setState({
        navFocused: true,
      });
    }
  }

  render() {
    // console.log(this.props.navQuery);

    return (
      <>
        <NavigationStyle
          className={
            this.state.navOverlayVisible == true ? 'nav-bar hidden' : 'nav-bar'
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

              <ul className="linklist">
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
                Destination="/contact"
                TextColor={Theme.Color.Primary}
                IconFas
              />
              <NavFilter />
              {/*<Btn
                Label="Let's Play"
                Destination="/"
                BgColor={Theme.Color.Nova}
                TextColor={Theme.Color.White}
              /> */}
            </NavigationStyle.Secondary>
            <NavigationStyle.Mobile IconColor={Theme.Color.Primary} className="mobile-nav">
              <button
                onClick={() => this.navOverlayToggle(0)}
                onKeyDown={() => this.navOverlayToggle(0)}
                className="hamburger"
              >
                <div />
              </button>
            </NavigationStyle.Mobile>
          </NavigationStyle.Inner>
        </NavigationStyle>

        {/* Our Navigation Overlay */}
        <NavigationOverlay
          navData={this.props.navQuery}
          navContext={this.state.navContext}
          navFocused={this.state.navFocused}
          navOverlayVisible={this.state.navOverlayVisible}
          navOverlayToggle={this.navOverlayToggle.bind(this)}
          navOverlayBack={this.navOverlayBack.bind(this)}
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

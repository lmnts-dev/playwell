// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { StaticQuery, graphql, Link } from 'gatsby';
import Device from './../../core/DeviceQuery';

// Styles
import { NavigationStyle, NavigationBodyPadding } from './styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import Brandmark from 'components/core/Branding/Brandmark';
import Btn from 'components/library/Btn/';

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

      // console.log(this.props.overlayMenuId + ': overlay open');
    }

    // If currently visible...
    else {
      this.setState({
        overlayVisible: false,
      });

      // console.log(this.props.overlayMenuId + ': overlay closed');
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
class NavigationBar extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      scrollClass: 'top',
    };

    // Bind base functions to change transition state for
    // collapsing menu hero.
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Make sure we are listening for scroll once mounted.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove listener when not mounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Base functions to change transition state for
  // navigation on scroll
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrollClass === 'scroll') {
      this.setState({ scrollClass: 'top' });
    } else if (window.scrollY !== 0 && this.state.scrollClass !== 'scroll') {
      this.setState({ scrollClass: 'scroll' });
    }
  }

  render() {
    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <NavigationStyle>
        <NavigationBodyPadding />
        <NavigationStyle.Inner
          className={'nav-inner ' + this.state.scrollClass}
        >
          <NavigationStyle.Primary className="nav-primary">
            <Link to="/">
              <Brandmark />
            </Link>
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
    );
  }
}

// We use this with ReactDOM.createPortal.
const NavigationOverlay = () => <div id="navigation-overlay" />;

const Navigation = () => (
  <>
    <NavigationOverlay />
    <NavigationBar />
  </>
);

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component

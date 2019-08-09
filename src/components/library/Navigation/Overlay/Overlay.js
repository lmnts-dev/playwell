// Navigation Overlay Component:
// This is the sitewide Overlay Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

// Styles
import { NavigationOverlayStyle } from './styles.scss';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import Brandmark from 'components/core/Branding/Brandmark';
import Btn from 'components/library/Btn/';
import Icon from 'components/library/Icons';

// Data
import { data } from '../Data/';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Focus Link List for Sub Navigation
const FocusLinkList = ({ linkList }) => {
  return (
    <ul className="focus-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          return (
            <li key={idx} className={link.focus != false ? 'focus' : null}>
              <Link to={link.route}>
                <span className="nav-item">
                  <span className="label">{link.label}</span>
                  <Icon Name="carat" />
                </span>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

// Minor Link List for Sub Navigation
const MinorLinkList = ({ linkList }) => {
  return (
    <ul className="minor-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          // If it isn't a subhead...
          if (link.subhead == true) {
            return (
              <li key={idx} className="minor-link-subhead">
                <span className="nav-item">
                  <span className="label">{link.label}</span>
                </span>
              </li>
            );
          }
          // If it is a subhead...
          else {
            return (
              <li key={idx}>
                <Link to={link.route}>
                  <span className="nav-item">
                    <span className="label">{link.label}</span>
                  </span>
                </Link>
              </li>
            );
          }
        }
      })}
    </ul>
  );
};

// Navigation Component
export class NavigationOverlay extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    this.state = {
      navContext: this.props.navContext,
      navData: this.props.navData,
    };
  }

  componentDidMount() {
    this.state = {
      navContext: this.props.navContext,
      navData: this.props.navData,
    };
  }

  render() {
    // Assign our props a prettier name.
    let navData = data;
    let navOverlayVisible = this.props.navOverlayVisible;
    let navContext = this.props.navContext;

    console.log('this.props.navContext:');
    console.log(this.props.navContext);
    console.log('this.state.navContext:');
    console.log(this.state.navContext);

    // If the overlay is hidden...
    if (navOverlayVisible == false) {
      return null;
    }

    // If the overlay is visible...
    else {
      return (
        // Query our Navigation data so we can adjust our Navigation styles
        // based on Top Level Pages vs Sub Level Pages
        <NavigationOverlayStyle theme={navContext.theme}>
          <NavigationOverlayStyle.Inner>
            <NavigationOverlayStyle.Sub
              className="nav-sub"
              theme={navContext.theme}
            >
              <div className="inner">
                <div className="top">
                  <div className="top-main">
                    <div
                      className="overlay-close"
                      onClick={this.props.navOverlayToggle}
                      onKeyDown={this.props.navOverlayToggle}
                      role="button"
                      tabIndex="0"
                    >
                      <Icon Name="carat" />
                    </div>
                    <div className="overlay-branding">
                      <Link to="/">
                        <Brandmark />
                      </Link>
                    </div>
                  </div>
                  <div className="top-tools">
                    <div className="overlay-contact">
                      <Btn
                        Label="Contact"
                        IconClassName="question-circle"
                        IconPosition="left"
                        Destination="/"
                        TextColor={Theme.Color.Primary}
                        IconFas
                      />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="col-heading">
                    <span>{navContext.label}</span>
                  </div>

                  <div className="col-list">
                    <FocusLinkList linkList={navContext.subNav.focusLinkList} />

                    {/* Line Break */}
                    {/* TODO: Componentize */}
                    <figure className="line-break" />

                    <MinorLinkList linkList={navContext.subNav.minorLinkList} />
                  </div>
                </div>
              </div>
            </NavigationOverlayStyle.Sub>
            <NavigationOverlayStyle.Main theme={navContext.theme}>
              <div className="inner">
                <div className="top">
                  {/* Our Main Navigation List */}
                  <ul>
                    {/* Map our linkList prop */}
                    {navData.primaryNav.linkList.map((link, idx) => {
                      // If the route is specified...
                      if (link.route != undefined) {
                        return (
                          <li
                            className={link.active == true ? 'active' : null}
                            key={idx}
                          >
                            {/* Pass our index to our click handler.
                            Read more: https://reactjs.org/docs/faq-functions.html#how-do-i-pass-a-parameter-to-an-event-handler-or-callback */}
                            <span
                              className="nav-item"
                              onClick={() => this.props.navContextUpdate(idx)}
                              onKeyDown={() => this.props.navContextUpdate(idx)}
                              role="button"
                              tabIndex="0"
                            >
                              <span className="label">{link.label}</span>
                            </span>
                          </li>
                        );
                      }
                    }, this)}
                  </ul>
                  <div className="overlay-icon">
                    <Icon Name="gear" />
                  </div>
                </div>

                <div className="bottom">
                  <ul>
                    <li>
                      <span className="nav-item">
                        <span className="label">
                          <Link to={navData.focusNav.route}>
                            <span>{navData.focusNav.label}</span>
                            <Icon Name="carat" />
                          </Link>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationOverlayStyle.Main>
          </NavigationOverlayStyle.Inner>
        </NavigationOverlayStyle>
      );
    }
  }
}

//////////////////////////////////////////////////////////////////////
// End Component

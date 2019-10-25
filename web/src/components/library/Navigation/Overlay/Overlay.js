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
import { Brandmark } from 'components/core/Branding/Brandmark';
import { Btn } from 'components/library/Btn/';
import { Icon } from 'components/library/Icons';
import { FocusLinkList } from './FocusLinkList';
import { MinorLinkList } from './MinorLinkList';
import { LocationFilter } from './LocationFilter';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Navigation Overlay Class
export class NavigationOverlay extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Set our initial state.
    this.state = {
      navContext: this.props.navContext,
      navData: this.props.navData,
    };
  }

  // Set our mounted state.
  componentDidMount() {
    this.state = {
      navContext: this.props.navContext,
      navData: this.props.navData,
    };
  }

  render() {
    // Assign our props a prettier name.
    let navData = this.props.navData;
    let navOverlayVisible = this.props.navOverlayVisible;
    let navContext = this.props.navContext;
    let navFadingOut = this.props.navFadingOut;
    let focusedMenu = this.props.focusedMenu;

    // If the overlay is hidden...
    if (navOverlayVisible == false) {
      return null;
    }

    // If the overlay is visible...
    else {
      return (
        // Query our Navigation data so we can adjust our Navigation styles
        // based on Top Level Pages vs Sub Level Pages
        <NavigationOverlayStyle
          theme={navContext.theme}
          className={(navFadingOut && 'nav-fadeout ') + (focusedMenu && 'focused-menu')}
        >
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
                    <div
                      className="overlay-branding"
                      onClick={this.props.navOverlayToggle}
                      onKeyDown={this.props.navOverlayToggle}
                      role="button"
                      tabIndex="0"
                    >
                      <Link to="/">
                        <Brandmark />
                      </Link>
                    </div>
                  </div>
                  <div className="top-tools">
                    <div
                      className="overlay-contact"
                      onClick={this.props.navOverlayToggle}
                      onKeyDown={this.props.navOverlayToggle}
                      role="button"
                      tabIndex="0"
                    >
                      <Btn
                        Label="Contact"
                        IconClassName="question-circle"
                        IconPosition="left"
                        Destination="/contact"
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
                    <FocusLinkList
                      navOverlayToggle={this.props.navOverlayToggle}
                      linkList={navContext.subNav.focusLinkList}
                    />

                    {/* Line Break */}
                    {/* TODO: Componentize */}

                    {navContext.label !== 'Locations' && (
                      <figure className="line-break" />
                    )}

                    <MinorLinkList
                      navOverlayToggle={this.props.navOverlayToggle}
                      linkList={navContext.subNav.minorLinkList}
                    />

                    {navContext.label == 'Locations' && (
                      <LocationFilter
                        bg={Theme.Color.White}
                        navOverlayToggle={this.props.navOverlayToggle}
                      />
                    )}
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
                            className={
                              link.label == navContext.label
                                ? 'active'
                                : undefined
                            }
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

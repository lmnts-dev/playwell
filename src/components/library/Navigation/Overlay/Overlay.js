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

// Begin Component
//////////////////////////////////////////////////////////////////////

const data = {
  // Focus Nav
  // f.e. 'Lets Play!'
  focusNav: {
    route: '/play',
    // eslint-disable-next-line
    label: "Let's Play",
  },
  // Primary Nav
  primaryNav: {
    linkList: [
      {
        route: '/programs',
        label: 'Programs',
        active: false,
        theme: {
          primaryColor: Theme.Color.Deepsea,
          activeColor: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Programs Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/locations',
        label: 'Locations',
        active: false,
        theme: {
          primaryColor: Theme.Color.Eggplant,
          activeColor: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Locations Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Locations Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/who-we-are',
        label: 'Who We Are',
        active: false,
        theme: {
          primaryColor: Theme.Color.Sunset,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'About Link',
              focus: true,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/parties',
        label: 'Parties',
        active: false,
        theme: {
          primaryColor: Theme.Color.Sunlight,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Parties Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Parties Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Parties Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Parties Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/community',
        label: 'Community',
        active: true,
        theme: {
          primaryColor: Theme.Color.Sky,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Community Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Community Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Community Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Community Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Community Link',
              subhead: false,
            },
          ],
        },
      },
    ],
  },
};

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

const MainNavigationList = ({ linkList }) => {
  return (
    <ul>
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          return (
            <li className={link.active == true ? 'active' : null} key={idx}>
              <span className="nav-item">
                <span className="label">{link.label}</span>
              </span>
            </li>
          );
        }
      })}
    </ul>
  );
};

// Navigation Component
class NavigationOverlayWithData extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Set navContext list as state
    this.state = {
      navContext: this.props.navContext,
      navData: this.props.navData,
    };

    // Bind our navContextUpdate function.
    this.navContextUpdate = this.navContextUpdate.bind(this);
  }

  // Assign our props a prettier name.

  navContextUpdate(idx) {
    console.log('The link ' + idx + ' was clicked.');

    this.setState({
      navContext: this.state.navData.primaryNav.linkList[idx],
    })
  }

  render() {
    let navData = this.state.navData;
    let navContext = this.state.navContext;

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
                  <div className="overlay-close">
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
                <ul>
                  <li>
                    <span className="nav-item">
                      <span className="label">
                        <Link to={data.focusNav.route}>
                          <span>{data.focusNav.label}</span>
                          <Icon Name="carat" />
                        </Link>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bottom">
                <div className="overlay-icon">
                  <Icon Name="gear" />
                </div>

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
                            onClick={() => this.navContextUpdate(idx)}
                            onKeyDown={() => this.navContextUpdate(idx)}
                            role="button"
                            tabIndex="0"
                          >
                            <span className="label">{link.label}</span>
                          </span>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </NavigationOverlayStyle.Main>
        </NavigationOverlayStyle.Inner>
      </NavigationOverlayStyle>
    );
  }
}

export class NavigationOverlay extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Set navContext list as state
    this.state = {
      navContext: data.primaryNav.linkList[1],
    };
  }

  render() {
    return (
      <NavigationOverlayWithData
        navData={data}
        navContext={this.state.navContext}
      />
    );
  }
}

//////////////////////////////////////////////////////////////////////
// End Component

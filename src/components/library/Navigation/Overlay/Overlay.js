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
          background: Theme.Color.Galaxy,
          active: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
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
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
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
          background: Theme.Color.Galaxy,
          active: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
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
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
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
          background: Theme.Color.Sunset,
          active: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
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
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
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
          background: Theme.Color.Sunlight,
          active: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
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
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
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
          background: Theme.Color.Sky,
          active: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Link',
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
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Link',
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
    <ul class="focus-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          return (
            <li key={idx} className={link.focus != false ? 'focus' : null}>
              <Link to={link.route}>
                <span class="nav-item">
                  <span class="label">{link.label}</span>
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
    <ul class="minor-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          // If it isn't a subhead...
          if (link.subhead == true) {
            return (
              <li key={idx} class="minor-link-subhead">
                <span class="nav-item">
                  <span class="label">{link.label}</span>
                </span>
              </li>
            );
          }
          // If it is a subhead...
          else {
            return (
              <li key={idx}>
                <Link to={link.route}>
                  <span class="nav-item">
                    <span class="label">{link.label}</span>
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
  }

  render() {
    // Assign our navContext a prettier name.
    let navContext = this.props.navContext;

    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <NavigationOverlayStyle bgColor={navContext.theme.background}>
        <NavigationOverlayStyle.Inner>
          <NavigationOverlayStyle.Sub className="nav-sub">
            <div class="inner">
              <div class="top">
                <div class="top-main">
                  <div class="overlay-close">
                    <Icon Name="carat" />
                  </div>
                  <div class="overlay-branding">
                    <Link to="/">
                      <Brandmark />
                    </Link>
                  </div>
                </div>
                <div class="top-tools">
                  <div class="overlay-contact">
                    <Btn
                      Label="Contact"
                      IconClass="question-circle"
                      IconPosition="left"
                      Destination="/"
                      TextColor={Theme.Color.Primary}
                      IconFas
                    />
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="col-heading">
                  <span>Community</span>
                </div>

                <div class="col-list">
                  <FocusLinkList linkList={navContext.subNav.focusLinkList} />

                  {/* Line Break */}
                  {/* TODO: Componentize */}
                  <figure class="line-break" />

                  <MinorLinkList linkList={navContext.subNav.minorLinkList} />
                </div>
              </div>
            </div>
          </NavigationOverlayStyle.Sub>
          <NavigationOverlayStyle.Main>
            <div class="inner">
              <div class="top">
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

              <div class="bottom">
                <div class="overlay-icon">
                  <Icon Name="gear" />
                </div>
                <MainNavigationList linkList={data.primaryNav.linkList} />
              </div>
            </div>
          </NavigationOverlayStyle.Main>
        </NavigationOverlayStyle.Inner>
      </NavigationOverlayStyle>
    );
  }
}

export const NavigationOverlay = ({ navContext }) => {
  return <NavigationOverlayWithData navContext={data.primaryNav.linkList[4]} />;
};

//////////////////////////////////////////////////////////////////////
// End Component

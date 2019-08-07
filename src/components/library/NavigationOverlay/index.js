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
//////////////////////////////////////////////////////////////////////s

// Navigation Component
class NavigationOverlay extends PureComponent {
  render() {
    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <NavigationOverlayStyle>
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
                  {/* Focus Link List */}
                  {/* TODO: Componentize */}
                  <ul class="focus-link-list">
                    <li class="focus">
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Large Link</span>
                          <Icon Name="carat" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Large Link</span>
                          <Icon Name="carat" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Large Link</span>
                          <Icon Name="carat" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Large Link</span>
                          <Icon Name="carat" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Large Link</span>
                          <Icon Name="carat" />
                        </span>
                      </Link>
                    </li>
                  </ul>

                  {/* Line Break */}
                  {/* TODO: Componentize */}
                  <figure class="line-break" />

                  {/* Minor Link List */}
                  {/* TODO: Componentize */}
                  <ul class="minor-link-list">
                    <li class="minor-link-subhead">
                      <span class="nav-item">
                        <span class="label">Minor Subheader</span>
                      </span>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Minor Link</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Minor Link</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Minor Link</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span class="nav-item">
                          <span class="label">Minor Link</span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                  
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
                        <Link to="/">
                          <span>Let's Play</span> <Icon Name="carat" />
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
                <ul>
                  <li>
                    <span className="nav-item">
                      <span className="label">Programs</span>
                    </span>
                  </li>
                  <li>
                    <span className="nav-item">
                      <span className="label">Locations</span>
                    </span>
                  </li>
                  <li>
                    <span className="nav-item">
                      <span className="label">Who We Are</span>
                    </span>
                  </li>
                  <li>
                    <span className="nav-item">
                      <span className="label">Parties</span>
                    </span>
                  </li>
                  <li className="active">
                    <span className="nav-item">
                      <span className="label">Community</span>
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

export default NavigationOverlay;

//////////////////////////////////////////////////////////////////////
// End Component

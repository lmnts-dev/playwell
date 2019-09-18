// HamburgerOverlayToggle Component:
// This is our hamburger menu.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Styles
import HamburgerOverlayStyle from './styles.scss';
import OverlayContentContainerStyle from 'components/library/ContentOverlay/styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import Icon from 'elements/Icons';
import Brandmark from 'components/core/Branding/Brandmark';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpeers
import TimeString from 'helpers/timeString';

// Begin Component
//////////////////////////////////////////////////////////////////////

class HamburgerOverlayToggle extends React.Component {
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

  componentDidMount() {
    this.state = {
      overlayVisible: true,
    };
  }

  componentWillUnmount() {
    this.state = {
      overlayVisible: false,
    };
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
    return (
      <>
        <span
          onClick={this.toggleOverlay.bind(this)}
          // These are eslint errors for accessibility below.
          onKeyPress={this.toggleOverlay.bind(this)}
          role="button"
          tabIndex="0"
          className="menu-burger"
        >
          {this.props.children}
        </span>
        <OverlayContentContainer
          overlayVisible={this.state.overlayVisible}
          overlayToggle={this.toggleOverlay.bind(this)}
        />
      </>
    );
  }
}

class OverlayContentContainer extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    const overlayVisible = this.props.overlayVisible;

    // If the overlay is hidden...
    if (overlayVisible == false) {
      return null;
    }

    // If the overlay is visible...
    else {
      return ReactDOM.createPortal(
        <>
          <HamburgerOverlayStyle>
            <HamburgerOverlayStyle.Inner>
              <div className="overlay-top">
                <div className="overlay-top-inner">
                  <span
                    onClick={this.props.overlayToggle}
                    // These are eslint errors for accessibility below.
                    onKeyPress={this.props.overlayToggle}
                    role="button"
                    tabIndex="0"
                    className="overlay-close"
                  >
                    <figure />
                  </span>
                  <span className="overlay-date">{TimeString()}</span>
                  <span className="overlay-brand">
                    <Link to="/">
                      <Brandmark />
                    </Link>
                  </span>
                  <span className="overlay-tag">The Cannabis Store.</span>
                </div>
              </div>

              <div className="overlay-bottom">
                <div className="overlay-quicklink-list">
                  <ul>
                    <li>
                      <Link to="/">Call</Link>
                    </li>
                    <li>
                      <Link to="/">Chat</Link>
                    </li>
                    <li>
                      <Link to="/">Email</Link>
                    </li>
                  </ul>
                </div>

                <div className="overlay-link-list">
                  <ul>
                    <Link to="/menu">
                      <li>
                        <Icon Name="plus" fas />
                        <span>Order Online</span>
                      </li>
                    </Link>

                    <Link to="/specials">
                      <li>
                        <Icon Name="money-bill-wave" fas />
                        <span>Specials</span>
                      </li>
                    </Link>

                    <Link to="/company">
                      <li>
                        <Icon Name="cannabis" fas />
                        <span>Our Company</span>
                      </li>
                    </Link>

                    <Link to="/learn">
                      <li>
                        <Icon Name="question" fas />
                        <span>Q&A</span>
                      </li>
                    </Link>

                    <Link to="/locations">
                      <li>
                        <Icon Name="map-marker-alt" fas />
                        <span>Find a Location</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </HamburgerOverlayStyle.Inner>
          </HamburgerOverlayStyle>
          <HamburgerOverlayStyle.BodyOverlay
            onClick={this.props.overlayToggle}
            // These are eslint errors for accessibility below.
            onKeyPress={this.props.overlayToggle}
          />
        </>,
        // This element is in Layout.js:
        // We break it out so it renders on top of everything
        // else in the DOM.
        document.getElementById('hamburger-overlay')
      );
    }

    // If the overlay is visible...
    // else {
    //   return (
    //     <>
    //       <HamburgerOverlayStyle>
    //         <HamburgerOverlayStyle.Inner>
    //           <div className="overlay-top">
    //             <div className="overlay-top-inner">
    //               <span
    //                 onClick={this.props.overlayToggle}
    //                 // These are eslint errors for accessibility below.
    //                 onKeyPress={this.props.overlayToggle}
    //                 role="button"
    //                 tabIndex="0"
    //                 className="overlay-close"
    //               >
    //                 <figure />
    //               </span>
    //               <span className="overlay-date">Carson City, Nevada</span>
    //               <span className="overlay-brand">
    //                 <Link to="/">
    //                   <Brandmark />
    //                 </Link>
    //               </span>
    //               <span className="overlay-tag">The Cannabis Store.</span>
    //             </div>
    //           </div>

    //           <div className="overlay-bottom">
    //             <div className="overlay-quicklink-list">
    //               <ul>
    //                 <li>
    //                   <Link to="/">Call</Link>
    //                 </li>
    //                 <li>
    //                   <Link to="/">Chat</Link>
    //                 </li>
    //                 <li>
    //                   <Link to="/">Email</Link>
    //                 </li>
    //               </ul>
    //             </div>

    //             <div className="overlay-link-list">
    //               <ul>
    //                 <Link to="/menu">
    //                   <li>
    //                     <Icon Name="plus" fas />
    //                     <span>Order Online</span>
    //                   </li>
    //                 </Link>

    //                 <Link to="/specials">
    //                   <li>
    //                     <Icon Name="plus" fas />
    //                     <span>Specials</span>
    //                   </li>
    //                 </Link>

    //                 <Link to="/company">
    //                   <li>
    //                     <Icon Name="plus" fas />
    //                     <span>Our Company</span>
    //                   </li>
    //                 </Link>

    //                 <Link to="/learn">
    //                   <li>
    //                     <Icon Name="plus" fas />
    //                     <span>Q&A</span>
    //                   </li>
    //                 </Link>

    //                 <Link to="/locations">
    //                   <li>
    //                     <Icon Name="plus" fas />
    //                     <span>Find a Location</span>
    //                   </li>
    //                 </Link>
    //               </ul>
    //             </div>
    //           </div>
    //         </HamburgerOverlayStyle.Inner>
    //       </HamburgerOverlayStyle>
    //       <HamburgerOverlayStyle.BodyOverlay
    //         onClick={this.props.overlayToggle}
    //         // These are eslint errors for accessibility below.
    //         onKeyPress={this.props.overlayToggle}
    //       />
    //     </>
    //   );
    // }
  }
}

export default HamburgerOverlayToggle;

//////////////////////////////////////////////////////////////////////
// End Component

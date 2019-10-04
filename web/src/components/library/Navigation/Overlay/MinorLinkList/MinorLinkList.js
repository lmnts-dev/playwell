// Minor Link List Component:
// This is the smaller link list component for the overlay navigation.
// The styles can be found in the Overlay styles.scss folder.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Minor Link List for Sub Navigation
export const MinorLinkList = ({ linkList, navOverlayToggle }) => {
  return (
    <ul className="minor-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != "") {
          // If it isn't a subhead...
          if (link.subhead == true) {
            return (
              <li key={idx} className="minor-link-subhead">
                <span
                  onClick={navOverlayToggle}
                  onKeyDown={navOverlayToggle}
                  role="button"
                  tabIndex="0"
                  className="nav-item"
                >
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
                  <span
                    onClick={navOverlayToggle}
                    onKeyDown={navOverlayToggle}
                    role="button"
                    tabIndex="0"
                    className="nav-item"
                  >
                    <span className="label">{link.label}</span>
                  </span>
                </Link>
              </li>
            );
          }
        }
      }, this)}
    </ul>
  );
};

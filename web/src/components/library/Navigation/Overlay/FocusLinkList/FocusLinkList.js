// Focus Link List Component:
// This is the larger link list component for the overlay navigation.
// The styles can be found in the Overlay styles.scss folder.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Icon } from 'components/library/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Focus Link List for Sub Navigation
export const FocusLinkList = ({ linkList, navOverlayToggle }) => {
  return (
    <ul className="focus-link-list">
      {/* Map our linkList prop */}
      {linkList.map((link, idx) => {
        // If the route is specified...
        if (link.route != undefined) {
          return (
            <li key={idx} className={link.focus != false ? 'focus' : null}>
              <Link to={link.route}>
                <span
                  onClick={navOverlayToggle}
                  onKeyDown={navOverlayToggle}
                  role="button"
                  tabIndex="0"
                  className="nav-item"
                >
                  <span className="label">{link.label}</span>
                  <Icon Name="carat" />
                </span>
              </Link>
            </li>
          );
        }
      }, this)}
    </ul>
  );
};

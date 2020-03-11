// hooks/NavQuery.js:
// This is our hook to pull data for our nav.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const NavQuery = () => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        nav {
          focusNav {
            label
            route
          }
          footerNav {
            linkList {
              label
              route
            }
          }
          primaryNav {
            linkList {
              label
              route
              subNav {
                focusLinkList {
                  focus
                  label
                  route
                }
                minorLinkList {
                  route
                  label
                  subhead
                }
              }
              theme {
                activeColor
                primaryColor
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

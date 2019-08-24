// WrapPageElement.js:
// This helper is to wrap a full page transition around the site,
// so we can do page transitions in / out. It also aids with SSR.

// Core
import React from 'react';
import Transition from 'components/core/Transition';
import { StaticQuery, graphql } from 'gatsby';

// Components
import ScrollWrapper from 'components/core/ScrollWrapper';
import { Navigation } from 'components/library/Navigation/';
import { Footer } from 'components/library/Footer';

// Data
import { navDataTransformer } from 'components/library/Navigation/Data/';

// Begin Helper
//////////////////////////////////////////////////////////////////////

const wrapPageElement = ({ element, props }) => {
  return (
    <StaticQuery
      query={graphql`
        query navDataQuery {
          allDataJson {
            edges {
              node {
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
          }
        }
      `}
      render={data => (
        <>
          <Navigation navQuery={navDataTransformer(data)} {...props} />
          <Transition {...props}>{element}</Transition>
          <Footer navQuery={navDataTransformer(data)} {...props} />
        </>
      )}
    />
  );
};

export default wrapPageElement;

//////////////////////////////////////////////////////////////////////
// End Helper

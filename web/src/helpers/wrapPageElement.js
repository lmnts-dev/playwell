// wrapPageElement.js:
// This helper is to wrap a full page transition around the site,
// so we can do page transitions in / out. It also aids with SSR.

// Core
import React from 'react';
import styled from 'styled-components';
import Transition from 'components/core/Transition';
import { StaticQuery, graphql } from 'gatsby';

// Components
import ScrollWrapper from 'components/core/ScrollWrapper';
import { Navigation } from 'components/library/Navigation/';
import Footer from 'components/library/Footer';

// Data
import { navDataTransformer } from 'components/library/Navigation/Data/';

// Begin Helper
//////////////////////////////////////////////////////////////////////

const Main = styled.div``;

const wrapPageElement = ({ element, props }) => {
  return (
    <StaticQuery
      query={graphql`
        query navDataQuery {
          allSanitySiteSettings {
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
          }
        }
      `}
      render={data => (
        <Main>
          <Navigation navQuery={navDataTransformer(data)} {...props} />
          <Transition navQuery={navDataTransformer(data)} {...props}>
            {element}
          </Transition>
        </Main>
      )}
    />
  );
};

export default wrapPageElement;

//////////////////////////////////////////////////////////////////////
// End Helper

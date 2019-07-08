import React from 'react';
import AppProvider from 'store/provider';
import WrapPageElementWithTransition from 'helpers/wrapPageElement';
import { UserAgentProvider, UserAgent } from '@quentin-sommer/react-useragent';

import { transitionDelay } from 'components/core/Transition/Transition.js';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  // Check for Window and User Agent.
  const userAgentCheck = () => {
    if (typeof window !== 'undefined') {
      let userAgent = window.navigator.userAgent;
      return userAgent;
    } else {
      let userAgent = 'Nothing';
      return userAgent;
    }
  };


  // Check if window exists or not.
  if (typeof window !== 'undefined') {
    return (
      <UserAgentProvider ua={userAgentCheck()}>
        <AppProvider>{element}</AppProvider>
      </UserAgentProvider>
    );
  } else {
    return <AppProvider>{element}</AppProvider>;
  }
};

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   if (location.action === 'PUSH') {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//     console.log('PUSH');
//   } else {
//     const savedPosition = getSavedScrollPosition(location);
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     );
//   }
//   return false;
// };

export const shouldUpdateScroll = () => false;

export const onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);

// Page Transitions
export const wrapPageElement = WrapPageElementWithTransition;

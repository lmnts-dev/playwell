// WrapPageElement.js:
// This helper is to wrap a full page transition around the site,
// so we can do page transitions in / out. It also aids with SSR.

// Begin Helper
//////////////////////////////////////////////////////////////////////

import React from 'react';
import Transition from 'components/core/Transition';
import ScrollWrapper from 'components/core/ScrollWrapper';
import { Navigation } from 'components/library/Navigation/';
import Footer from 'components/library/Footer';

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Navigation {...props} />
      <Transition {...props}>{element}</Transition>
      <Footer {...props} />
    </>
  );
};

export default wrapPageElement;

//////////////////////////////////////////////////////////////////////
// End Helper

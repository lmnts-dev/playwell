// DeviceQuery.js:
// For switching between Media contexts and screen
// widths. For example, Mobile vs Desktop content.
// We're using Pure CSS for this method.

// Core
import React from 'react';

// Styles
import DeviceQuery from './styles.scss';

import { UserAgentProvider, UserAgent } from '@quentin-sommer/react-useragent';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MobileQuery = ({ children }) => {
  if (typeof window !== 'undefined') {
    return (
      <UserAgent mobile android ios tablet>
        <DeviceQuery.Mobile>{children}</DeviceQuery.Mobile>
      </UserAgent>
    );
  } else {
    return <DeviceQuery.Mobile>{children}</DeviceQuery.Mobile>;
  }
};

const DesktopQuery = ({ children }) => {
  if (typeof window !== 'undefined') {
    return (
      <UserAgent computer>
        <DeviceQuery.Desktop>{children}</DeviceQuery.Desktop>
      </UserAgent>
    );
  } else {
    return <DeviceQuery.Desktop>{children}</DeviceQuery.Desktop>;
  }
};

class Device extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Query = this.props.Query;

    if (Query == 'Mobile') {
      return <MobileQuery>{this.props.children}</MobileQuery>;
    }

    if (Query == 'Desktop') {
      return <DesktopQuery>{this.props.children}</DesktopQuery>;
    }
  }
}
export default Device;

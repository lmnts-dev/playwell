// This helper allows any component to be
// conscious of the page location as well
// as access to query params in the URL by
// utilizing the queryString function that
// we've imported above.

// i.e. play-well.org/programs?show=courses
// You can access 'show' via queryString.parse(location.show)

// By wrapping any component with this helper, like
// to the example below below:
// export default withLocation(LayoutWithMetadata);
//
// It then provides them with the following props:
// `location`
// `navigate`
// `search`

import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const withLocation = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

export default withLocation;

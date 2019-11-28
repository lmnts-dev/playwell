/**
 *
 * countyClean.js
 * This 'cleans' our county names to return better strings. I.e. if a string
 * already contains 'County' or 'Center' - do not append 'County' to the name.
 *
 * @param countyName = String, should be a county name.
 * @returns cleaned county name - i.e. 'Los Angeles County'
 *
 */

import React, { PureComponent } from 'react';

// Helpers
import slugify from 'helpers/slugify';

// Begin Helper
//////////////////////////////////////////////////////////////////////

export const countyClean = countyName => {
  if (
    countyName.toLowerCase().includes('county') ||
    countyName.toLowerCase().includes('district') ||
    countyName.toLowerCase().includes('center')
  ) {
    return countyName;
  } else {
    return countyName + ' County';
  }
};

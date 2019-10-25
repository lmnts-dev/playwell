// Navigation Transformer Component:
// This is to transform our Navigation data into usable data.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Constants
import { Theme, Root } from 'constants/Theme';
import { ColorMatch } from 'constants/styles/Color';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const navDataTransformer = sourceData => {
  // Our Source Node
  let sourceNode = sourceData.allDataJson.edges[0].node.nav;

  // Primary navigation map
  let primaryNavMap = sourceNode.primaryNav.linkList.map((link, idx) => {
    console.log('primaryNavMap:');
    console.log(link.subNav.focusLinkList);
    console.log(link.subNav.minorLinkList);

    return {
      route: link.route,
      label: link.label,
      theme: {
        primaryColor: ColorMatch(link.theme.primaryColor),
        activeColor: ColorMatch(link.theme.activeColor),
      },
      // Sidebar
      subNav: {
        // Focus Link List
        focusLinkList: link.subNav.focusLinkList,

        // Minor Link List
        minorLinkList: link.subNav.minorLinkList,
      },
    };
  });

  // Footer navigation map
  let footerNavMap = sourceNode.footerNav.linkList.map((link, idx) => {
    return {
      label: link.label,
      route: link.route,
    };
  });

  // Our final data map
  let navDataMap = {
    focusNav: {
      route: sourceNode.focusNav.route,
      // eslint-disable-next-line
      label: sourceNode.focusNav.label,
    },
    // Primary Nav
    primaryNav: {
      linkList: primaryNavMap,
    },
    footerNav: {
      linkList: footerNavMap,
    },
  };

  return navDataMap;
};

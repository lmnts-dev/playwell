// Navigation Transformer Component:
// This is to transform our Navigation data into usable data.

// Imports
//////////////////////////////////////////////////////////////////////

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const data = {
  // Focus Nav
  // f.e. 'Lets Play!'
  focusNav: {
    route: '/play',
    // eslint-disable-next-line
    label: "Let's Play",
  },
  // Primary Nav
  primaryNav: {
    linkList: [
      {
        route: '/programs',
        label: 'Programs',
        theme: {
          primaryColor: Theme.Color.Deepsea,
          activeColor: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/dir-sample',
              label: 'View All Programs',
              focus: true,
            },
            {
              route: '/programs/special-events',
              label: 'Special Events',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Programs Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/locations',
        label: 'Locations',
        theme: {
          primaryColor: Theme.Color.Eggplant,
          activeColor: Theme.Color.Nova,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Locations Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Locations Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Locations Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/who-we-are',
        label: 'Who We Are',
        theme: {
          primaryColor: Theme.Color.Sunset,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'About Link',
              focus: true,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
            {
              route: '/',
              label: 'About Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'About Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/parties',
        label: 'Parties',
        theme: {
          primaryColor: Theme.Color.Sunlight,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Parties Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Parties Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Parties Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Parties Link',
              subhead: false,
            },
          ],
        },
      },
      {
        route: '/community',
        label: 'Community',
        theme: {
          primaryColor: Theme.Color.Sky,
          activeColor: Theme.Color.Nightsky,
        },
        // Sidebar
        subNav: {
          // Focus Link List
          focusLinkList: [
            {
              route: '/',
              label: 'Community Link',
              focus: true,
            },
            {
              route: '/',
              label: 'Community Link',
              focus: false,
            },
            {
              route: '/',
              label: 'Community Link',
              focus: false,
            },
          ],

          // Minor Link List
          minorLinkList: [
            {
              route: false,
              label: 'Subhead',
              subhead: true,
            },
            {
              route: '/',
              label: 'Community Link',
              subhead: false,
            },
            {
              route: '/',
              label: 'Community Link',
              subhead: false,
            },
          ],
        },
      },
    ],
  },
  footerNav: {
    linkList: [
      {
        label: 'Programs',
        route: '/programs',
      },
      {
        label: 'Special Events',
        route: '/programs/special-events',
      },
      {
        label: 'Who We Are',
        route: '/who-we-are',
      },
      {
        label: 'Parties',
        route: '/parties',
      },
      {
        label: 'Community',
        route: '/community',
      },
      {
        label: 'Contact',
        route: '/contact',
      },
      {
        label: 'Careers',
        route: '/careers',
      },
      {
        label: 'Partnerships',
        route: '/partnerships',
      },
      {
        label: 'Play Zone',
        route: '/play',
      },
    ],
  },
};

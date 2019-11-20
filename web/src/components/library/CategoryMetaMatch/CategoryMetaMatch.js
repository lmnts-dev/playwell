// CategoryMetaMatch.js:
// This is for storing and managing metadata for
// individual PlayWell categories. Data such as Theming or
// descriptions for SEO.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const CategoryMetaMatch = categoryName => {
  const categoriesMetaData = {
    categories: [
      {
        name: 'Course',
        theme: {
          bgColor: Theme.Color.Sky,
          primaryColor: Theme.Color.White,
          secondaryColor: Theme.Color.Deepsea,
          tertiaryColor: Theme.Color.White,
        },
      },
      {
        name: 'Workshop',
        theme: {
          bgColor: Theme.Color.Nova,
          primaryColor: Theme.Color.White,
          secondaryColor: Theme.Color.Dino,
          tertiaryColor: Theme.Color.White,
        },
      },
      {
        name: 'Camp',
        theme: {
          bgColor: Theme.Color.Sunlight,
          primaryColor: Theme.Color.White,
          secondaryColor: Theme.Color.Dino,
          tertiaryColor: Theme.Color.White,
        },
      },
      // This is a fallback for if the name doesn't match.
      {
        name: 'Program',
        theme: {
          bgColor: Theme.Color.Galaxy,
          primaryColor: Theme.Color.White,
          secondaryColor: Theme.Color.Nova,
          tertiaryColor: Theme.Color.White,
        },
      },
    ],
  };

  switch (categoryName) {
    // Core Colors
    case 'Course':
      return categoriesMetaData.categories.filter(
        category => category.name == 'Course'
      )[0];
    case 'Workshop':
      return categoriesMetaData.categories.filter(
        category => category.name == 'Workshop'
      )[0];
    case 'Camp':
      return categoriesMetaData.categories.filter(
        category => category.name == 'Camp'
      )[0];

    // Fallback
    default:
      return categoriesMetaData.categories.filter(
        category => category.name == 'Program'
      )[0];
  }
};

//////////////////////////////////////////////////////////////////////
// End Component

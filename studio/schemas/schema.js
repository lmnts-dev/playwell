// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent'
import focusLinkItem from './objects/navigation/focusLinkListItem'
import focusNav from './objects/navigation/focusNav'
import footerNav from './objects/navigation/footerNav'
import footerNavItem from './objects/navigation/footerNavItem'
import minorLinkListItem from './objects/navigation/minorLinkListItem'
import nav from './objects/navigation/nav'
import primaryNav from './objects/navigation/primaryNav'
import primaryNavItem from './objects/navigation/primaryNavItem'
import siteMetadata from './objects/siteMetadata'
import social from './objects/social'
import subNav from './objects/navigation/subNav'
import theme from './objects/navigation/theme'
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'
import siteSettings from './documents/siteSettings'
import location from './documents/location'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    siteSettings,
    location,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    focusLinkItem,
    focusNav,
    footerNav,
    footerNavItem,
    minorLinkListItem,
    nav,
    primaryNav,
    primaryNavItem,
    siteMetadata,
    social,
    subNav,
    theme
  ])
})

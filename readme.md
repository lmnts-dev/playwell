  <a href="https://github.com/lmnts-dev/lmnts-gatsby-starter">
    <img
      src="https://cdn.dribbble.com/users/1826170/avatars/normal/56c47446d104c3768bbd90d907b1f238.jpg?1518642823"
      height="80"
      alt="lmnts-gatsby-starter"
      title="lmnts-gatsby-starter"
    />
  </a>

<h1>
PlayWell Web Platform
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/808f6071-c3ee-414a-bc18-cf74024bbc64/deploy-status)](https://app.netlify.com/sites/modest-noether-8f137a/deploys) [![Gatsby](https://img.shields.io/badge/-gatsby-FC6376.svg)](gatsbyjs.org) [![View Staging](https://img.shields.io/badge/-staging-2984FD.svg)](https://modest-noether-8f137a.netlify.com)

The PlayWell web platform. Based off of the LMNTS-Gatsby v2 starter using the <code>lmnts</code> methodology of building websites. Includes React Context, styled-components, page transitions, scroll events with <code>IntersectionObserver</code> and a focus on accessibility and SEO. Made for state-of-the-art marketing sites. 

***

## Features

- [X] ✨ Page Transitions, component-based (with no-js support)
- [X] 👀 `IntersectionObserver`, component-based (with polyfill)
- [X] 🌌 React Context for global UI state, with SSR
- [X] 💅 [`styled-components`](https://www.styled-components.com/) v4
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔥 Code Splitting of CSS and JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))
- [X] 📈 Google Analytics with [`gatsby-plugin-google-analytics`](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/?=google%20analytics)
- [X] 🧠 Machine-learning based prerendering and prefetching with [`guess.js`](https://www.gatsbyjs.org/packages/gatsby-plugin-guess-js/?=guess)

## Future Plans
- ⚠️ Typescript
- ⚠️ Further Schema.org generation
- ⚠️ Contextual page Schema.org & Keyword generation
- ⚠️ Lazy load all images using IntersectionObserver
- ⚠️ Add Favicon Script to `npm run build` to automate Favicon Generation
- ⚠️ Contentful Support
- ⚠️ Wordpress Support
- ⚠️ Shopify Support
- ⚠️ NetlifyCMS Support
- ⚠️ Drupal Support


Do you have suggestions or feedback? [Open an issue](https://github.com/lmnts-dev/lmnts-gatsby-starter/issues/new)!

## Lighthouse scores (on [Netlify](https://netlify.com))

[![Lighthouse scores (on Netlify)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)](https://circleci.com/gh/lmnts-dev/lmnts-gatsby-starter)

## Usage

We're building this on Gatsby and utilizing (Sanity.io)[sanity.io] for the CMS. Therefor, there is two structures in this repository -- meaning we have two separate node packages going on, requiring the usage of (Lerna)[https://lerna.js.org/]

```bash
# Clone the repo
npm i

# Option 1: Run Lerna to run both Sanity Studio and the Gatsby site at the same time.
# Caveats: No eslint errors in your terminal.
lerna run dev

# Option 2: Open /web/ and /studio/ in two separate tabs on your terminal and run your node scripts.
npm run dev
```

## Configuration in `/web/`

Find the site-wide configuration in `Theme.js`.

```bash
├── src
│   ├── constants
│   │   ├── site # Core site information.
│   │   ├── styles # Style information: global variables, palette, fonts, etc.
│   │   └── Theme.js # Consolidated delivery of the above constants. I.e. adding 'px' to the end of integer values.
```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure in `/web/`
For further reading on methodolgy, keep sscrolling.

```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── assets
│   ├── components
│   ├── elements
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── helpers
│   │   ├── SchemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── MediaQueries.js # Creates media queries for styled-components
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Methodology in `/web/`
### Elements
Elements are static, logic-less building blocks.
```bash
├── src
│   ├── elements
│   │   ├── Block
│   │   ├── Inner
│   │   └── Section
```

### Components in `/web/`
Components are collections of Elements and often contain logic.
```bash
├── src
│   ├── components
│   │   ├── core # <Head> tag, transitions, Layout, IntersectionObserver, SEO generation
│   │   ├── library # Various components needed for the site pages.
│   │   └── sitewide # Visible sitewide components: Navigation, footer, etc.
```

### Building with these in `/web/`
We follow the guidelines below for typical generation and nesting of Elements:
```bash
<Section>
  <Inner>
    <Block>
      # Content Here
    </Block>
  </Inner>
</Section>
```

- `<Section>` : The wrapper of the elements. Uses the site's Base.js gutters. Always fullwidth.
- `<Inner>` : The inner part of the section. Only one of these exist at all times. Always `relative`, and also can be various widths if needed.
- `<Block>` : Various, repeatable elements. This is the core content container.

### Componentizing collections of Elements in `/web/`

<i>TODO: Pete will write this...</i>

## Author

* Peter Laxalt ([@peterlaxalt](https://dribbble.com/peterlaxalt)) - [Laxalt & McIver](https://laxaltandmciver.co)

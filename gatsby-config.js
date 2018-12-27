module.exports = {
  siteMetadata: {
    title: 'ATA Locations Landing Pages',
    description:
      'Prototype build for the various ATA landing pages for each location',
    author: 'Adam Curl',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // base url of Wordpress site
        baseUrl: 'atacpa.net',
        // The protocol. This can be http or https.
        protocol: 'http',
        // Indicates whether the site is hosted on wordpress.com or not
        hostingWPCOM: false,
        // Indicates if site uses Advanced Custom Fields
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        acfOptionPageIds: [],
        // View verbose output
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Whitelisted routes using glob patterns
        /* 
          This is where the inital request for API info is called. Without first requesting
          the items here, the info will not be able to be queried for the rest of the site.
          -- Adam
         */
        includedRoutes: [
          '/*/*/pages',
          '/*/*/leader',
          '/*/*/locations',
          '/*/*/menus',
          '/*/*/menu-locations',
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}

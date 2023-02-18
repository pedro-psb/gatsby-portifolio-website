path = require(`path`)

module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Pedro Pessoa portifolio`,
    // Used to provide alt text for your avatar
    author: `Pedro Pessoa`,
    // Used for SEO
    description: `Pedro Pessoa portifolio`,
    // Used for resolving images in social cards
    siteUrl: `https://example.com`,
    // Used for social links in the root footer
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/pedro-psb`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/pedro-pessoa-51250516b/`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/pedro_brochado`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-mantine',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: '/blog',
      },
    },
  ],
};

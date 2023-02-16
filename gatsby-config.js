module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Pedro Pessoa portifolio`,
    // Used to provide alt text for your avatar
    author: `Pedro Pessoa`,
    // Used for SEO
    description: `My personal dev portifolio`,
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
    'gatsby-plugin-mantine',
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: '/blog',
      },
    },
  ],
};
